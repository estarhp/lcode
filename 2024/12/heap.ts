function parent(i: number) {
    return Math.floor((i - 1) / 2)
}

function left(i: number) {
    return 2 * i + 1
}

function right(i: number) {
    return 2 * i + 2
}


class Heap {
     elements: number[] = []


    constructor(nums: number[]) {
        this.elements = [...nums]

        // 从底往上进行堆化

        for (let i = parent(this.size() - 1); i >= 0; i--) {
             this.shiftDown(i)
        }
    }


    getElement(i: number) {
        return this.elements[i]
    }

    size() {
        return this.elements.length
    }

    shiftDown(i: number) {
        while (true) {
            const num = this.elements[i]
            const l = left(i)
            const r = right(i)
            const size = this.size()
            let max: number= i

            if(l < size && this.elements[l] > this.elements[max]) max = l;
            if(r < size && this.elements[r] > this.elements[max]) max = r;

            if(max === i) break

            this.swap(max,i)

            i = max

        }
    }

    shiftUp(i: number) {
      while (true) {
          const p = parent(i)

          if(p < 0) break

          if(p >= 0 && this.elements[p] > this.elements[i]) break

          this.swap(p,i)

          i = p

      }

    }

    push(num: number) {
       this.elements.push(num)
       this.shiftUp(this.size() - 1)

    }

    peek(i: number) {
         return this.elements[0]
    }

    pop() {
        this.swap(0, this.size() - 1)

        const result =  this.elements.pop()

        this.shiftDown(0)

        return result
    }


    swap(i: number,j: number) {
        const k = this.elements[j]

        this.elements[j] = this.elements[i]

        this.elements[i] = k
    }

}


function findKthLargest(nums: number[], k: number): number {
      const heap = new Heap(nums.slice(0, k).map((v) => -v))

      nums.slice(k).forEach(num => {
          const min = -heap.peek(0)

          if(min < num) {
              heap.pop()
              heap.push(-num)
          }
      })


    return -heap.peek(0)

};



function topKFrequent(nums: number[], k: number): number[] {
   const map = new Map<number, number>()

    for (let i = 0; i < nums.length; i++) {
        const item = nums[i]

        if(map.has(item)) {
            map.set(item, map.get(item) + 1)
        }else {
            map.set(item, 1)
        }
    }

    const heap = new Heap([])

    const countMap = new Map()

    map.forEach((item, key) => {

        if(countMap.has(item)) {
            countMap.get(item).push(item)
        }else {
            countMap.set(item, [key])
        }

        if(heap.size() === k) {
            const min = -heap.peek(0)
            if(min < item) {
                heap.pop()

                heap.push(item)
            }

            return
        }
        heap.push(-item)
    })

    let count = k
    let index = 0
    const counts = heap.elements.map((v) => -v).reverse()
    const results = []

    while (count > 0) {
        const items = countMap.get(counts[index])
        count -= items.length
        results.push(...items)
    }

    return results
};






