/**
 * 数组去重
 */

//方法一
//利用对象属性不能重名的方式
var arr = [0,2,3,4,4,0,2];
var obj = {};
var tmp = [];
for(var i = 0 ;i< arr.length;i++){
   if( !obj[arr[i]] ){
      obj[arr[i]] = 1;
      tmp.push(arr[i]);
   }
}
console.log(tmp);


//方法二
//新建一个数组，如果遇到相同元素就不转移
var arr = [2, 3, 4, 4, 5, 2, 3, 6]
var arr2 = []
for (var i = 0; i < arr.length; i++) {
  //如果在arr2中没有arr[i]这个元素
  if (arr2.indexOf(arr[i]) == -1) {
    arr2.push(arr[i])
  }
}
console.log(arr2)

//方法三
//filter:一个常用的操作，它用于把Array的某些元素过滤掉，然后返回剩下的元素。
//和map()类似，Array的filter()也接收一个函数。和map()不同的是，
//filter()把传入的函数依次作用于每个元素，然后根据返回值是true还是false决定保留还是丢弃该元素
//filter()接收的回调函数，其实可以有多个参数:element:Array的某个元素;index:元素的位置;self:数组本身
var arr = [2,3,4,4,5,7,8,3]
var arr2 = arr.filter(function(element,index,self){
  return self.indexOf(element) === index
})
console.log(arr2)