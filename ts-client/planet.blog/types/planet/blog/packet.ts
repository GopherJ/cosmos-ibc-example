/* eslint-disable */
import _m0 from "protobufjs/minimal";

export const protobufPackage = "planet.blog";

export interface BlogPacketData {
  noData:
    | NoData
    | undefined;
  /** this line is used by starport scaffolding # ibc/packet/proto/field */
  ibcUpdatePostPacket:
    | IbcUpdatePostPacketData
    | undefined;
  /** this line is used by starport scaffolding # ibc/packet/proto/field/number */
  ibcPostPacket: IbcPostPacketData | undefined;
}

export interface NoData {
}

/** IbcPostPacketData defines a struct for the packet payload */
export interface IbcPostPacketData {
  title: string;
  content: string;
  creator: string;
}

/** IbcPostPacketAck defines a struct for the packet acknowledgment */
export interface IbcPostPacketAck {
  postID: string;
}

/** IbcUpdatePostPacketData defines a struct for the packet payload */
export interface IbcUpdatePostPacketData {
  postID: string;
  title: string;
  content: string;
}

/** IbcUpdatePostPacketAck defines a struct for the packet acknowledgment */
export interface IbcUpdatePostPacketAck {
  updated: string;
}

function createBaseBlogPacketData(): BlogPacketData {
  return { noData: undefined, ibcUpdatePostPacket: undefined, ibcPostPacket: undefined };
}

export const BlogPacketData = {
  encode(message: BlogPacketData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.noData !== undefined) {
      NoData.encode(message.noData, writer.uint32(10).fork()).ldelim();
    }
    if (message.ibcUpdatePostPacket !== undefined) {
      IbcUpdatePostPacketData.encode(message.ibcUpdatePostPacket, writer.uint32(26).fork()).ldelim();
    }
    if (message.ibcPostPacket !== undefined) {
      IbcPostPacketData.encode(message.ibcPostPacket, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BlogPacketData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBlogPacketData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.noData = NoData.decode(reader, reader.uint32());
          break;
        case 3:
          message.ibcUpdatePostPacket = IbcUpdatePostPacketData.decode(reader, reader.uint32());
          break;
        case 2:
          message.ibcPostPacket = IbcPostPacketData.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): BlogPacketData {
    return {
      noData: isSet(object.noData) ? NoData.fromJSON(object.noData) : undefined,
      ibcUpdatePostPacket: isSet(object.ibcUpdatePostPacket)
        ? IbcUpdatePostPacketData.fromJSON(object.ibcUpdatePostPacket)
        : undefined,
      ibcPostPacket: isSet(object.ibcPostPacket) ? IbcPostPacketData.fromJSON(object.ibcPostPacket) : undefined,
    };
  },

  toJSON(message: BlogPacketData): unknown {
    const obj: any = {};
    message.noData !== undefined && (obj.noData = message.noData ? NoData.toJSON(message.noData) : undefined);
    message.ibcUpdatePostPacket !== undefined && (obj.ibcUpdatePostPacket = message.ibcUpdatePostPacket
      ? IbcUpdatePostPacketData.toJSON(message.ibcUpdatePostPacket)
      : undefined);
    message.ibcPostPacket !== undefined
      && (obj.ibcPostPacket = message.ibcPostPacket ? IbcPostPacketData.toJSON(message.ibcPostPacket) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<BlogPacketData>, I>>(object: I): BlogPacketData {
    const message = createBaseBlogPacketData();
    message.noData = (object.noData !== undefined && object.noData !== null)
      ? NoData.fromPartial(object.noData)
      : undefined;
    message.ibcUpdatePostPacket = (object.ibcUpdatePostPacket !== undefined && object.ibcUpdatePostPacket !== null)
      ? IbcUpdatePostPacketData.fromPartial(object.ibcUpdatePostPacket)
      : undefined;
    message.ibcPostPacket = (object.ibcPostPacket !== undefined && object.ibcPostPacket !== null)
      ? IbcPostPacketData.fromPartial(object.ibcPostPacket)
      : undefined;
    return message;
  },
};

function createBaseNoData(): NoData {
  return {};
}

export const NoData = {
  encode(_: NoData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): NoData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNoData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): NoData {
    return {};
  },

  toJSON(_: NoData): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<NoData>, I>>(_: I): NoData {
    const message = createBaseNoData();
    return message;
  },
};

function createBaseIbcPostPacketData(): IbcPostPacketData {
  return { title: "", content: "", creator: "" };
}

export const IbcPostPacketData = {
  encode(message: IbcPostPacketData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.content !== "") {
      writer.uint32(18).string(message.content);
    }
    if (message.creator !== "") {
      writer.uint32(26).string(message.creator);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): IbcPostPacketData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseIbcPostPacketData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;
        case 2:
          message.content = reader.string();
          break;
        case 3:
          message.creator = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): IbcPostPacketData {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      content: isSet(object.content) ? String(object.content) : "",
      creator: isSet(object.creator) ? String(object.creator) : "",
    };
  },

  toJSON(message: IbcPostPacketData): unknown {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.content !== undefined && (obj.content = message.content);
    message.creator !== undefined && (obj.creator = message.creator);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<IbcPostPacketData>, I>>(object: I): IbcPostPacketData {
    const message = createBaseIbcPostPacketData();
    message.title = object.title ?? "";
    message.content = object.content ?? "";
    message.creator = object.creator ?? "";
    return message;
  },
};

function createBaseIbcPostPacketAck(): IbcPostPacketAck {
  return { postID: "" };
}

export const IbcPostPacketAck = {
  encode(message: IbcPostPacketAck, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.postID !== "") {
      writer.uint32(10).string(message.postID);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): IbcPostPacketAck {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseIbcPostPacketAck();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.postID = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): IbcPostPacketAck {
    return { postID: isSet(object.postID) ? String(object.postID) : "" };
  },

  toJSON(message: IbcPostPacketAck): unknown {
    const obj: any = {};
    message.postID !== undefined && (obj.postID = message.postID);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<IbcPostPacketAck>, I>>(object: I): IbcPostPacketAck {
    const message = createBaseIbcPostPacketAck();
    message.postID = object.postID ?? "";
    return message;
  },
};

function createBaseIbcUpdatePostPacketData(): IbcUpdatePostPacketData {
  return { postID: "", title: "", content: "" };
}

export const IbcUpdatePostPacketData = {
  encode(message: IbcUpdatePostPacketData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.postID !== "") {
      writer.uint32(10).string(message.postID);
    }
    if (message.title !== "") {
      writer.uint32(18).string(message.title);
    }
    if (message.content !== "") {
      writer.uint32(26).string(message.content);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): IbcUpdatePostPacketData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseIbcUpdatePostPacketData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.postID = reader.string();
          break;
        case 2:
          message.title = reader.string();
          break;
        case 3:
          message.content = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): IbcUpdatePostPacketData {
    return {
      postID: isSet(object.postID) ? String(object.postID) : "",
      title: isSet(object.title) ? String(object.title) : "",
      content: isSet(object.content) ? String(object.content) : "",
    };
  },

  toJSON(message: IbcUpdatePostPacketData): unknown {
    const obj: any = {};
    message.postID !== undefined && (obj.postID = message.postID);
    message.title !== undefined && (obj.title = message.title);
    message.content !== undefined && (obj.content = message.content);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<IbcUpdatePostPacketData>, I>>(object: I): IbcUpdatePostPacketData {
    const message = createBaseIbcUpdatePostPacketData();
    message.postID = object.postID ?? "";
    message.title = object.title ?? "";
    message.content = object.content ?? "";
    return message;
  },
};

function createBaseIbcUpdatePostPacketAck(): IbcUpdatePostPacketAck {
  return { updated: "" };
}

export const IbcUpdatePostPacketAck = {
  encode(message: IbcUpdatePostPacketAck, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.updated !== "") {
      writer.uint32(10).string(message.updated);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): IbcUpdatePostPacketAck {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseIbcUpdatePostPacketAck();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.updated = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): IbcUpdatePostPacketAck {
    return { updated: isSet(object.updated) ? String(object.updated) : "" };
  },

  toJSON(message: IbcUpdatePostPacketAck): unknown {
    const obj: any = {};
    message.updated !== undefined && (obj.updated = message.updated);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<IbcUpdatePostPacketAck>, I>>(object: I): IbcUpdatePostPacketAck {
    const message = createBaseIbcUpdatePostPacketAck();
    message.updated = object.updated ?? "";
    return message;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
