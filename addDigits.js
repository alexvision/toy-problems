/*
 *  Solution to this problem from leetcode.com - https://leetcode.com/problems/add-digits/
 *
 *  Problem : Given a non-negative integer num, repeatedly add all its digits until the result has only one digit.
 */
var addDigits = function(num) {
    var result = 0;
    
    var sumDigits = function(numStr){
        if(numStr.length === 0 && result.toString().length === 1){
            return;
        } else if(numStr.length === 0) {
          oldResult = result.toString();
          result = 0;
          sumDigits(oldResult);
        }else {
            console.log(numStr);
            result = result + parseInt(numStr[0]);
            console.log(result);
            sumDigits(numStr.substr(1));
        }
        
    };
    sumDigits(num.toString());
    return result;
    
};
