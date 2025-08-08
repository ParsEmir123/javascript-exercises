const reverseString = function(text) {
    string = "";
    for (let index = 1; index < text.length+1; index++) {
        string+=text[text.length-index];
    
    }
    return string;
};
console.log(reverseString("Hello World"))
