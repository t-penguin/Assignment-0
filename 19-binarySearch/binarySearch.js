class MySolution {
  constructor() {
    this.flag = false; // this is optional to use;
  }

  binarySearch(nums, target) {
    if (nums.length == 1)
      return nums[0] == target;

    let mid = Math.floor(nums.length / 2)
    if (nums[mid] == target)
      return true;
    
    if (nums[mid] < target && mid != nums.length)
      return this.binarySearch(nums.slice(mid + 1), target);
    
    if (nums[mid] > target && mid != 0)
      return this.binarySearch(nums.slice(0, mid), target);

    return false;
  }
}

// Do not edit this line;
let StudentSolution = MySolution;
module.exports = StudentSolution;