import http from "@/global/request";
// https://www.fastmock.site/mock/de8258e7b013fd4589f4d7ed66c78b75/testmock/demo123
export const testGet = params => http.get("/", { params });
export const testUser = params => http.get("/user", params);

export const testPost = data => http.post("/a", data);

// export const testPost = (data, headers) =>
//   http({
//     method: "post",
//     url: "/a",
//     data,
//     headers
//   });

// export const testAsync = asyncWrap(testPost);
