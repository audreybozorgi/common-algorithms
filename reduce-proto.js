const customNumericElements = [10, 10, 10]
const initialValue = 20
const sumAllElements = customNumericElements.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue
}, initialValue)

// console.log('sumAllElements', sumAllElements); // sumAllElements 50

const customNumericElements2 = [10, 10, 10]
const initialValue2 = 20
const multiplyElements = customNumericElements2.reduce(function(accumulator, currentValue) {
    return accumulator * currentValue
}, initialValue2)

// console.log('multiplyElements', multiplyElements); // multiplyElements 50

// **** reduce method gets an array of elements, it has one variable internally. which the value is come from the custom function you defined.
// it iterates on every elements and do this calculation. and finally return the last amount of its internal variable  
// in first calculation there is no internal variable so it start from index 1 but you can pass initial value to it. 

const someElements  = [10, 10, 10]
const inValue = 10
Array.prototype.customReduce = function(calculatorFunction, initialValue) { // **** this method is a custom function which get two values (A calculator function and an initial value)
    let internalCalculatedAmount = undefined // **** this variable is out accumulator

    // **** here we check if we have initial value or not
    if(initialValue) internalCalculatedAmount = initialValue
    else internalCalculatedAmount = 0

    // **** here we iterate on each items and pass users custom calculator function to it and save the value into internal variable we have
    this.forEach(function(item){
        internalCalculatedAmount = calculatorFunction(internalCalculatedAmount, item)
    })

    return internalCalculatedAmount // **** then we return the final value

}

const someVariable = someElements.customReduce(function(customAccumulator, currentValue) {
    return customAccumulator + currentValue
}, inValue)

console.log('someVariable', someVariable);


