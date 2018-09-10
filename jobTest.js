//1
var a = new Date('2014-03-19')
var b = new Date(2014,03,02)
console.log(a,b)

console.log(new Date(2009,1,1))       //正确  
new Date("2009/1/1");    //正确  
console.log(new Date("2009-01-01"))    //错误  

console.log(a.getDate() == b.getDate())  //true
console.log(a.getMonth() == b.getMonth())  //false

console.log(a.getDate()) //19
console.log(b.getDate()) //19

console.log(a.getMonth()) //2
console.log(b.getMonth()) //3

var start = Date.now()
console.log(start)
var stop = Date.now()
console.log(stop)

//2
function f() {
  console.log('f')
}

var f1 = new f

console.log(f.prototype) //f {}
console.log(Object.getPrototypeOf(f)) //[Function]
console.log(Object.getPrototypeOf(f1)) //f {}
console.log(f.prototype == Object.getPrototypeOf(f)) //false

//3
console.log(['1','2','3','4'].map(parseInt)) //[ 1, NaN, NaN, NaN ]

//4  匿名函数立即执行时会形成一个块级作用域（私有作用域）
var A = {V:1}
var a = 2;
(function(A,a){
  A.V = 3
  console.log(A.V)  //3
  // a = A.V
  console.log(a)    //3
})(A,a)
console.log(a,A.V)  //2 3

//5
for (var i = 0; i < 5; i++) {
  ; (function (i) {
    setTimeout(function () {
      console.log(i)
    }, i * 1000)
  })(i)
}

//6
var a = 0
console.log(a - 0.1 == 0.2) //false
console.log(!!~(a-a)) //true
console.log(~a) //?

//7
console.log(+ '1e' == parseInt('1e')) //false

//8
var object = {b:{c:3},d:[{e:10},{e:6}]}
console.log(object.d.e == 4) //false
console.log(object.d.e)


//9 sort
console.log([1,2,5,7,3,4,9,8].sort((a,b)=>a-b))  //升序
console.log([1,2,5,7,3,4,9,8].sort((a,b)=>b-a))  //降叙

//10 function声明两种办法
sum(1,2);
function sum(a,b){
  console.log(a+b)   //3
}

sum(1,2);
var sum =function(a,b){
  console.log(a+b)   //sum is not a function
}

//11
(function(a,b){console.log(a+b)})(1,2); //3
(function(a,b){console.log(a+b)}(1,2)); //3
+function(a,b){console.log(a+b)}(1,2); //3
-function(a,b){console.log(a+b)}(1,2); //3
~function(a,b){console.log(a+b)}(1,2); //3
!function(a,b){console.log(a+b)}(1,2); //3

//12 闭包与匿名函数（立即执行的）
function createFunction(){
  var result = new Array();
  for( var i = 0; i <10; i++){
      result[i] = function(){
          return i;
      };
  }
  return result;
}
var aa = createFunction();
console.log(aa[0]())  //10
console.log(aa[1]())  //10
console.log(aa[2]())  //10

function createFunction1() {
  var result = new Array();
  for (var i = 0; i < 10; i++){
    result[i] = function(num){
      return function() {
        return num;
      }
    }(i);
  }
  return result;
}
var bb = createFunction1();
console.log(bb[0]())  //0
console.log(bb[1]())  //1
console.log(bb[2]())  //2

//13 
var arr = [1,-2,3,10,-4,7,2,-5]
var maxArr = Math.max.apply(null,arr)
var minArr = Math.min.apply(null,arr)
console.log(maxArr,minArr) //10 -5


//14 求数组最大连续子数组之和

//穷举法 实际复杂度是N²/2
function maxContiguousSum(arr) {
  var max = 0;
  var len = arr.length
  for (var i = 0; i < len; i++) {
    var temp = 0;
    for (var j = i; j < len; j++) {
      temp += arr[j];
      if (temp > max) {
        max = temp;
      }
    }
  }
  console.log(max);
}
maxContiguousSum([1,-2,3,10,-4,7,2,-5])

//动态规划法
function largestSum(arr) {
  //最大子数组和
  var max = 0;
  //当前子数组和
  var cur = 0;
  for (var i = 0; i < arr.length; i++) {
    //当前子数组和为负数会影响下一项，所以重置0
    if (cur < 0) {
      cur = 0;
    }
    cur += arr[i];
    if (cur > max) {
      max = cur;
    }
  }
  console.log(max);
}

largestSum([1,-2,3,10,-4,7,2,-5])

//求最大连续子数组的和并把这个子数组求出来
function maxContiguous(arr) {
  var max = 0;
  var low = 0;
  var height = 0;
  var len = arr.length
  for (var i = 0; i < len; i++) {
    var temp = 0;
    for (var j = i; j < len; j++) {
      temp += arr[j];
      if (temp > max) {
        max = temp;
        low = i;
        height = j
      }
    }
  }
  console.log(max);
  console.log(arr.slice(low,height+1))
}
maxContiguous([1,-2,3,10,-4,7,2,-5])

//15 splice()   slice()
var arr = [1,-2,3,10,-4,7,2,-5]
var result = arr.splice(2,3,0,0,0)
console.log(arr)  //[ 1, -2, 0, 0, 0, 7, 2, -5 ]
console.log(result) //[ 3, 10, -4 ]

var arr = [1,-2,3,10,-4,7,2,-5]
var result = arr.slice(2,5)
console.log(arr)  [ 1, -2, 3, 10, -4, 7, 2, -5 ]
console.log(result) [ 3, 10, -4 ]