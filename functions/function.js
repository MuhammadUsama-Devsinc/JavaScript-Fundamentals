function multiply(a, b) {
   b = typeof b !== "undefined" ? b : 5;
   return a * b;
}

console.log(multiply(5));

function multiply_array(multiply, ...array) {
    return array.map((value) => multiply * value);
}

console.log(multiply_array(2,2, 3, 45));

// function Person() {
//     this.age = 0;
//
//     setInterval(function growUp() {
//         this.age = this.age + 1;
//     }, 1000);
// }
//
// const p = new Person();


function Person() {
    // Some choose `that` instead of `self`.
    // Choose one and be consistent.
    const self = this;
    self.age = 0;

    setInterval(function growUp() {
        // The callback refers to the `self` variable of which
        // the value is the expected object.
        self.age++;
    }, 1000);
}

const p = new Person();

console.log(p.age);