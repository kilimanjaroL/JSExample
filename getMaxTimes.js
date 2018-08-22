/**
 * 判断一个字符串中出现次数最多的字符，统计这个次数
 */

var str = 'sdfssaaasasasasaa';
var json = {};
for (var i = 0; i < str.length; i++) {

  //判断字母是否已经在json里面，是就数量++，不是就让其为1
  //json['a']=1  意思是在obj对象中添加一个a的属性，且其value=1
  if (!json[str.charAt(i)]) {
    json[str.charAt(i)] = 1;
  } else {
    json[str.charAt(i)]++;
  }
};
var iMax = 0;
var iIndex = '';
console.log(json)
for (var i in json) {
  //遍历取出最大值  json[i] 是取出属性i 的value的意思
  if (json[i] > iMax) {
    iMax = json[i];
    iIndex = i;
  }
}
console.log('出现次数最多的是:' + iIndex + '出现' + iMax + '次');