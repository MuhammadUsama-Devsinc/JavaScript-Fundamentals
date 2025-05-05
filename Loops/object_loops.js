// const marks  = {
//     ahmer: 99,
//     kashif: 99,
//     usama: 90,
//     saim: 100,
// }
//
// for (let [key, value] of Object.entries(marks)) {
//     console.log(key, value);
// }
let value = "5 + 10 + ( 10 * 10 ) "
value = value.trim();
const arr = value.split(/[()]/);
console.log(arr);