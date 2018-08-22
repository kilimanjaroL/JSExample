/**
 * 给定一个 32 位有符号整数，将整数中的数字进行反转。
 * 设只能存储 32 位有符号整数，数值范围是 [−231,  231 − 1]。如果反转后的整数溢出，则返回 0。
 */

var reverse = function (x) {
  var n = x + ''
  var first = n.substr(0, 1)  //获取从下标 0 开始的长度为 1 的字符串
  var m = ''
  if (first == '-') {
    for (i = n.length; i > 0; i--)
      m = m + n.substr(i, 1)
      n = '-' + m
  } else {
    for (i = n.length; i >= 0; i--)
      m = m + n.substr(i, 1)
      n = m
  }
  n = parseInt(n)  //字符串转换为整数
  console.log(n)

  var min = -(Math.pow(2, 31))  //计算幂函数
  var max = Math.pow(2, 31) - 1

  if (n < max && n > min) {
    console.log(n)
    return n
  } else {
    console.log(0)
    return 0
  }
};

reverse(1534236469);
