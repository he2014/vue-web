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
  //获取search
  getUrlParam:()=>{
    let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    let r = window.location.search.substr(1).match(reg);
    if (r != null) {
      return Math.floor(unescape(r[2]));
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
  },
  //生成 n个不重复随机数且以数组返回
  myRandom :(n,min,max)=>{
      let arr=[];
        let arr2=[];
        let i =0;
        for(i=0;i<max-min+1;i++){
          arr[i]=i+min;
          }
          for(let j,x,i=arr.length;i;j=parseInt(Math.random()*i),x=arr[--i],arr[i]=arr[j],arr[j]=x);
          for(i=0;i<n;i++){
            arr2[i]=arr[i];
          }
          return arr2;
    },
    replace_html:function(str) {//替换下列符号
		if (!str) {
			return null;
		}
		return $.trim(str).replace(new RegExp("&", "g"), "&amp;").replace(new RegExp("<", "g"), "&lt;").replace(new RegExp(">", "g"), "&gt;")
	}

}
