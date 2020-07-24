const = () => new Promise((res, rej) => {
    setTimeout(() => {
        res('resolved');
    }, 1000);
})
new Array(5).fill(get).map(k => k().then(console.log))
