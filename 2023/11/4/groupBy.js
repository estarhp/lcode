/**
 * @param {Function} fn
 * @return {Object}
 */
Array.prototype.groupBy = function(fn) {
     const resultObject = {}
      this.forEach((item) => {
          const key = fn(item)
          if (resultObject[key]){
              resultObject[key].push(item)
          }else{
              resultObject[key] = [item]
          }
      });
     
     return resultObject
};


console.log([1,2,3].groupBy(String)) // {"1":[1],"2":[2],"3":[3]}
