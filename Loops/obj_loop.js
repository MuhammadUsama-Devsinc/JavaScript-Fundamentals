const data = {
    name: "Usama",
    age: 8,
    nationality: "Pakistan",
}


// to access with keys
// for (let i in data) {
//     console.log(i);
// }
//

for (let [key,value] of Object.entries(data)) {
    console.log(key, value);
}