import fs from "fs";
import { Permit, TxResultCode } from "../src";
import { accounts, getValueFromEvents } from "./utils";

beforeAll(() => {
  jest.spyOn(console, "warn").mockImplementation(() => {});
});

describe("permit", () => {
  test("sign", async () => {
    const { secretjsProto } = accounts[0];

    const txStore = await secretjsProto.tx.compute.storeCode(
      {
        sender: accounts[0].address,
        wasm_byte_code: fs.readFileSync(
          `${__dirname}/snip20-ibc.wasm.gz`,
        ) as Uint8Array,
        source: "",
        builder: "",
      },
      {
        gasLimit: 5_000_000,
      },
    );

    if (txStore.code !== TxResultCode.Success) {
      console.error(txStore.rawLog);
    }
    expect(txStore.code).toBe(TxResultCode.Success);

    const code_id = getValueFromEvents(txStore.events, "message.code_id");

    const { code_hash } = await secretjsProto.query.compute.codeHashByCodeId({
      code_id,
    });

    const txInit = await secretjsProto.tx.compute.instantiateContract(
      {
        sender: accounts[0].address,
        code_id,
        code_hash,
        init_msg: {
          name: "Secret SCRT",
          admin: accounts[0].address,
          symbol: "SSCRT",
          decimals: 6,
          initial_balances: [{ address: accounts[0].address, amount: "2" }],
          prng_seed: "eW8=",
          config: {
            public_total_supply: true,
            enable_deposit: true,
            enable_redeem: true,
            enable_mint: false,
            enable_burn: false,
          },
          supported_denoms: ["uscrt"],
        },
        label: `label-${Date.now()}`,
        init_funds: [],
      },
      {
        gasLimit: 5_000_000,
      },
    );
    const contractAddress = getValueFromEvents(
      txInit.events,
      "message.contract_address",
    );
    const permit = await secretjsProto.utils.accessControl.permit.sign(
      accounts[0].address,
      "secret-2",
      "test",
      [contractAddress],
      ["owner", "balance"],
      false,
    );

    const query = await secretjsProto.query.snip20.getBalance({
      contract: { address: contractAddress, code_hash: code_hash! },
      address: accounts[0].address,
      auth: { permit },
    });

    expect(query.balance.amount).toEqual("2");
  });

  test("invalid permit signature", async () => {
    const { secretjs } = accounts[0];

    let permit = await secretjs.utils.accessControl.permit.sign(
      accounts[0].address,
      "secret-2",
      "test",
      ["abcdef"],
      ["owner", "balance"],
      false,
    );

    permit.signature = {
      signature: "afffffffffffffffffffff",
      pub_key: permit.signature.pub_key,
    };

    try {
      secretjs.utils.accessControl.permit.verify(
        permit,
        accounts[0].address,
        "abcdef",
        ["owner"],
      );
    } catch (e: any) {
      expect(e?.type).toBe("PermitError");
      return;
    }
    expect("This should have failed already").toBe("Not here");
  });

  test("contract not in permit", async () => {
    const { secretjs } = accounts[0];

    let permit = await secretjs.utils.accessControl.permit.sign(
      accounts[0].address,
      "secret-2",
      "test",
      ["abcdef"],
      ["owner", "balance"],
      false,
    );

    permit.signature = {
      signature: "afffffffffffffffffffff",
      pub_key: permit.signature.pub_key,
    };

    try {
      secretjs.utils.accessControl.permit.verify(
        permit,
        accounts[0].address,
        "xxxxxxxxxxxxxxxxxxxxx",
        ["owner"],
      );
    } catch (e: any) {
      expect(e?.type).toBe("PermitError");
      return;
    }
    expect("This should have failed already").toBe("Not here");
  });

  test("permit address is not signer", async () => {
    const { secretjs } = accounts[0];

    let permit = await secretjs.utils.accessControl.permit.sign(
      accounts[0].address,
      "secret-2",
      "test",
      ["abcdef"],
      ["owner", "balance"],
      false,
    );

    permit.signature = {
      signature: "afffffffffffffffffffff",
      pub_key: permit.signature.pub_key,
    };

    try {
      secretjs.utils.accessControl.permit.verify(
        permit,
        accounts[1].address,
        "abcdef",
        ["owner"],
      );
    } catch (e: any) {
      expect(e?.type).toBe("PermitError");
      return;
    }
    expect("This should have failed already").toBe("Not here");
  });

  test("pubkey does not match", async () => {
    const { secretjs } = accounts[0];
    const secretjs2 = accounts[1].secretjs;

    let permit = await secretjs.utils.accessControl.permit.sign(
      accounts[0].address,
      "secret-2",
      "test",
      ["abcdef"],
      ["owner", "balance"],
      false,
    );

    let permit2 = await secretjs2.utils.accessControl.permit.sign(
      accounts[1].address,
      "secret-2",
      "test",
      ["abcdef"],
      ["owner", "balance"],
      false,
    );

    permit.signature = permit2.signature;

    try {
      let res = secretjs.utils.accessControl.permit.verify(
        permit,
        accounts[0].address,
        "abcdef",
        ["owner"],
      );
      console.log(`result: ${res}`);
    } catch (e: any) {
      expect(e?.type).toBe("PermitError");
      return;
    }
    expect("This should have failed already").toBe("Not here");
  });

  test("validatePermit", async () => {
    const { secretjs } = accounts[0];

    let permit = await secretjs.utils.accessControl.permit.sign(
      accounts[0].address,
      "secret-2",
      "test",
      ["abcdef"],
      ["owner", "balance"],
      false,
    );

    let result = secretjs.utils.accessControl.permit.verifyNoExcept(
      permit,
      accounts[0].address,
      "abcdef",
      ["owner"],
    );
    expect(result).toBeTruthy();
  });

  test("validatePermit Keplr Signing", async () => {
    const { secretjs } = accounts[0];
    let permit: Permit = {
      params: {
        chain_id: "secret-4",
        permit_name: "default",
        allowed_tokens: ["secret1p0vgghl8rw4ukzm7geyy0f0tl29glxrtnlalue"],
        permissions: ["owner"],
      },
      signature: {
        pub_key: {
          type: "tendermint/PubKeySecp256k1",
          value: "AgyShSTNVC3olnm/VAPUvrN5IbGrqe1oH+E5/H3F9SUB",
        },
        signature:
          "c7t302ZD08RR9nRi3J1zx7YV3+KZc/C3HbG+IXF8jalH2n6x4WWM1Iaphx8P0dDoJoNyWDMq3SBhe10lWkCy0w==",
      },
    };

    let result = secretjs.utils.accessControl.permit.verify(
      permit,
      "secret1p0vgghl8rw4ukzm7geyy0f0tl29glxrtnlalue",
      "secret1p0vgghl8rw4ukzm7geyy0f0tl29glxrtnlalue",
      ["owner"],
    );
    expect(result).toBeTruthy();
  });
});
