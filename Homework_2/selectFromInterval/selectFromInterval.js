'use strict'

function selectFromInterval(arr, from, to) {
    let returnArr = []

    if(isNaN(from) || isNaN(to)){
        throw new Error('Properties are not numbers')
    }

    if(!Array.isArray(arr)){
        throw new Error(`${arr} is not massive`)
    }

    arr.map(element => {
        if(isNaN(element)){
            throw new Error(`${element} is not a number`)
        }
        if(from < to){
            returnArr = arr.filter(element)
        }
        if(element >= from && element <= to){
            returnArr.push(element)
        }
    })

    return returnArr
}


