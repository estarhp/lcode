const filter = function (arr, func) {
    const resultList = []
    arr.forEach((item, index) => {
        if (func(item,index)) resultList.push(item)
    })
    
    return resultList
}


