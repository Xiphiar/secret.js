import { AminoMsg, Msg, ProtoMsg } from "./types";

export type MsgUnjailParams = {
  validatorAddr: string;
};

export class MsgUnjail implements Msg {
  public validatorAddr: string;

  constructor({ validatorAddr }: MsgUnjailParams) {
    this.validatorAddr = validatorAddr;
  }

  async toProto(): Promise<ProtoMsg> {
    const msgContent = {
      validatorAddr: this.validatorAddr,
    };

    return {
      typeUrl: "/cosmos.slashing.v1beta1.MsgUnjail",
      value: msgContent,
      encode: async () =>
        (
          await import("../protobuf_stuff/cosmos/slashing/v1beta1/tx")
        ).MsgUnjail.encode(msgContent).finish(),
    };
  }

  async toAmino(): Promise<AminoMsg> {
    return {
      type: "cosmos-sdk/MsgUnjail",
      value: {
        address: this.validatorAddr,
      },
    };
  }
}
