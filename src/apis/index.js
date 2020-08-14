import { http, mock } from "@/global/request";
// https://www.fastmock.site/mock/de8258e7b013fd4589f4d7ed66c78b75/testmock/demo123
export const testGet = params =>
  http.get("/", {
    params
  });
export const testUser = params => http.get("/user");

// export const testPost = data => http.post("http://localhost:3000", data);

export const testPost = (data, headers) =>
  http({
    method: "post",
    url: "http://localhost:3000",
    data,
    headers
  });

// export const testAsync = asyncWrap(testPost);
