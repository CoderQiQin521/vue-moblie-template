import http from "./request";
// https://www.fastmock.site/mock/de8258e7b013fd4589f4d7ed66c78b75/testmock/demo123
export const testGet = params =>
  http.post("http://localhost:3000", {
    params
  });

export const testPost = data => http.post("", data);

function asyncWrap(promise) {
  return promise.then(res => [null, res]).catch(err => [err, null]);
}

export const testAsync = asyncWrap(testGet());
