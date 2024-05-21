import * as child_process from "child_process";

export type Node = {
    isEnd: boolean,
    children: Node[]
}

const Trie= function(this: {
    node: Node
}) {
    this.node = {
        isEnd: false,
        children: new Array(26).fill(null)
    }
};

/**
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word: string): void {
    let node = this.node
    for (const char of word) {
        const index = char.charCodeAt(0) - "a".charCodeAt(0)
        if (!node.children[index]) {
            node.children[index] = {
                isEnd: false,
                children: new Array(26).fill(null)
            }
        }
        node = node.children[index]
    }
    node.isEnd = true
};

/**
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word: string): boolean {
    let node = this.node
    for (const char of word) {
        const index = char.charCodeAt(0) - "a".charCodeAt(0)
        if (node.children[index]) {
            node = node.children[index]
        }else {
            return false
        }
    }
    return node.isEnd
};

/**
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix: string): boolean {
    let node = this.node
    for (const char of prefix) {
        const index = char.charCodeAt(0) - "a".charCodeAt(0)
        if (node.children[index]) {
            node = node.children[index]
        }else {
            return false
        }
    }
    return true
};

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */

