const arr = [1, 24, 6, 8, 9, 90];


for (const i of arr){
    console.log(i);
}

arr.forEach((value, index) => {
    console.log(index, value);
})


const print = arr.map((value, index) => {
    return [index, value];
})
console.log(print);

const csv = `name,age\nJohn,30\n\nAlice,25`;
console.log(csv);

console.log(
    csv.split('\n')
        .filter(line => line.trim())
        .map((value) => value.split(','))
)