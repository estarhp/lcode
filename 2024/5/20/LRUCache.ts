import {BothWayNode} from "../global";

/**
 * @param {number} capacity
 */

interface LRUCache {
    capacity: number,
    head: BothWayNode,
    map: Map<number, BothWayNode>,
    length: number,
    get(key: number): number,
    put(key: number, value: number): void
}

const LRUCache = function (this: LRUCache, capacity: number) {
    this.capacity = capacity
    this.head = {
        val: 0,
        key: 0,
        next: null,
        pre: null
    }
    this.head.pre = this.head
    this.head.next = this.head
    this.length = 0
    this.map = new Map()
};




/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key: number): number {
    if (this.map.has(key)) {
        const node = this.map.get(key)
        const preNode = node.pre
        const nextNode = node.next
        preNode.next = nextNode
        nextNode.pre = preNode
        this.put(key,node.val)
        return this.map.get(key).val
    }
    return -1
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key: number, value: number): void {
    if (this.map.has(key)) {
        this.length --
    }
    if (this.length === this.capacity) {
        this.map.delete(this.head.pre.key)
        this.head.pre.pre.next = this.head
        this.head.pre = this.head.pre.pre
        this.length --
    }
    let node: BothWayNode = {
        val: value,
        pre: this.head.pre,
        next: this.head,
        key:key
    }
    if(this.map.has(key)) {
        node = this.map.get(key)
        node.val = value
        const preNode = node.pre
        const nextNode = node.next
        preNode.next = nextNode
        nextNode.pre = preNode
    }
    const headNext = this.head.next
    this.head.next = node
    node.next = headNext
    node.pre = this.head
    headNext.pre = node
    this.map.set(key, node)
    this.length++
};




/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

const  cache = new (LRUCache as any)(2)
cache.put(1, 0);
cache.put(2, 2);
console.log(cache.get(1)); // 输出 1
cache.put(2, 1);
console.log(cache.get(2)); // 输出 -1
cache.put(4, 4);
console.log(cache.get(2)); // 输出 -1，因为 1 已经被移除
console.log(cache.get(3)); // 输出 3
console.log(cache.get(4)); // 输出 4