const reverseString = function(string) {
    let arr = string.split("");
    let rev = [];
    let newString = "";
    for (let i = 0; i <= string.length; i++)
    {
        rev[i] = arr[string.length - i];
    }
    newString = rev.join("");
    return newString;

};

// Do not edit below this line
module.exports = reverseString;
