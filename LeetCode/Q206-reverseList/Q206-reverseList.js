/*
 * @Description: 
 * @version: 
 * @Author: CoderXZ
 * @Date: 2020-05-10 20:08:51
 * @LastEditors: CoderXZ
 * @LastEditTime: 2020-05-10 20:13:00
 */


//循环解法
var reverseList = function(headNode) {
    let preNode = null;
    let curNode = headNode;
    let nextNode = null;

    while (curNode !== null) {
        nextNode = curNode.next;
        curNode.next = preNode;
        preNode = curNode;
        curNode = nextNode;
    }

    return preNode;
}