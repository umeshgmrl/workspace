const get = ms => new Promise((res, rej) => {
    setTimeout(() => {
        res(`resolved ${ms}`);
    }, ms);
})

new Array(5).fill(get).map(k => k().then(console.log))

Promise.all(new Array(5).fill(get).map((k, i) => k(i*1000))).then(console.log)
Promise.race(new Array(5).fill(get).map((k, i) => k(i*1000))).then(console.log)
Promise.race(new Array(5).fill(get).map(k => k(Math.random().toString()[2]*1000))).then(console.log);


const get = ms => new Promise((res, rej) => {
    setTimeout(() => {
        if((ms/1000)%2 === 0){
            res(`resolved ${ms}`);    
        }
        rej(`rejected ${ms}`);
    }, ms);
})

Promise.all(new Array(5).fill(get).map((k, i) => k(i*1000))).then(console.log).catch(console.log)

