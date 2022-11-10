'use strict'

const createDebounceFunction = function(callback, delay) {
    if(typeof callback !== 'function' || isNaN(delay)){
        throw new Error()
    }
    let timeout
    return function(...args) {
        clearTimeout(timer)
        timeout = setTimeout(function(){
            callback.appy(this, args),
            delay
        })
    }
}

// const log100 = () => console.log(100);
// const debounceLog100 = createDebounceFunction(log100, 10000);
// debounceLog100();
// seTimeout(debounceLog100, 1000);
// seTimeout(debounceLog100, 2000);
// seTimeout(debounceLog100, 3000);
// // 100 через 13с
