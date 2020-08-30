import request from "./request";
// 处理通配符
// prettier-ignore
import { token, city } from "../common/const"
export const testGet = (params) =>
    request.get("/", {
        params: {
            city,
            ...params,
        },
    });

export const testPost = (data) => request.post("/a", data);

// https://www.fastmock.site/mock/de8258e7b013fd4589f4d7ed66c78b75/testmock/demo123

// export const testPost = (data, headers) =>
//   request({
//     method: "post",
//     url: "/a",
//     data,
//     headers
//   });

// export const testAsync = asyncWrap(testPost);
