let p1 = new Promise((resolve, reject) => {
    let num = 0;

    if (num >= 1) {
        resolve('Success!');
    }else{
        reject('Failure!');
    }
})

p1.then(result => console.log(result)).catch(error => console.error(error));