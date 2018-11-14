var twoSum = function(nums, target) {
  let store = {};
  for (let i = 0; i < nums.length; i++) {
    if (store[nums[i]] === undefined) {
      store[nums[i]] = i;
    } else {
      // duplicate value, convert to array to store both
      store[nums[i]] = [store[nums[i]], i];
    }
  }
  for (num in store) {
    if (store[target - num]) {
      if (Array.isArray(store[target - num])) {
        return store[target - num];
      } else {
        return [store[num], store[target - num]];
      }
    }
  }
};
