/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    let prev = null;
    let curr = head;
    if (!curr) {
        return head;
    }
    return ricorsive(prev, curr);
};

const ricorsive = function(prev, curr) {
    if (curr) {
        const next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
        return (ricorsive(prev, curr))
    }
    return prev;
}

/* ITERATIVE VERSION

var reverseList = function(head) {
    let prev = null;
    let curr = head;
    if (!curr) {
        return head;
    }
    while (curr) {
        const next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }
    return prev;
}; */