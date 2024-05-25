interface MinStack {
    stack: number[],
    map: Map<number, number>
}

class MinStack {
    constructor() {
        this.stack = []
        this.map = new Map()
        this.map.set(0, Infinity)
    }

    push(val: number): void {
        this.stack.push(val)
        const length = this.stack.length
        const newMin = Math.min(this.map.get(length - 1), val)
        this.map.set(length, newMin)
    }

    pop(): void {
        const length = this.stack.length
        this.stack.pop()
    }

    top(): number {
        return this.stack[this.stack.length - 1]
    }

    getMin(): number {
        return this.map.get(this.stack.length)
    }
}



/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */