// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v1.178.0
//   protoc               v3.21.3
// source: secret/emergencybutton/v1beta1/tx.proto

/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
import { Params } from "./params";

export const protobufPackage = "secret.emergencybutton.v1beta1";

/**
 * MsgToggleIbcSwitch represents a message to toggle the emergencybutton status
 * by the defined pauser.
 */
export interface MsgToggleIbcSwitch {
  sender: string;
}

/** MsgToggleIbcSwitchResponse defines the response type for the toggle. */
export interface MsgToggleIbcSwitchResponse {
}

export interface MsgUpdateParams {
  /** authority is the address of the governance account. */
  authority: string;
  /**
   * params defines the x/emergencybutton parameters to update.
   *
   * NOTE: All parameters must be supplied.
   */
  params?: Params | undefined;
}

export interface MsgUpdateParamsResponse {
}

function createBaseMsgToggleIbcSwitch(): MsgToggleIbcSwitch {
  return { sender: "" };
}

export const MsgToggleIbcSwitch = {
  encode(message: MsgToggleIbcSwitch, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgToggleIbcSwitch {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgToggleIbcSwitch();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.sender = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgToggleIbcSwitch {
    return { sender: isSet(object.sender) ? globalThis.String(object.sender) : "" };
  },

  toJSON(message: MsgToggleIbcSwitch): unknown {
    const obj: any = {};
    if (message.sender !== "") {
      obj.sender = message.sender;
    }
    return obj;
  },

  create(base?: DeepPartial<MsgToggleIbcSwitch>): MsgToggleIbcSwitch {
    return MsgToggleIbcSwitch.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MsgToggleIbcSwitch>): MsgToggleIbcSwitch {
    const message = createBaseMsgToggleIbcSwitch();
    message.sender = object.sender ?? "";
    return message;
  },
};

function createBaseMsgToggleIbcSwitchResponse(): MsgToggleIbcSwitchResponse {
  return {};
}

export const MsgToggleIbcSwitchResponse = {
  encode(_: MsgToggleIbcSwitchResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgToggleIbcSwitchResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgToggleIbcSwitchResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): MsgToggleIbcSwitchResponse {
    return {};
  },

  toJSON(_: MsgToggleIbcSwitchResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<MsgToggleIbcSwitchResponse>): MsgToggleIbcSwitchResponse {
    return MsgToggleIbcSwitchResponse.fromPartial(base ?? {});
  },
  fromPartial(_: DeepPartial<MsgToggleIbcSwitchResponse>): MsgToggleIbcSwitchResponse {
    const message = createBaseMsgToggleIbcSwitchResponse();
    return message;
  },
};

function createBaseMsgUpdateParams(): MsgUpdateParams {
  return { authority: "", params: undefined };
}

export const MsgUpdateParams = {
  encode(message: MsgUpdateParams, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateParams {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.authority = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.params = Params.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateParams {
    return {
      authority: isSet(object.authority) ? globalThis.String(object.authority) : "",
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
    };
  },

  toJSON(message: MsgUpdateParams): unknown {
    const obj: any = {};
    if (message.authority !== "") {
      obj.authority = message.authority;
    }
    if (message.params !== undefined) {
      obj.params = Params.toJSON(message.params);
    }
    return obj;
  },

  create(base?: DeepPartial<MsgUpdateParams>): MsgUpdateParams {
    return MsgUpdateParams.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MsgUpdateParams>): MsgUpdateParams {
    const message = createBaseMsgUpdateParams();
    message.authority = object.authority ?? "";
    message.params = (object.params !== undefined && object.params !== null)
      ? Params.fromPartial(object.params)
      : undefined;
    return message;
  },
};

function createBaseMsgUpdateParamsResponse(): MsgUpdateParamsResponse {
  return {};
}

export const MsgUpdateParamsResponse = {
  encode(_: MsgUpdateParamsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateParamsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): MsgUpdateParamsResponse {
    return {};
  },

  toJSON(_: MsgUpdateParamsResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<MsgUpdateParamsResponse>): MsgUpdateParamsResponse {
    return MsgUpdateParamsResponse.fromPartial(base ?? {});
  },
  fromPartial(_: DeepPartial<MsgUpdateParamsResponse>): MsgUpdateParamsResponse {
    const message = createBaseMsgUpdateParamsResponse();
    return message;
  },
};

/** Msg defines the bank Msg service. */
export interface Msg {
  /**
   * ToggleIbcSwitch defines a method for toggling the status of the
   * emergencybutton.
   */
  ToggleIbcSwitch(request: MsgToggleIbcSwitch): Promise<MsgToggleIbcSwitchResponse>;
  UpdateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
}

export const MsgServiceName = "secret.emergencybutton.v1beta1.Msg";
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || MsgServiceName;
    this.rpc = rpc;
    this.ToggleIbcSwitch = this.ToggleIbcSwitch.bind(this);
    this.UpdateParams = this.UpdateParams.bind(this);
  }
  ToggleIbcSwitch(request: MsgToggleIbcSwitch): Promise<MsgToggleIbcSwitchResponse> {
    const data = MsgToggleIbcSwitch.encode(request).finish();
    const promise = this.rpc.request(this.service, "ToggleIbcSwitch", data);
    return promise.then((data) => MsgToggleIbcSwitchResponse.decode(_m0.Reader.create(data)));
  }

  UpdateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse> {
    const data = MsgUpdateParams.encode(request).finish();
    const promise = this.rpc.request(this.service, "UpdateParams", data);
    return promise.then((data) => MsgUpdateParamsResponse.decode(_m0.Reader.create(data)));
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
