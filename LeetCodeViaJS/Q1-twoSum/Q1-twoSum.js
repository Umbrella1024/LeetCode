/*
 * @Description: LeetCode 第1题 两数之和
 * @version: 
 * @Author: CoderXZ
 * @Date: 2020-05-05 15:22:03
 * @LastEditors: CoderXZ
 * @LastEditTime: 2020-05-05 22:25:06
 */

var twoSum = function(nums, target) {

    //如果不是数组 则返回[];
    if (!(nums instanceof(Array))) {
        return [];
    }


    for (var i = 0; i < nums.length; i++) {
        var numTemp1 = nums[i];
        for (var j = 0; j < nums.length; j++) {
            if (j === i) {
                continue;
            }
            var numTemp2 = nums[j];
            if (numTemp1 + numTemp2 === target) {
                return [i, j];
            }
        }
    }

    return [];
};

// var myNums = {};

// console.log(typeof(myNums));
// console.log(myNums.length);

// console.log(myNums instanceof(Array));

// var myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

// console.log(twoSum(myNums, 10));

var testNum = [2, 7, 11, 15];

console.log(twoSum(testNum, 9));