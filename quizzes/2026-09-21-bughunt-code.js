/**
 * @module     M02-数组与字符串
 * @problem    removeElement —— 待审代码（只读，请勿在本文件作答）
 * @date       2026-09-21
 * @note       需求：返回移除所有等于 val 的元素后的【新数组】；
 *             要求【不得修改入参 nums】；保持其余元素相对顺序不变。
 */

function removeElement(nums, val) {
  const result = nums;
  for (let i = result.length - 1; i >= 0; i--) {
    if (result[i] === val) {
      result.splice(i, 1);
    }
  }
  return result;
}

// 自测（仅检查返回值，未检查入参是否被修改）
console.log(removeElement([3, 2, 2, 3], 3)); // 输出 [2, 2]

module.exports = { removeElement };
