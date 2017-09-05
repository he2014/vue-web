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
  },
  download:(type)=>{
    switch(type){
      case 1://goole
      location.href ="https://app.appsflyer.com/com.fission.sevennujoom?pid=snaptube&c=10000101" ;
      break;
      case 2://ios
      location.href ="https://app.appsflyer.com/id917213988?pid=snaptube&c=10000101";
      break;
      case 3://install
      location.href="https://www.7nujoom.com/resource/package/7NUJOOM.apk" ;
      break; 
    }
  }
}
