/**
 * 判断一个整数是否是回文数。回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数。
 * 进阶:你能不将整数转为字符串来解决这个问题吗？
 */


//转换为字符串的方法
var isPalindrome = function(x) {
   n = x + ''
   var m = ''
   for (i = n.length - 1; i >= 0; i--){
    m = m + n.substr(i,1)
   }
   if(n === m){
    return true
  }else{
    return false
  }
};

isPalindrome(-121)