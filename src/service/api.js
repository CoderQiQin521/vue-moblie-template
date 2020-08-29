import request from "./request";
// 通配符处理

export const testGet = params => request.get("/", { params });
export const testUser = params => request.get("/user", params);

export const testPost = data => request.post("/a", data);

// https://www.fastmock.site/mock/de8258e7b013fd4589f4d7ed66c78b75/testmock/demo123

// export const testPost = (data, headers) =>
//   request({
//     method: "post",
//     url: "/a",
//     data,
//     headers
//   });

// export const testAsync = asyncWrap(testPost);
