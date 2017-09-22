import common from"./common"
export  const  base = {
    // baseUrl:"http://10.10.32.145:10001"
    //baseUrl:"http://www.7nujoom.com"
    baseUrl:"http://www.haahi.com"

};
export const pid = ()=>{
    let utm_source = common.getUrlParam("utm_source");
    let pid = common.getUrlParam("pid");
      return utm_source&&utm_source=="snaptube"?100000101:pid?pid:0;
};
export const socket ={
  chat:300006,//聊天
  gift:300008,//礼物
  microsOn:710005,//上麦
  microsOff:710006,//下麦
  offLive:300005//关播
}
