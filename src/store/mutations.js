import { DEVICE,ISSHOW} from "@/store/mutation-types";
export default {
   DEVICE(state,device){
     state.device = device;
   },
   ISSHOW(state,isShow){
     state.isShow = isShow;
   }
}
