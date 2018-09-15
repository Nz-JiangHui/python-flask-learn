import { request } from '@/api/util.js'
let req = request()
export function getMessage () {
  return req.get('/api/getMsg')
}
