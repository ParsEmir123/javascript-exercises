const getTheTitles = function(arr) {
    titles = []
    for (let index = 0; index < arr.length; index++) {
        const element = arr[index];
        titles[index] = element.title;
    }
    return titles;
};

// Do not edit below this line
module.exports = getTheTitles;
