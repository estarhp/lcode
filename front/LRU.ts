interface node {
    key: number
    value: number
    next: node | null
    pre: node | null
}

const getNode = (key: number, value: number ): node => ({
    key,
    value,
    next: null,
    pre: null,
})

class LRUCache {
    capacity: number
    first: node | null
    last: node | null
    map: Map<number, node> = new Map()
    constructor(capacity: number) {
        this.capacity = capacity
        this.first = getNode(undefined, undefined)
        this.last = getNode(undefined, undefined)

        this.first.next = this.last
        this.first.pre= this.last
        this.last.next = this.first
        this.last.pre = this.first
    }

    get(key: number): number {
       const node = this.map.get(key)

        if(!node) return -1

       this.deleteNode(node)
       this.putNodeNextFirst(node)

       return node.value
    }

    put(key: number, value: number): void {
        if(this.map.has(key)) {
            this.map.get(key).value = value
            this.get(key)
            return
        }


        if (this.capacity === 0) {
            // 容量不足， 删除一个node
            this.deleteNode(this.last.pre)
        }



        const node = getNode(key, value)
        this.putNodeNextFirst(node)

    }

    putNodeNextFirst(node: node) {
        this.first.next.pre = node
        node.next = this.first.next
        node.pre = this.first
        this.first.next = node

        this.map.set(node.key, node)


        this.capacity--
    }

    deleteNode(node: node) {
        node.pre.next = node.next
        node.next.pre = node.pre

        this.map.delete(node.key)

        this.capacity++
    }
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */



const lru = new LRUCache(2)

lru.put(1,1)
lru.put(2,2)

lru.get(1)

lru.put(3,3)
lru.get(1)
