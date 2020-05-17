/*
 * @Description: LeetCode 第8题 字符串转换整数 (atoi)
 * @version: 
 * @Author: CoderXZ
 * @Date: 2020-05-04 18:49:56
 * @LastEditors: CoderXZ
 * @LastEditTime: 2020-05-04 21:28:46
 */


// 请你来实现一个 atoi 函数，使其能将字符串转换成整数。

// 首先，该函数会根据需要丢弃无用的开头空格字符，直到寻找到第一个非空格的字符为止。接下来的转化规则如下：

// 如果第一个非空字符为正或者负号时，则将该符号与之后面尽可能多的连续数字字符组合起来，形成一个有符号整数。
// 假如第一个非空字符是数字，则直接将其与之后连续的数字字符组合起来，形成一个整数。
// 该字符串在有效的整数部分之后也可能会存在多余的字符，那么这些字符可以被忽略，它们对函数不应该造成影响。
// 注意：假如该字符串中的第一个非空格字符不是一个有效整数字符、字符串为空或字符串仅包含空白字符时，则你的函数不需要进行转换，即无法进行有效转换。

// 在任何情况下，若函数不能进行有效的转换时，请返回 0 。

// 提示：

// 本题中的空白字符只包括空格字符 ' ' 。
// 假设我们的环境只能存储 32 位大小的有符号整数，那么其数值范围为 [−231,  231 − 1]。如果数值超过这个范围，请返回  INT_MAX (231 − 1) 或 INT_MIN (−231) 。

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/string-to-integer-atoi
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

var myAtoi = function(str) {
    if (typeof(str) !== "string") {
        return 0;
    }

    var bFuShu = false; //负数标志
    var bZhengShu = false; //正数标志
    if ('-' === str[0]) {
        bFuShu = true;
    }

    if ('+' === str[0]) {
        bZhengShu = true;
    }

    var flagIndex = 0;
    for (var m = 0; m < str.length; m++) {
        if (str[m] === ' ') {
            continue;
        } else if (str[m] === '-') {
            flagIndex = m;
            bFuShu = true;
            break;
        } else if (str[m] === '+') {
            flagIndex = m;
            bZhengShu = true;
            break;
        } else {
            flagIndex = m;
            break;
        }
    }

    var strTempArr = [];

    //起始index  如果是带有正负号输入，那么检测数值部分   起始index要在符号位后一个  其他情况则不用偏移后一位
    var startIndex = bFuShu | bZhengShu ? flagIndex + 1 : flagIndex;

    //这里不带符号位  strTempArr中不存储符号
    for (var i = startIndex; i < str.length; i++) {
        if (str[i] >= '0' && str[i] <= '9') {
            strTempArr.push(str[i]);
        } else {
            break;
        }
    }

    var num = 0;
    if (strTempArr.length <= 0) {
        return 0;
    }

    for (var j = strTempArr.length - 1, index = 0; index < strTempArr.length && j >= 0; j--, index++) {
        num += Number(strTempArr[index]) * Math.pow(10, j);
        //正数  大于最大数
        if (num > Math.pow(2, 31) - 1 && !bFuShu) {
            return Math.pow(2, 31) - 1;
        }

        //负数  小于最小数
        if (-num < -Math.pow(2, 31) && bFuShu) {
            return -Math.pow(2, 31);
        }
    }

    //如果是负数，则返回的时候带-号
    if (bFuShu) {
        return -num;
    }

    return num;
};


console.log(myAtoi("1234556"));
console.log(myAtoi("-221234556"));
console.log(myAtoi("1234rte"));
console.log(myAtoi(" -331234rte"));
console.log(myAtoi("+331234rte"));

console.log(myAtoi("+1"));
console.log(myAtoi("++1"));
console.log(myAtoi("-91283472332"));
console.log(myAtoi("   +0 123"));