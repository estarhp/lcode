/**
 * @param {Object|Array} obj
 * @return {Object|Array}
 */
const compactObject = function(obj) {
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
  return newobj
 }

 Object.keys(obj).filter((item)=> {
  if (obj[item] && typeof obj[item] === "object"){
   obj[item] = compactObject(obj[item])
  }else {
   return !obj[item]
  }
 }).forEach((itme) => {
  delete obj[itme]
 })
 return obj
};

