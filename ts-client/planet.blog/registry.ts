import { GeneratedType } from "@cosmjs/proto-signing";
import { MsgSendIbcPost } from "./types/planet/blog/tx";
import { MsgSendIbcUpdatePost } from "./types/planet/blog/tx";

const msgTypes: Array<[string, GeneratedType]>  = [
    ["/planet.blog.MsgSendIbcPost", MsgSendIbcPost],
    ["/planet.blog.MsgSendIbcUpdatePost", MsgSendIbcUpdatePost],
    
];

export { msgTypes }