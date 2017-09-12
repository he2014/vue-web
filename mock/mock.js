const Mock = require('mockjs');
// 获取 mock.Random 对象
const Random = Mock.Random;
// mock一组数据
const produceNewsData = function() {
  let dataInfo = [];
  for (let i = 0; i < 4; i++) {
    let newArticleObject = {
      title: "Live",
      isOnline:Random.boolean(1,7, false),
      roomID: Random.natural(10000,99999),
      pic: Random.dataImage('374x375', 'live'),
      name: Random.word(10,20),
      num: Random.natural(1000,5999),
      isHot:Random.boolean(5,5, false)
    };
    dataInfo.push(newArticleObject);
  };
  return {
    code:0,
    dataInfo: dataInfo
  };
};
const videoData = function(){
    let data =[];
    for(let i=0; i<6 ; i++){
      let newArticleObject = {
        title: "video",
        isOnline:Random.boolean(1,7, false),
        vid: Random.natural(1,99),
        pic: Random.dataImage('252x300', 'video'),
        name: Random.word(10,20),
        num: Random.natural(1000,5999)
      };
      data.push(newArticleObject);
    };

    return {
      code:0,
      dataInfo:data
    };
};
const chatData = function(){
    let data =[];
    for(let i=0; i<3 ; i++){
      let newArticleObject = {
        title: "chat",
        isOnline:Random.boolean(1,7, false),
        roomID: Random.natural(10000,99999),
        pic: Random.dataImage('252x300', 'chat'),
        name: Random.word(10,20),
        num: Random.natural(1000,5999)
      };
      data.push(newArticleObject);
    };

    return {
      code:0,
      dataInfo:data
    };
};
const liveRoom = ()=>{
let data = {
       code:0,
       dataInfo:{
        isOnline:Random.boolean(1,7, false),
          name: Random.word(10,20),
          num: Random.natural(1000,5999),
          pic: Random.dataImage('750x920', ''),
          pics: Random.dataImage('68x68', 'Hot'),
          videoID: Random.natural(10,99)
       }
  };
  return data;
}
// Mock.mock( url, post/get , 返回的数据)；
Mock.mock('/news/index', 'get', produceNewsData);
Mock.mock('/video/index', 'get', videoData);
Mock.mock('/chat/index', 'get', chatData);
Mock.mock("/live/room",'get',liveRoom);
