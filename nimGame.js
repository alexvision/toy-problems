var canWinNim = function(n) {
    if(n%4 === 0){
      return false;
    }
    return true;
};

canWinNim(4);
canWinNim(5);