const mythrout = (fn, d) => {
    return function () {
        document.getElementById("myid").disabled = true;
        setTimeout(() => {
            fn()
        }, d);
    }
}

const newfun = mythrout(() => {
    document.getElementById("myid").disabled = false;
    console.log("user clicked...")
}, 4000)