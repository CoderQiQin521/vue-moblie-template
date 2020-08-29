// 对称加密: 前后端用同一个密钥,加密&解密
// 非对称加密: 后端生成一对密钥(私钥与公钥),前端使用公钥加密,后端使用私钥解密
import JSEncrypt from "./ras_plugin/jsencrypt.js";

// 非对称RAS加密
let publicKey =
  "MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDnEgc8cLBmtuMu1bUO5WQBNnt40x15kxY7LYaSWrRpGJODjYEfa3Xds15ixoxWYS6cgYYWvmynMfmVoe5V16jHeAN5oeZ1n2PCYcjxDJYCCkTPjRG8hL1YIluhPMGydvjug+tnRGC7eENdjqIZxsXjwYONOCX+9VJd7g4fi/UqOwIDAQAB"; // 服务端提供

/**
 * RSA to Java
 * @param { string } val 加密字符串 `token=xxx&type=1`
 * @return { string }
 */
let RAS_JM = val => {
  var encrypt = new JSEncrypt();
  encrypt.setPublicKey(publicKey);
  // 加密过长字符串会报错返回false,使用long方法
  return encrypt.encrypt(val) || encrypt.encryptLong(val);
};

export default RAS_JM;
