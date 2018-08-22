/**
 * 获取浏览器URL中查询字符串中的参数
 */

 //例如URL：http://www.runoob.com/jquery/misc-trim.html?channelid=12333&name=xiaoming&age=23

 function getURLParmas(url){
  var args = url.split('?');
  //split()方法用于把一个字符串分割成字符串数组
  if(args[0] == url){
      return "";
  }
  //URL中有参数时：
  var arr = args[1].split('&');
  var obj = {};
  for(var i = 0;i < arr.length; i++){
      var arg = arr[i].split('=');
      console.log(arg)
      obj[arg[0]] = arg[1];
  }
  console.log(obj)
  return obj;
}

getURLParmas('http://www.runoob.com/jquery/misc-trim.html?channelid=12333&name=xiaoming&age=23')

