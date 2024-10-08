// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v1.178.0
//   protoc               v3.21.3
// source: tendermint/types/validator.proto

/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";
import { PublicKey } from "../crypto/keys";

export const protobufPackage = "tendermint.types";

/** BlockIdFlag indicates which BlockID the signature is for */
export enum BlockIDFlag {
  /** BLOCK_ID_FLAG_UNKNOWN - indicates an error condition */
  BLOCK_ID_FLAG_UNKNOWN = 0,
  /** BLOCK_ID_FLAG_ABSENT - the vote was not received */
  BLOCK_ID_FLAG_ABSENT = 1,
  /** BLOCK_ID_FLAG_COMMIT - voted for the block that received the majority */
  BLOCK_ID_FLAG_COMMIT = 2,
  /** BLOCK_ID_FLAG_NIL - voted for nil */
  BLOCK_ID_FLAG_NIL = 3,
  UNRECOGNIZED = -1,
}

export function blockIDFlagFromJSON(object: any): BlockIDFlag {
  switch (object) {
    case 0:
    case "BLOCK_ID_FLAG_UNKNOWN":
      return BlockIDFlag.BLOCK_ID_FLAG_UNKNOWN;
    case 1:
    case "BLOCK_ID_FLAG_ABSENT":
      return BlockIDFlag.BLOCK_ID_FLAG_ABSENT;
    case 2:
    case "BLOCK_ID_FLAG_COMMIT":
      return BlockIDFlag.BLOCK_ID_FLAG_COMMIT;
    case 3:
    case "BLOCK_ID_FLAG_NIL":
      return BlockIDFlag.BLOCK_ID_FLAG_NIL;
    case -1:
    case "UNRECOGNIZED":
    default:
      return BlockIDFlag.UNRECOGNIZED;
  }
}

export function blockIDFlagToJSON(object: BlockIDFlag): string {
  switch (object) {
    case BlockIDFlag.BLOCK_ID_FLAG_UNKNOWN:
      return "BLOCK_ID_FLAG_UNKNOWN";
    case BlockIDFlag.BLOCK_ID_FLAG_ABSENT:
      return "BLOCK_ID_FLAG_ABSENT";
    case BlockIDFlag.BLOCK_ID_FLAG_COMMIT:
      return "BLOCK_ID_FLAG_COMMIT";
    case BlockIDFlag.BLOCK_ID_FLAG_NIL:
      return "BLOCK_ID_FLAG_NIL";
    case BlockIDFlag.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface ValidatorSet {
  validators: Validator[];
  proposer?: Validator | undefined;
  total_voting_power: string;
}

export interface Validator {
  address: Uint8Array;
  pub_key?: PublicKey | undefined;
  voting_power: string;
  proposer_priority: string;
}

export interface SimpleValidator {
  pub_key?: PublicKey | undefined;
  voting_power: string;
}

function createBaseValidatorSet(): ValidatorSet {
  return { validators: [], proposer: undefined, total_voting_power: "0" };
}

export const ValidatorSet = {
  encode(message: ValidatorSet, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.validators) {
      Validator.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.proposer !== undefined) {
      Validator.encode(message.proposer, writer.uint32(18).fork()).ldelim();
    }
    if (message.total_voting_power !== "0") {
      writer.uint32(24).int64(message.total_voting_power);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ValidatorSet {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseValidatorSet();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.validators.push(Validator.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.proposer = Validator.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.total_voting_power = longToString(reader.int64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ValidatorSet {
    return {
      validators: globalThis.Array.isArray(object?.validators)
        ? object.validators.map((e: any) => Validator.fromJSON(e))
        : [],
      proposer: isSet(object.proposer) ? Validator.fromJSON(object.proposer) : undefined,
      total_voting_power: isSet(object.total_voting_power) ? globalThis.String(object.total_voting_power) : "0",
    };
  },

  toJSON(message: ValidatorSet): unknown {
    const obj: any = {};
    if (message.validators?.length) {
      obj.validators = message.validators.map((e) => Validator.toJSON(e));
    }
    if (message.proposer !== undefined) {
      obj.proposer = Validator.toJSON(message.proposer);
    }
    if (message.total_voting_power !== "0") {
      obj.total_voting_power = message.total_voting_power;
    }
    return obj;
  },

  create(base?: DeepPartial<ValidatorSet>): ValidatorSet {
    return ValidatorSet.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ValidatorSet>): ValidatorSet {
    const message = createBaseValidatorSet();
    message.validators = object.validators?.map((e) => Validator.fromPartial(e)) || [];
    message.proposer = (object.proposer !== undefined && object.proposer !== null)
      ? Validator.fromPartial(object.proposer)
      : undefined;
    message.total_voting_power = object.total_voting_power ?? "0";
    return message;
  },
};

function createBaseValidator(): Validator {
  return { address: new Uint8Array(0), pub_key: undefined, voting_power: "0", proposer_priority: "0" };
}

export const Validator = {
  encode(message: Validator, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address.length !== 0) {
      writer.uint32(10).bytes(message.address);
    }
    if (message.pub_key !== undefined) {
      PublicKey.encode(message.pub_key, writer.uint32(18).fork()).ldelim();
    }
    if (message.voting_power !== "0") {
      writer.uint32(24).int64(message.voting_power);
    }
    if (message.proposer_priority !== "0") {
      writer.uint32(32).int64(message.proposer_priority);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Validator {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseValidator();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.address = reader.bytes();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.pub_key = PublicKey.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.voting_power = longToString(reader.int64() as Long);
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.proposer_priority = longToString(reader.int64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Validator {
    return {
      address: isSet(object.address) ? bytesFromBase64(object.address) : new Uint8Array(0),
      pub_key: isSet(object.pub_key) ? PublicKey.fromJSON(object.pub_key) : undefined,
      voting_power: isSet(object.voting_power) ? globalThis.String(object.voting_power) : "0",
      proposer_priority: isSet(object.proposer_priority) ? globalThis.String(object.proposer_priority) : "0",
    };
  },

  toJSON(message: Validator): unknown {
    const obj: any = {};
    if (message.address.length !== 0) {
      obj.address = base64FromBytes(message.address);
    }
    if (message.pub_key !== undefined) {
      obj.pub_key = PublicKey.toJSON(message.pub_key);
    }
    if (message.voting_power !== "0") {
      obj.voting_power = message.voting_power;
    }
    if (message.proposer_priority !== "0") {
      obj.proposer_priority = message.proposer_priority;
    }
    return obj;
  },

  create(base?: DeepPartial<Validator>): Validator {
    return Validator.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Validator>): Validator {
    const message = createBaseValidator();
    message.address = object.address ?? new Uint8Array(0);
    message.pub_key = (object.pub_key !== undefined && object.pub_key !== null)
      ? PublicKey.fromPartial(object.pub_key)
      : undefined;
    message.voting_power = object.voting_power ?? "0";
    message.proposer_priority = object.proposer_priority ?? "0";
    return message;
  },
};

function createBaseSimpleValidator(): SimpleValidator {
  return { pub_key: undefined, voting_power: "0" };
}

export const SimpleValidator = {
  encode(message: SimpleValidator, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pub_key !== undefined) {
      PublicKey.encode(message.pub_key, writer.uint32(10).fork()).ldelim();
    }
    if (message.voting_power !== "0") {
      writer.uint32(16).int64(message.voting_power);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SimpleValidator {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSimpleValidator();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.pub_key = PublicKey.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.voting_power = longToString(reader.int64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SimpleValidator {
    return {
      pub_key: isSet(object.pub_key) ? PublicKey.fromJSON(object.pub_key) : undefined,
      voting_power: isSet(object.voting_power) ? globalThis.String(object.voting_power) : "0",
    };
  },

  toJSON(message: SimpleValidator): unknown {
    const obj: any = {};
    if (message.pub_key !== undefined) {
      obj.pub_key = PublicKey.toJSON(message.pub_key);
    }
    if (message.voting_power !== "0") {
      obj.voting_power = message.voting_power;
    }
    return obj;
  },

  create(base?: DeepPartial<SimpleValidator>): SimpleValidator {
    return SimpleValidator.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<SimpleValidator>): SimpleValidator {
    const message = createBaseSimpleValidator();
    message.pub_key = (object.pub_key !== undefined && object.pub_key !== null)
      ? PublicKey.fromPartial(object.pub_key)
      : undefined;
    message.voting_power = object.voting_power ?? "0";
    return message;
  },
};

function bytesFromBase64(b64: string): Uint8Array {
  if ((globalThis as any).Buffer) {
    return Uint8Array.from(globalThis.Buffer.from(b64, "base64"));
  } else {
    const bin = globalThis.atob(b64);
    const arr = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; ++i) {
      arr[i] = bin.charCodeAt(i);
    }
    return arr;
  }
}

function base64FromBytes(arr: Uint8Array): string {
  if ((globalThis as any).Buffer) {
    return globalThis.Buffer.from(arr).toString("base64");
  } else {
    const bin: string[] = [];
    arr.forEach((byte) => {
      bin.push(globalThis.String.fromCharCode(byte));
    });
    return globalThis.btoa(bin.join(""));
  }
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

function longToString(long: Long) {
  return long.toString();
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
