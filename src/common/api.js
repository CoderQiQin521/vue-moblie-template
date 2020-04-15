import http from './request'
export const test = params => http.get('', params)