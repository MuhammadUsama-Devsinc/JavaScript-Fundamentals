"use strict"

/*

"use strict" is used to prevent from unconscious declared variables without using let, var, const so it should throw an error,
and duplication of parameter.
 */
function problematic(a, b) {
    let y = 10;
    let z = a + b
}

problematic()

// function add(a, a) { // ❌ Duplicate parameter
//     return a + a;
// }

// var x = 10;
//
// function example() {
//     {
//         if (x === 10) {
//             console.log(x); // ✅
//         }
//     }
// }
//
// example();
// console.log(x);

//
// console.log(add(1, 2)); // 🤯 Output: 4? 3? Confusing!
