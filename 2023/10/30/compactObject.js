/**
 * @param {Object|Array} obj
 * @return {Object|Array}
 */
const compactObject = function(obj) {
 if (!Array.isArray(obj)){
       Object.keys(obj).filter((item)=> {
        if (obj[item] && typeof obj[item] === "object"){
          obj[item] = compactObject(obj[item])
         }else {
         return !obj[item]
        }
      }).forEach((itme) => {
         delete obj[itme]
      })
     }
 if (Array.isArray(obj)){
  const newobj = []
  obj.forEach((item,index)=> {
   if (item){
    if ( typeof item === "object"){
     newobj.push(compactObject(item))
    }else {
     newobj.push(item)
    }
   
   }
   })
  obj = newobj
 }
 return obj
};

console.log(compactObject([null, 0, 5, [0], [false, 16]]))