var isHappy = function(n) {
    var numStr = n.toString();
    var num = 0;
    if (n === 1) {
        return true;
    }
    else if (n === 4) {
        return false
    }
    for(var i = 0; i < numStr.length; i++){
        num = num + (numStr[i] * numStr[i]);
    }
    console.log("recursing with " + num)
    return isHappy(num);
};