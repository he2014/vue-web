export default{
  device:()=>{
    let version = null;
    let u = navigator.userAgent.toLowerCase();
    if (u.indexOf('Android'.toLowerCase()) > -1 || u.indexOf('Linux'.toLowerCase()) > -1) {//安卓手机
        version ="android";
			} else if (u.indexOf('iPhone'.toLowerCase()) > -1||u.indexOf('Windows Phone'.toLowerCase()) > -1) {//苹果手机
        version ="iPhone";
      }else{
        version ="web";
			}
      return version;
  },
  getUrlParam:()=>{
    let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    let r = window.location.search.substr(1).match(reg);
    if (r != null) {
      return unescape(r[2]);
    }
    return null;
  }
}
