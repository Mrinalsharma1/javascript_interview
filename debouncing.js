let count = 0
function getdata() {
    console.log("fetching data..." + count)
}

function mydebouncing(call, d) {
    let timer
    return function (...args) {
        if (timer) clearTimeout(timer)
        timer = setTimeout(() => {
            getdata()
        }, d);
    }
}

const Betterfun = mydebouncing(getdata, 1000)