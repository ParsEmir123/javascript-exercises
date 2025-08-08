const removeFromArray = function(arr,...args) {
    array = arr.filter((item) => item !== args[args.indexOf(item)]);
    return array;
};
console.log(removeFromArray(["hey", 2, 3, "ho"], "hey", 3))