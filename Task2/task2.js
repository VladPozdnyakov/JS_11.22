"use strict"

            let symbols = prompt('Enter no more 3 symbols', '')
			let number= parseFloat(prompt('Enter number', ''))
            let result = ''

             if (
                symbols === null || 
                number === null ||
                symbols === '' ||
                number === '' ||
                symbols.length > 3 ||
                isNaN(number) ||
                number > 10 ||
                number < 0
                ) {
                    
                    console.log('Incorrect input!')
                } else {
                    for (let i = 0; i < number; i++){
                        for(let j = 0; j < number; j++){
                             result += `${symbols} `;
                        }
                        result+='\n';
                    }
                  
                    console.log (result)
                }

    



