var rotate = function(nums, k) {
  for(var i = 0; i < k; i++){
    var num = nums.pop();
    nums.unshift(num);
  }
};

rotate([1,2,3,4,5,6,7], 3);
rotate([1], 0);
rotate([1,2], 0);
rotate([1,2], 1);