const palindromes = function (string) {
    let lowerString = string.toLowerCase();
    array = lowerString.split("");
    for (let i = array.length; i > 0; i--)
        {
        if (array[i] == '.' || array[i] == ' ' || array[i] == ',' || array[i] == '!')
        {
            array.splice(i, 1);
        }
    }
    let original = array.join("");
    let reversed = array.reverse().join("");

    console.log(original);
    console.log(reversed);
    if (original === reversed)
    {
        return true;
    } else {
        return false;
    }
    
};

// Do not edit below this line
module.exports = palindromes;
