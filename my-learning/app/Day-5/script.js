debugger;

function makeArmy() {
  let shooters = [];

  let i = 0;
  while (i < 10) {
    let j = i;
    let shooter = function () {
      alert(j);
    };
    shooters.push(shooter);
    i++;
  }

  return shooters;
}

let army = makeArmy();

army[0](); // what is output?
army[1](); //
army[2](); //

// let globalVar = "I am from global/script scope"

// function outerFunction() {
//     let outerVar = 'I am from outer scope';

//     function innerFunction() {
//         let innerVar = 'I am from inner scope';
//         console.log(globalVar); // 'I am from global/script scope'
//         console.log(outerVar); // 'I am from outer scope'
//         console.log(innerVar); // 'I am from inner scope'
//     }

//     innerFunction();
// }

// outerFunction();

// console.log(a); // Output: undefined
// // console.log(b); // ReferenceError: Cannot access 'b' before initialization
// // console.log(c); // ReferenceError: Cannot access 'c' before initialization
//   globalFunction(); //output: 10

// var a = 10;
// let b = 20;
// const c = 30;
// function globalFunction() {
//   let a = 10;
//   console.log(a);
// }

// console.log(a); // Output: 10
// console.log(b); // Output: 20
// console.log(c); // Output: 30
//   globalFunction(); //output: 10
