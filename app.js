const calculator = {
  plus: function (a,b){
    return a + b;
  },
  minus: function (a,b){
    return a - b;
  },
  times: function (a,b){
    return a * b;
  },
  divide: function (a,b){
    return a / b;
  },
  power: function (a,b){
    return a ** b;
  },
};

const plusResult = calculator.plus(2,1);
const minusResult = calculator.minus(plusResult,10);
const timesResult = calculator.times(10, minusResult);
const divideResult = calculator.divide(timesResult, plusResult);
const powerResult = calculator.power(divideResult, minusResult);
// const.log(plusResult);


// const age = 20;

// function calculatorKrAge(ageOfForeigner){
//   return ageOfForeigner + 2;
// }

// const KrAge = calculatorKrAge(age);

// console.log(KrAge);

const btn = document.querySelector("#btn");
const body = document.querySelector("body");

function changeColor(){
  body.style.backgroundColor="orange";
}

btn.addEventListener("click",changeColor);