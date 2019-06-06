function nameToId(name){
    return name.replace(' ','-').toLowerCase() ;
}
function ensureArray(obj){
    return Array.isArray(obj) ? obj : Array(obj)
}

//returns a list whose elements have a name.
function nameListElements(list,elementName){
    list.elementName = elementName; 
    return list;
}

//namedElementsLists : [namedElementList],  a list which contains namedElementLists as elements
//a single namedElementList can be obtained by using the function nameListElement(list,elementName)
//example IO of the following function : 
// >> zipNamedElementLists([nameListElement(["yasir","alice"],"name"),nameListElement([24,20,23],"age")]);
// << [ { name: 'yasir', age: 24 },{ name: 'alice', age: 20 },{ name: undefined, age: 23 } ]
function zipNamedElementLists(namedElementLists){
    var max = 0 ; 

    namedElementLists.forEach(function(list){
        if (list.length > max) max = list.length
    });

var zipped = []
for (let i = 0 ; i < max; i++){
    obj = {};
    namedElementLists.forEach(function(list){
       obj[list.elementName] =  list[i];
    })
    zipped.push(obj);
}
    return zipped; 
}

 
module.exports = {
    nameToId, nameListElements,zipNamedElementLists, ensureArray
}

