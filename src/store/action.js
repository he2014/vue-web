import { DEVICE,ISSHOW,ONLINEFLAG} from "@/store/mutation-types"
export const setDevice =({commit,state},val)=>{
  commit("DEVICE",val);
};
export const setShow = ({commit,state},type)=>{
   commit('ISSHOW',type);
};
export const setHeader = ({commit,state},value)=>{
  commit("HEADERSHOW",value)
}
export const setonlineflag =({commit,state},val)=>{
  commit('ONLINEFLAG',val);
}
