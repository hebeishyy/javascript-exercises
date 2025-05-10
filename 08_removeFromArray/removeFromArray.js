function removeFromArray(array, ...value) {
    let result = [];
    for (let i = 0; i < array.length; i++)
    {
        if (!value.includes(array[i]))
        {
           result.push(array[i]);
        }
    }
    return result
};

/*function remove2(array, ...value){
    let result = [];
    for (let i = 0; i < array.length; i++)
    {
        if (!value.includes(array[i]))
        {
           result.push(array[i]);
        }
    }
    return result

    let result = array.filter(x => !value.includes(x))
    return result;
} */




// Do not edit below this line
module.exports = removeFromArray;
