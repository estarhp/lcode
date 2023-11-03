const join = function(arr1, arr2) {
    const idMap = {}; // 使用对象来存储 ID 和对应的索引位置

    arr1.forEach((item, index) => {
        idMap[item.id] = index; // 将ID作为对象的键，值为在 arr1 中的索引位置
    });

    arr2.forEach((item) => {
        if (idMap[item.id] !== undefined) {
            const index = idMap[item.id];
            Object.keys(item).forEach((key) => {
                arr1[index][key] = item[key];
            });
        } else {
            arr1.push(item);
            idMap[item.id] = arr1.length - 1; // 更新 idMap
        }
    });

    arr1.sort((a, b) => a.id - b.id);

    return arr1;
};