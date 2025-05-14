function add(a, b, print) {
    let x = a + b
    print(x)
}

add(5, 6, (val) => {console.log(val)})

const person = { name: "Alice", age: 25 };
const arr = [2, 5 , '67']
for (let i in person) {
    console.log(person[i]);
}
//
// for (let i of arr){
//     console.log(i);
// }
