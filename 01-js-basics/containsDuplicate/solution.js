// function containsDuplicate(nums) {
//     for (let i = 0; i < nums.length; i++) {
//         for (let j = i + 1; j < nums.length; j++) {
//             if (nums[i] === nums[j]) {
//                 return true
//             }
//         }
//     }
//     return false
// }

// function containsDuplicate(nums) {
//     const map = new Map()
//     for (let i = 0; i < nums.length; i++) {
//         if (map.has(nums[i])) {
//             return true
//         }
//         map.set(nums[i],i)
//     }
//     return false
// }

function containsDuplicate(nums){
    const set = new Set()
    for(let i = 0; i < nums.length; i++){
        if(set.has(nums[i])){
            return true
        }
        set.add(nums[i])
    }
    return false
}

console.log(containsDuplicate([1, 2, 3, 1]));                // true
console.log(containsDuplicate([1, 2, 3, 4]));                // false
console.log(containsDuplicate([1,1,1,3,3,4,3,2,4,2]));       // true
console.log(containsDuplicate([]));      // false，空数组
console.log(containsDuplicate([7]));     // false，只有一个元素
