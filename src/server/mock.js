const Mock = require('mockjs');
// 获取 mock.Random 对象
const Random = Mock.Random;
// mock一组数据
const produceNewsData = function() {
  let dataInfo = [];
  for (let i = 0; i < 10; i++) {
    let newArticleObject = {
      title: "Live",
      isOnline:Random.boolean(1,7, false),
      roomID: Random.natural(10000,99999),
      pic: Random.dataImage('300x250', 'mock'),
      name: Random.word(10,20),
      num: Random.natural(1000,5999)
    }
    dataInfo.push(newArticleObject)
  }
  return {
    code:0,
    dataInfo: dataInfo
  }
}
// Mock.mock( url, post/get , 返回的数据)；
Mock.mock('/news/index', 'get', produceNewsData);
