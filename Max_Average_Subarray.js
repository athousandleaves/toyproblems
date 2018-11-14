var findMaxAverage = function(nums, k) {
  let maxAvg = 0;
  for (let i = 0; i < nums.length - k + 1; i++) {
    let sum = 0;
    for (let j = i; j < k + i; j++) {
      sum += nums[j];
    }
    let avg = sum / k;
    if (avg > maxAvg || maxAvg === 0) maxAvg = avg;
  }

  return maxAvg;
};
