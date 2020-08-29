/*
 * 全局过滤器
 * @Author: coderqiqin@aliyun.com
 * @Date: 2020-08-29 20:10:44
 * @Last Modified by: CoderQiQin
 * @Last Modified time: 2020-08-29 20:11:05
 */
import dayjs from "dayjs";

export const formatPhoneNum = phone => {
  return phone.replace(/^(\d{3})\d{4}(\d{4})/, "$1****$2");
};

export const formatDate = (date, fmt = "YYYY-MM-DD") => {
  return dayjs(date).format(fmt);
};

// 数字千分位
export const formatMoney = money => {
  // value.toLocaleString('zh',{style: "currency", currency: "CNY"}) =>   ￥3,500
  return money.toLocaleString();
};
