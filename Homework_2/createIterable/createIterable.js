'use strict'

function createIterable(from, to) {

    if(Number.isFinite(to) || !Number.isFinite(from) || to <= from) {
        throw new Error ('Arguments are not numbera')
    }
    
    const obj = {
        from,
        to,
        [Symbol.iterator]() {
            this.current = this.from
            return this
        },

        next(){
            if(this.current <= this.to){
                return { done: false, value: this.current++ }
            } else {
                return { done: true }
            }
        }
    }

    return obj   
}
