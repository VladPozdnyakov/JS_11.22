 "use strict"

			let firstNumber = parseFloat(prompt("Enter first number", ''));
			let secondNumber = parseFloat(prompt("Enter second number", ''));
			if (
                isNaN(firstNumber) ||
                isNaN(secondNumber) || 
                firstNumber === null || 
                secondNumber === null ||
                firstNumber === '' ||
                secondNumber === '' 
                ) {
				console.log('Incorrect input!')
			} else {
				let sum = firstNumber + secondNumber;
				let product = firstNumber * secondNumber;
				let power = Math.pow(firstNumber, secondNumber);

				console.log(
					`First number: ${firstNumber}. Second number: ${secondNumber}. Sum: ${sum}. Product: ${product}. Power ${power}`)
			}


            
             


