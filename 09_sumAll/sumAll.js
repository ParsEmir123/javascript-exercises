const sumAll = function(fn,ln) {
    
    let sum  =0;
    while (fn <= ln) {
        sum += fn;
        fn++;
    }
    return sum;
};
console.log(sumAll(1,7));
