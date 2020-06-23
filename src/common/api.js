import http from "./request";
export const testGet = params => http.get("", params);
export const testPost = params => http.post("", params);
