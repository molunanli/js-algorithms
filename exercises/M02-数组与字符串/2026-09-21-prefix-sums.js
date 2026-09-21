function prefixSums(nums){
    const pre = []
    let num = 0
    for(let i = 0; i < nums.length; i++){
        num = num + nums[i]
        pre[i] = num
    }
    return pre
}

console.log(prefixSums([1, 2, 3, 4]));
