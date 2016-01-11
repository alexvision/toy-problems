var isPalindrome = function(x) {
    var numStr = x.toString();
    var midPoint = 1/2 * numStr.length;
    console.log(midPoint);
    if (midPoint % 1 === 0){
        console.log('even')
        var firstTracker = midPoint - 0.5;
        var secondTracker = midPoint + 0.5;
        var val= true;
        while(firstTracker >= 0 && secondTracker <= numStr.length){
            if(numStr[firstTracker] !== numStr[secondTracker]){
                return false;
            }
            firstTracker--;
            secondTracker++;
        }
    } else {
        midPoint += 0.5;
        console.log("odd")
        console.log("midPoint: " + midPoint);
        for(var i = midPoint; i < numStr.length; i++){
          console.log("i: " + i)
          console.log(numStr[i-2], "vs", numStr[i])
          console.log("Num1: " + numStr[i-2] + " Num2: " + numStr[i]);
          if (numStr[i-2] !== numStr[i]){
            console.log("they don't match") 
            return false;
          }
        }
    }
    return true;
};