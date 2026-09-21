// function twoSum(nums, target) {
//     for (let i = 0; i < nums.length; i++) {
//         for (let j = i + 1; j < nums.length; j++) {
//             if (nums[i] + nums[j] === target) {
//                 return [i, j]
//             }
//         }
//     }
//     return [];
// }

function twoSum(nums, target) {
    const map = new Map()
    for (let i = 0; i < nums.length; i++) {
        const need = target - nums[i]
        if (map.has(need)) {
            return [map.get(need), i]
        }
        map.set(nums[i], i)
    }
    return []
}

console.log(twoSum([2, 7, 11, 15], 9)); // [0, 1]
console.log(twoSum([3, 2, 4], 6));       // [1, 2]
console.log(twoSum([3, 3], 6));          // [0, 1]
console.log(twoSum([1, 2], 100)); // []
console.log(twoSum([-1, -2, -3, -4], -7)); // [2, 3]
