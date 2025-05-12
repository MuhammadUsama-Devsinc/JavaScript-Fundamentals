const five=  '5.09'
// conversion  into decimal
console.log(Number.parseInt(five, 10));

const oct = '10'
console.log(Number.parseInt(oct, 8));

console.log(Number.parseInt('20', 8)); // 16 (2×8 + 0×1)
console.log(Number.parseInt('8', 8)); // NaN (invalid octal digit)
console.log(Number.parseInt('9AF', 16));// 16 (hexadecimal)


const float = '5.4982'
console.log(Number.parseFloat(float).toFixed(2));