/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 * 
 *给定一个数组 nums 和一个值 val，你需要原地移除所有数值等于 val 的元素，返回移除后数组的新长度
 */
var removeElement = function(nums, val) {
   var len = nums.length
   for(i = 0; i < len; i++) {
     if(nums[i] == val){
       nums.splice(i,1)
       i = i -1  //下面的尝试这么干都失败了，所以别再用这种办法了
     }
   }
   console.log(nums)
   console.log(nums.length)
};

removeElement([0,1,2,2,3,0,4,2],2)


/**
 * @param {number[]} nums
 * @return {number}
 * 删除排序数组中的重复项
 */
var removeDuplicates = function(nums) {
  var len = nums.length
  if(len == 0){
    return 0
  }
  var i = 0
  for (j = 1; j < len; j++){
    if(nums[j] != nums[i]){
      i++
      nums[i] = nums[j]
    }
  }
  return i+1
};
removeDuplicates([0,0,1,1,1,2,2,2,3,3,3])

//坑，他只要返回长度，根本不需要删除 —— 这个想法是错的
//事实上：根据你的函数返回的长度, 它会打印出数组中该长度范围内的所有元素，
//所以需要把留下的元素移到返回的长度范围内，相当于实现删除元素返回

//这个方法才是只满足返回长度的
var removeDuplicates = function(nums) {
  var len = nums.length
  if(len == 0){
    return 0
  }
  var i = 0
  var tag = 0
  for (j = 1; j < len; j++){
    if(nums[j] != nums[i]){
      tag++
      i = j
    }
  }
  console.log(nums)
  console.log(tag+1)
  return tag+1
}

removeDuplicates([0,0,1,1,1,2,2,2,3,3,3])

/**
 * @param {number[]} nums
 * @return {number}
 * 在原地删除重复出现的元素，使得每个元素最多出现两次，返回移除后数组的新长度
 */
var removeDuplicates2 = function (nums) {
  var len = nums.length
  if (len == 0) {
    return 0
  }
  var tag = 0;
  var j = 0;
  for (var i = 1; i < len; i++) {
    if (nums[j] == nums[i]) {
      tag++;
      if (tag < 2) {
        j += 1
        nums[j] = nums[i];
      }
    } else {
      j += 1
      nums[j] = nums[i];
      tag = 0;
    }
  }
  console.log(nums,j+1)
  return j + 1;
}

removeDuplicates2([1,1,2,2,2,2,2,2,3,3,4,5,5,5])