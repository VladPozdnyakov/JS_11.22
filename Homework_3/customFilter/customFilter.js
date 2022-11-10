'use strict'

Array.prototype.customFilter = function (callback, obj){
    if (typeof(callback) !== 'function'){
        throw new Error
    } else if (typeof (obj) !== 'object' && Array.isArray(obj)){
        throw new Error()
    }
    const filteredArray = []
    for(let i = 0; i < this.length; i++){
        if(callback.call(obj, this[i], i, this)) {
            filteredArray.push(this[i])
        }
    }
    return filteredArray
}
 

const arr = [1, 2, 3]
const filteredArr = arr.customFilter(function(item) { return item > 2 })