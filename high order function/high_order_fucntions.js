function add(a, b, print) {
    let x = a + b
    print(x)
}

add(5, 6, (val) => {console.log(val)})