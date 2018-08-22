/**
 * 加一
 * 给定一个由整数组成的非空数组所表示的非负整数，在该数的基础上加一
 * @param {*} digits 
 */
var plusOne = function(digits) {
    var len = digits.length
    var c = 0
    var sum = digits[len-1] + 1
    if(sum >= 10){
      c = 1
      digits[len-1] = sum % 10
      if(len == 1){
        digits.unshift(1)
      }
      for( var i = len-2; i >= 0; i--){
        sumNext = c + digits[i]
        // console.log(sum)
        if(sumNext >= 10){
          c = 1 
          digits[i] = sumNext % 10
          if(i == 0){
            digits.unshift(1)
          }
        }else{
          c = 0
          digits[i] = sumNext
        }  
      }

    }else{
      digits[len-1] = sum
    }
    
    console.log(digits)
    return digits
};

plusOne([0])

//输入: [1,2,3]
//输出: [1,2,4]
//解释: 输入数组表示数字 123