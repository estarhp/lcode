"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const LRUCache = function (capacity) {
    this.capacity = capacity;
    this.head = {
        val: 0,
        key: 0,
        next: null,
        pre: null
    };
    this.head.pre = this.head;
    this.head.next = this.head;
    this.length = 0;
    this.map = new Map();
};
LRUCache.prototype.get = function (key) {
    if (this.map.has(key)) {
        const node = this.map.get(key);
        const preNode = node.pre;
        const nextNode = node.next;
        preNode.next = nextNode;
        nextNode.pre = preNode;
        this.put(key, node.val);
        return this.map.get(key).val;
    }
    return -1;
};
LRUCache.prototype.put = function (key, value) {
    if (this.map.has(key)) {
        this.length--;
    }
    if (this.length === this.capacity) {
        this.map.delete(this.head.pre.key);
        this.head.pre.pre.next = this.head;
        this.head.pre = this.head.pre.pre;
        this.length--;
    }
    let node = {
        val: value,
        pre: this.head.pre,
        next: this.head,
        key: key
    };
    if (this.map.has(key)) {
        node = this.map.get(key);
        node.val = value;
        const preNode = node.pre;
        const nextNode = node.next;
        preNode.next = nextNode;
        nextNode.pre = preNode;
    }
    const headNext = this.head.next;
    this.head.next = node;
    node.next = headNext;
    node.pre = this.head;
    headNext.pre = node;
    this.map.set(key, node);
    this.length++;
};
//# sourceMappingURL=LRUCache.js.map