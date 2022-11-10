'use strict'

Array.prototype.customFilter = function (callback, obj){
    if(typeof(callback) !== 'function' || typeof obj !== 'object' || Array.isArray(obj)){
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
