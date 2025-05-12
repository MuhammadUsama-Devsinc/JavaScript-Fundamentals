const str = "TeXt 1  Text"
console.log("Length :", str.length)
console.log("Upper case :", str.toUpperCase())
console.log("Lower case :", str.toLowerCase())

console.log("Slice to extract 1 only:", str.slice(5, 6))
console.log("Slice to extract last 3 digits only:", str.slice(3))
console.log("Slice to extract 'ex' only:", str.slice(-5, -3))

//work with positive indexes only
console.log("Slice to extract 'text' only:", str.substring(0, 4))
console.log("Slice to extract 'text' only:", str.substr(0, 4))

// Replace Function

// i for only first match and case-insensitive
// console.log("replace text with 'Devsinc' :", str.replace(/text/i, 'Devsinc'))


//g for global match with case-sensitive
// console.log("replace text with 'Devsinc' :", str.replace(/text/g, 'Devsinc'))

// /gi to use both
console.log("replace text with 'Devsinc' :", str.replace(/text/ig, 'Devsinc'))

const t1 = 'new testing text.'
console.log(t1.includes('new'));
console.log(t1.includes('test', 6));



