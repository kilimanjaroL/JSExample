/**
 * 罗马数字转整数
 * @param {*} s :罗马数字
 */

var romanToInt = function(s) {
  var len = s.length
  var num = 0
  for(i = len -1 ; i >= 0; i--){
    // console.log(s.substr(i-1, 1))
    // console.log(s.substr(i+1, 1))
    // console.log(s.substr(i-2, 1))
    // console.log(s.substr(i+2, 1))
    //坑点：substr取值的时候，i+1如果为空，会显示''，但是i为最后一位时,i-1会循环取第一位的。。。
    //I
    if(s.substr(i,1) == 'I'){
      num += 1
    }
    //V
    if(s.substr(i,1) == 'V'){
      if(i != 0 && s.substr(i-1, 1) === 'I'){
        num += 3
      }else{
        num += 5
      }
    }
    //X
    if(s.substr(i,1) == 'X'){
      if(i != 0 && s.substr(i - 1, 1) == 'I'){
        num += 8
      }else{
        num += 10
      }
    }
    //L
    if(s.substr(i,1) == 'L'){
      if(i != 0 && s.substr(i - 1, 1) == 'X'){
        num += 30
      }else{
        num += 50
      }
    }
    //C
    if(s.substr(i,1) == 'C'){
      if(i != 0 && s.substr(i - 1, 1) == 'X'){
        num += 80
      }else{
        num += 100
      }
    }
    //D
    if(s.substr(i,1) == 'D'){
      if(i != 0 && s.substr(i - 1, 1) == 'C'){
        num += 300
      }else{
        num += 500
      }
    }
    //D
    if(s.substr(i,1) == 'M'){
      if(i != 0 && s.substr(i - 1, 1) == 'C'){
        num += 800
      }else{
        num += 1000
      }
    } 
  }
  console.log(num)
};

romanToInt('VIII')


