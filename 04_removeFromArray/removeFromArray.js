const removeFromArray = function(array, ...test) {
/*filter through for loop, if remove = the item, then delete*/
    const newArray = [];
    array.forEach((item) => {
        if (!test.includes(item)) {
            newArray.push(item);
        }
    })
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
