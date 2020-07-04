import http from "./request";
export const testGet = params =>
  http.get("https://www.fastmock.site/mock/de8258e7b013fd4589f4d7ed66c78b75/testmock/demo", params);
export const testPost = params => http.post("", params);
