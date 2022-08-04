const fibonacci = function(n) {
    if(n < 0){
        return "OOPS";
    }
    if(typeof(n) === 'string'){
        n = +n;
    }
    let fib_nums = [0, 1];
    let iter = [...Array(n + 1).keys()].splice(2);
    for(const i of iter){
        fib_nums.push(fib_nums[i - 1] + fib_nums[i - 2])
    }
    return fib_nums[n];
};

// Do not edit below this line
module.exports = fibonacci;
