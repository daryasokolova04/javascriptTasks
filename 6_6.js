function createCounter(num) {
    let res = num;

    return {
        inc: function() {
            res += 1;
        },

        dec: function() {
            res -= 1;
        },

        get: function() {
            return res;
        }
    }
}

const { inc, dec, get } = createCounter(5);
console.log(get()); // 5
inc();
inc();
inc();
dec();
console.log(get()); // 7
