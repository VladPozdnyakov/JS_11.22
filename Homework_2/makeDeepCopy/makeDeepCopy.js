'use stcrict'



function makeDeepCopy(object){ 
    let copyObject = {}
    if (!object || typeof object !== 'object'){           // условие на проверку типа аргумента
        throw new Error ('Argument is not Object')     
    }

    for (let key in object ){                             // проходим итерациями по ключам объекта и выясняем объекты ли они
        if (typeof(object[key]) === 'object'){
            copyObject[key] = makeDeepCopy(object[key])   
        }
        else {
            copyObject[key] = object[key]
        }
    }                            
    return copyObject
}

