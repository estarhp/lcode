export type ListNode = {
    val: any,
    next: ListNode | null
}

export type Node = {
    val: any,
    random: Node,
    next: Node,
}

export type BothWayNode = {
    val: any,
    key: any
    next: BothWayNode,
    pre: BothWayNode
}