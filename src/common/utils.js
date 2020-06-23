/**
 * @description 随机数生成
 * @author coderqiqin@aliyun.com
 * @date 2020-06-22
 * @param {number} min
 * @param {number} max
 * @returns {number}
 */
export const random = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

/**
 * @description 验证手机号
 * @author coderqiqin@aliyun.com
 * @date 2020-06-23
 * @param {number} phone
 * @returns {boolean}
 */
export const isMobile = phone => /^1[0-9]{10}$/.test(phone);
