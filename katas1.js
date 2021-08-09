function oneThroughTwenty() {
    
  let numbers = []

 for (let i = 1; i <= 20; i++) {
   numbers += i
 }

 return numbers
    
}

console.log(oneThroughTwenty())

function evensToTwenty() {
    
  let numbers = [];

  for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
      numbers += i
    }
  }
  return numbers

}

console.log(evensToTwenty())

function oddsToTwenty() {
    
  let numbers = [];

  for (let i = 1; i <= 20; i++) {
    if (i % 2 !== 0) {
      numbers += i
    }
  }
  return numbers
   
}

console.log(oddsToTwenty())

function multiplesOfFive() {
    
let numbers = []  

  for (let i = 1; i <= 100; i++) { 
    if (i % 5 === 0) {
      numbers += i
    }
  }
  return numbers

}

console.log(multiplesOfFive())

function squareNumbers() {
    
let square = []

  for (let i = 1; i <= 10; i++) {
    square += (i * i)
  }
    return square
}

console.log(squareNumbers())

function countingBackwards() {
    
  let numbersBack = []

  for (let i = 20; i >= 1; i--) {
    numbersBack += i
  }
  return numbersBack
}

console.log(countingBackwards())

function evenNumbersBackwards() {
    
let numbersBack = []

  for (let i = 20; i >= 1; i--) {
    if (i % 2 === 0) {
      numbersBack += i
    }
  }
  return numbersBack
}

console.log(evenNumbersBackwards())

function oddNumbersBackwards() {
    
  let numbersBack = []

  for (let i = 20; i >= 1; i--) {
    if (i % 2 !== 0) {
      numbersBack += i
    }
  }
  return numbersBack
}

console.log(oddNumbersBackwards())

function multiplesOfFiveBackwards() {
    
  let numbersBack = []

  for (let i = 100; i >= 1; i--) { 
    if (i % 5 === 0) {
      numbersBack += i
    }
  }
  return numbersBack

}

console.log(multiplesOfFiveBackwards())



function squareNumbersBackwards() {
    
  let squareBack = []

  for (let i = 10; i >= 1; i--) {
    squareBack += (i * i)
  }
    return squareBack
}

console.log(squareNumbersBackwards())
