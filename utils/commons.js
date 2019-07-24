function nameToId(name){
  //replace all white spaces with a -
    return name.trim().split('').map((e)=> e!==" "? e : '-').join('').toLowerCase() ;
}
function ensureArray(obj){
    return Array.isArray(obj) ? obj : Array(obj)
}


//accepts lists that defined the list.elementName property

//example:

// const names = ["yasir", "zed",'james'];
// const ages = [12, 42];
// const countries = ["iq"];

// names.elementName = 'name'
// ages.elementName = 'age'
// countries.elementName = 'countries'

// result = fusion(names,ages,countries)
// console.log(result);   
// OUTPUT:
// >> result [ { name: 'yasir', age: 12, countries: 'iq' },
//   { name: 'zed', age: 42 },
//   { name: 'james' } ]
function listsToObjects(...lists) {
    result = [];
    lists.forEach(currentList => {
      currentList.forEach((element, index) => {
        result[index] =
          typeof result[index] === "undefined"
            ? { [currentList.elementName] : element }
            : Object.defineProperty(result[index], currentList.elementName, {
                value: element,
                enumerable: true
              });
      });
    });
    return result;
  }

 
module.exports = {
    nameToId, listsToObjects, ensureArray
}

