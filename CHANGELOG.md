# Changelog & Version Info

## 1.15.0

- Support Secret Network v1.15
- Add new queries:
  - `secretjs.query.app.config()`
  - `secretjs.query.auth.moduleAccounts()`
  - `secretjs.query.auth.bech32Prefix()`
  - `secretjs.query.auth.addressBytesToString()`
  - `secretjs.query.auth.addressStringToBytes()`
  - `secretjs.query.auth.accountAddressByID()`
  - `secretjs.query.auth.accountInfo()`
  - `secretjs.query.autocli.appOptions()`
  - `secretjs.query.bank.spendableBalanceByDenom()`
  - `secretjs.query.bank.denomMetadataByQueryString()`
  - `secretjs.query.bank.denomOwners()`
  - `secretjs.query.bank.sendEnabled()`
  - `secretjs.query.bank.denomOwnersByQuery()`
  - `secretjs.query.consensus.params()`
  - `secretjs.query.distribution.validatorDistributionInfo()`
  - `secretjs.query.ibc_channel.channelParams()`
  - `secretjs.query.ibc_channel.nextSequenceSend()`
  - `secretjs.query.ibc_channel.upgradeError()`
  - `secretjs.query.ibc_channel.upgrade()`
  - `secretjs.query.ibc_connection.connectionParams()`
  - `secretjs.query.ibc_transfer.totalEscrowForDenom()`
  - `secretjs.query.node.status()`
  - `secretjs.query.orm.get()`
  - `secretjs.query.orm.list()`
  - `secretjs.query.params.subspaces()`
  - `secretjs.query.cometbft.abciQuery()`
  - `secretjs.query.upgrade.authority()`
- Add new messages:
  - `secretjs.tx.bank.setSendEnabled()`
  - `secretjs.tx.distribution.communityPoolSpend()`
  - `secretjs.tx.distribution.depositValidatorRewardsPool()`
  - `secretjs.tx.feegrant.pruneAllowances()`
  - `secretjs.tx.gov.execLegacyContent()`
  - `secretjs.tx.gov.cancelProposal()`
  - `secretjs.tx.ibc_interchain_accounts.sendTx()`
  - `secretjs.tx.ibc_interchain_accounts.registerInterchainAccount()`
  - `secretjs.tx.staking.cancelUnbondingDelegation()`
  - `secretjs.tx.upgrade.softwareUpgrade()`
  - `secretjs.tx.upgrade.cancelUpgrade()`
  - `secretjs.tx.vesting.createPermanentLockedAccount()`
  - `secretjs.tx.vesting.createPeriodicVestingAccount()`
- `AminoWallet` is deprecated in favor of `Wallet`. Some messages and queries may not work with `AminoWallet`
- `BroadcastMode.Block` is deprecated, use `BroadcastMode.Sync` instead
- API breaking: replace `mauth` module with `ibc_interchain_accounts`
- API breaking: `SendAuthorization` that is used as a parameter for `secretjs.authz.grant()` now has additional parameter `allow_list`
- API breaking: all tx data that previously was in `rawLog` before is now can be found in `events`
- API breaking: move from gov v1beta1 to v1
- API breaking: for `MsgPayPacketFee` `relayers` must be specified even if it is empty
- API breaking (known issue): for `secretjs.tx.ibc.tranfser()` `memo` must be non-empty

## 1.12.5

Fix `signAmino()` to broadcast the memo from the signer (wallet) instead of the memo from the caller.

## 1.12.4

Fix `txsQuery()` for Cosmos SDK v0.46+ chains

## 1.12.3

Fix (another case of) error handling for "tx not found" in `getTx()`

## 1.12.1

Fix error handling for "tx not found" in `getTx()`

## 1.12.0

Support Secret Network v1.12

## 1.11.1

- Support Secret Network v1.11
- Contract upgrade support:
  - Add `secretjs.tx.compute.migrateContract()`
  - Add `secretjs.tx.compute.updateAdmin()`
  - Add `secretjs.tx.compute.clearAdmin()`
  - Add `admin` field to `secretjs.query.compute.instantiatedContract()`
  - Add `secretjs.query.compute.contractHistory()`
  - Add `admin` field to the result of `secretjs.query.compute.contractInfo()`
- API breaking: `secretjs.tx.signTx()` now returns `txBytes` as a `Uint8Array` instead of a base64 `string`.
- API breaking: `secretjs.tx.broadcastSignedTx()` now receives `txBytes` as a `Uint8Array` instead of a base64 `string`.
- #154: Move sinon to devDependencies (Thanks [@egasimus](https://github.com/egasimus)!)
- #155: Make test.sh portable (Thanks [@egasimus](https://github.com/egasimus)!)
- #156: Fix CVE-2023-36665 by upgrading protobufjs to 6.11.4 (Thanks [@egasimus](https://github.com/egasimus)!)

## 1.9.3

Fix a bug where error messages would sometimes not decrypt on highly nested contract calls.

## 1.9.2

Fix sending txs from vesting accounts.

## 1.9.1

Support SNIP-20 & SNIP-721 permit signing with MetaMaskWallet.

## 1.9.0

- Support Secret Network v1.9
- Fix `secretjs.tx.vesting.createVestingAccount()`
- Fix `secretjs.tx.registration.register()`
- Support IBC panic button:
  - `secretjs.tx.emergency_button.toggleIbcSwitch()` & `MsgToggleIbcSwitch`
  - `secretjs.query.emergency_button.params()`
- Support IBC Fee middleware:
  - `secretjs.tx.ibc_fee.payPacketFee()` & `MsgPayPacketFee`
  - `secretjs.tx.ibc_fee.payPacketFeeAsync()` & `MsgPayPacketFeeAsync`
  - `secretjs.tx.ibc_fee.registerPayee()` & `MsgRegisterPayee`
  - `secretjs.tx.ibc_fee.registerCounterpartyPayee()` & `MsgRegisterCounterpartyPayee`
  - `secretjs.query.ibc_fee.incentivizedPackets()`
  - `secretjs.query.ibc_fee.incentivizedPacket()`
  - `secretjs.query.ibc_fee.incentivizedPacketsForChannel()`
  - `secretjs.query.ibc_fee.totalRecvFees()`
  - `secretjs.query.ibc_fee.totalAckFees()`
  - `secretjs.query.ibc_fee.totalTimeoutFees()`
  - `secretjs.query.ibc_fee.payee()`
  - `secretjs.query.ibc_fee.counterpartyPayee()`
  - `secretjs.query.ibc_fee.feeEnabledChannels()`
  - `secretjs.query.ibc_fee.feeEnabledChannel()`
- Support IBC Packet Forward Middleware (PFM):
  - `secretjs.query.ibc_packet_forward.params()`

## 1.8.1

Fix: Don't actually sign the tx in simulation mode.

In simulation mode the node does not validate the signature. However, prior to v1.8.0 of secret.js, the simulated transaction was still being signed. This was inconvenient for UIs as it prompted users to provide a signature, rendering the simulation feature practically unusable, especially for Ledger users.

## 1.8.0

- Support Secret Network v1.8
- Add the `memo` field in IBC MsgTransfer
- Add `secretjs.query.ibc_transfer.escrowAddress()`
- Add `secretjs.query.ibc_client.consensusStateHeights()`
- Add `secretjs.query.ibc_client.consensusStateHeights()`
- Add `secretjs.query.ibc_iterchain_accounts_host.params()`
- Add `secretjs.query.ibc_iterchain_accounts_controller.params()`
- Add `secretjs.query.ibc_iterchain_accounts_controller.interchainAccount()`

## 1.7.2

Optimize encryption setup for v1.7.

## 1.7.1

Support Secret Network v1.7.

## 1.6.14

Export `MsgCreateVestingAccount`.

## 1.6.13

Fix `getTx()` sometimes throws "tx not found" instead of returning null.

## 1.6.12

- Allow passing `ibcTxOptions` to `getTx()`
- Fix resolving IBC responses when broadcasting a tx on Async & Sync modes

## 1.6.11

- Accept URLs with trailing slashes in `SecretNetworkClient`
- Fix Amino signing bug (introduced in v1.6.10)

## 1.6.10

Fix support for CosmJS' `DirectSigner`, which is used by wallets. E.g. this fixes using `keplr.getOfflineSigner()` as a wallet in `SecretNetworkClient`.

## 1.6.9

Add the `validateAddress()` helper function.

## 1.6.8

- Turn off `ibcResponses` by default on `txsQuery()` as it can lead to request spamming when there are a lot of results
- Add the `stringToCoin()` helper function
- Alias `coinFromString()` => `stringToCoin()`
- Alias `coinsFromString()` => `stringToCoins()`

## 1.6.7

- `txsQuery()`:
  - Add `pagination` & `order_by` options
  - Add `ibcTxOptions` - control whether and how to resolve IBC response txs
- Fix docs for how to query at a specific height
- Add the `stringToCoins()` helper function

## 1.6.6

Support sending txs that were signed with an Ethermint pubkey.

## 1.6.5

Fix a bug in `ibcResponses` where it sometimes returns a wrong ack/timeout tx.

Note: versions 1.6.2 through 1.6.4 are deprecated due to an NPM upload issue.

## 1.6.1

- Fix handling of empty response on `secretjs.query.compute.queryContract()`.
- Add the `ibcDenom()` util function for calculating the IBC denom of a token that was sent over IBC.

## 1.6.0

Add `ibcResponses` to `TxResponse` - if a tx results in IBC packets being sent, `ibcResponses` contains the IBC ack/timeout txs, Making it easy to verify the success of an IBC operations.

## 1.5.3

Fix localStorage optimization on `MetaMaskWallet.create()`

## 1.5.2

Reverted previous change

## 1.5.1

Removed hardcoded TX Key in preparation of Secret Network Shockwave Omega

## 1.5.0

- BREAKING CHANGE: Switched all the APIs to GRPC-gateway. As a result, some commands have been slightly changed.
  Most noticeable:
  - The library now uses REST endpoints, changed from grpc-web endpoints. To reflect this change `grpcWebUrl` is now `url` when creating a new client
  - Creating a new client is now sync using _new_ (rather than Async): `new SecretNetworkClient(...)`
  - Names of parameters are now snake_case rather than camelCase. e.g. `contractAddress` or `codeHash` is now `contract_address` or `code_hash`
  - `Tx` is now `TxResponse`
