/*
文档：jest单元测试.md
链接：http://note.youdao.com/noteshare?id=a3c25662cf99377d4a49dff767f13ed9&sub=117F99A80F924E219CABBA022884D107
*/

test("注册电话兼容手机号和座机号: 期望false", () => {
  let mobileReg = /^1[0-9]{10}$/; // 手机号码
  let telephoneReg = /^((\(\d{2,3}\))|(\d{3}\-))?(\(0\d{2,3}\)|0\d{2,3}-)?(\d{2,4})?[1-9]\d{6,7}(\-\d{1,4})?$/; // 座机号码

  let testArr = [037153366723, "037153366723", 185383008391, "18538300839"];

  testArr.forEach(item => {
    expect(!mobileReg.test(item) && !telephoneReg.test(item)).toBeFalsy();
  });
});

test("手机号", () => {
  expect(/^1[0-9]{10}$/.test(18538300839)).toBeTruthy();
  expect(/^1[0-9]{10}$/.test(1853830083)).toBeFalsy();
});
