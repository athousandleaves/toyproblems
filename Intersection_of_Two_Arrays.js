var intersection = function(nums1, nums2) {
  let is = [];
  nums1.forEach(one => {
      if (nums2.includes(one)) is.push(one);
  })
  return [...new Set(is)];
};