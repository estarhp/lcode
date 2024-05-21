"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const isValidBST = function (root) {
    if (!root) {
        return true;
    }
    if (!(isValidBST(root.left) && isValidBST(root.right))) {
        return false;
    }
    if (root.left && root.left.max >= root.val) {
        return false;
    }
    else {
        root.max = root.right ? root.right.max : root.val;
    }
    if (root.right && root.right.min <= root.val) {
        return false;
    }
    else {
        root.min = root.left ? root.left.min : root.val;
    }
    return true;
};
//# sourceMappingURL=isValidBST.js.map