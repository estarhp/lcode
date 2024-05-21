"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const levelOrder_1 = require("./levelOrder");
const rightSideView = function (root) {
    const levelValues = (0, levelOrder_1.levelOrder)(root);
    return levelValues.map(level => level[level.length - 1]);
};
//# sourceMappingURL=rightSideView.js.map