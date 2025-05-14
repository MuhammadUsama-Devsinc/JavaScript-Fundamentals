setTimeout(()=> console.log(`Delay by 1 second.`), 1000)


function fetchData(callback) {
    setTimeout(() => {
        callback("Data loaded");
    }, 1000);
}

fetchData((data) => console.log(data));
