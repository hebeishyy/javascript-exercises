const sumAll = function(a, b) {
    let result = 0;
    if (a < 0 || b < 0)
    {
        return "ERROR";
    }
    if (isNaN(a) || isNaN(b))
    {
        return "ERROR";
    }
    if (a !== Math.floor(a) || b !== Math.floor(b))
    {
        return "ERROR";
    }
    if( a < b)
    {
        for (let i = a; i <= b; i++)
            {
                result = result + i;
            }
            return result;
    } else if ( b < a)
    {
        for (let i = b; i <= a; i++)
            {
                result = result + i;
            }
            return result;
    }
    
};

console.log(sumAll(1,4));

// Do not edit below this line
module.exports = sumAll;
