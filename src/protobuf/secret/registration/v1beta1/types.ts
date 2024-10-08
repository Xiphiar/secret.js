// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v1.178.0
//   protoc               v3.21.3
// source: secret/registration/v1beta1/types.proto

/* eslint-disable */
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "secret.registration.v1beta1";

export interface SeedConfig {
  master_key: string;
  encrypted_key: string;
  version: number;
}

export interface LegacySeedConfig {
  master_cert: string;
  encrypted_key: string;
}

export interface RegistrationNodeInfo {
  certificate: Uint8Array;
  encrypted_seed: Uint8Array;
}

function createBaseSeedConfig(): SeedConfig {
  return { master_key: "", encrypted_key: "", version: 0 };
}

export const SeedConfig = {
  encode(message: SeedConfig, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.master_key !== "") {
      writer.uint32(10).string(message.master_key);
    }
    if (message.encrypted_key !== "") {
      writer.uint32(18).string(message.encrypted_key);
    }
    if (message.version !== 0) {
      writer.uint32(24).uint32(message.version);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SeedConfig {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSeedConfig();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.master_key = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.encrypted_key = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.version = reader.uint32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SeedConfig {
    return {
      master_key: isSet(object.master_key) ? globalThis.String(object.master_key) : "",
      encrypted_key: isSet(object.encrypted_key) ? globalThis.String(object.encrypted_key) : "",
      version: isSet(object.version) ? globalThis.Number(object.version) : 0,
    };
  },

  toJSON(message: SeedConfig): unknown {
    const obj: any = {};
    if (message.master_key !== "") {
      obj.master_key = message.master_key;
    }
    if (message.encrypted_key !== "") {
      obj.encrypted_key = message.encrypted_key;
    }
    if (message.version !== 0) {
      obj.version = Math.round(message.version);
    }
    return obj;
  },

  create(base?: DeepPartial<SeedConfig>): SeedConfig {
    return SeedConfig.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<SeedConfig>): SeedConfig {
    const message = createBaseSeedConfig();
    message.master_key = object.master_key ?? "";
    message.encrypted_key = object.encrypted_key ?? "";
    message.version = object.version ?? 0;
    return message;
  },
};

function createBaseLegacySeedConfig(): LegacySeedConfig {
  return { master_cert: "", encrypted_key: "" };
}

export const LegacySeedConfig = {
  encode(message: LegacySeedConfig, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.master_cert !== "") {
      writer.uint32(10).string(message.master_cert);
    }
    if (message.encrypted_key !== "") {
      writer.uint32(18).string(message.encrypted_key);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LegacySeedConfig {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLegacySeedConfig();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.master_cert = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.encrypted_key = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): LegacySeedConfig {
    return {
      master_cert: isSet(object.master_cert) ? globalThis.String(object.master_cert) : "",
      encrypted_key: isSet(object.encrypted_key) ? globalThis.String(object.encrypted_key) : "",
    };
  },

  toJSON(message: LegacySeedConfig): unknown {
    const obj: any = {};
    if (message.master_cert !== "") {
      obj.master_cert = message.master_cert;
    }
    if (message.encrypted_key !== "") {
      obj.encrypted_key = message.encrypted_key;
    }
    return obj;
  },

  create(base?: DeepPartial<LegacySeedConfig>): LegacySeedConfig {
    return LegacySeedConfig.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<LegacySeedConfig>): LegacySeedConfig {
    const message = createBaseLegacySeedConfig();
    message.master_cert = object.master_cert ?? "";
    message.encrypted_key = object.encrypted_key ?? "";
    return message;
  },
};

function createBaseRegistrationNodeInfo(): RegistrationNodeInfo {
  return { certificate: new Uint8Array(0), encrypted_seed: new Uint8Array(0) };
}

export const RegistrationNodeInfo = {
  encode(message: RegistrationNodeInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.certificate.length !== 0) {
      writer.uint32(10).bytes(message.certificate);
    }
    if (message.encrypted_seed.length !== 0) {
      writer.uint32(18).bytes(message.encrypted_seed);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RegistrationNodeInfo {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRegistrationNodeInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.certificate = reader.bytes();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.encrypted_seed = reader.bytes();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): RegistrationNodeInfo {
    return {
      certificate: isSet(object.certificate) ? bytesFromBase64(object.certificate) : new Uint8Array(0),
      encrypted_seed: isSet(object.encrypted_seed) ? bytesFromBase64(object.encrypted_seed) : new Uint8Array(0),
    };
  },

  toJSON(message: RegistrationNodeInfo): unknown {
    const obj: any = {};
    if (message.certificate.length !== 0) {
      obj.certificate = base64FromBytes(message.certificate);
    }
    if (message.encrypted_seed.length !== 0) {
      obj.encrypted_seed = base64FromBytes(message.encrypted_seed);
    }
    return obj;
  },

  create(base?: DeepPartial<RegistrationNodeInfo>): RegistrationNodeInfo {
    return RegistrationNodeInfo.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<RegistrationNodeInfo>): RegistrationNodeInfo {
    const message = createBaseRegistrationNodeInfo();
    message.certificate = object.certificate ?? new Uint8Array(0);
    message.encrypted_seed = object.encrypted_seed ?? new Uint8Array(0);
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

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
