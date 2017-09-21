import { DEVICE,ISSHOW,ONLINEFLAG,BADGE,CHATMASSAGE} from "@/store/mutation-types";
export default {
   DEVICE(state,device){
     state.device = device;
   },
   ISSHOW(state,isShow){
     state.isShow = isShow;
   },
   HEADERSHOW(state,value){
     state.headerShow =value;
   },
   ONLINEFLAG(state,val){
     state.nolineflags=val;
   },
   BADGE(state,val){
     state.badgeDataInit = val;
   },
   CHATMASSAGE(state,val){
     state.chatMessageInit = val;
   },


}
