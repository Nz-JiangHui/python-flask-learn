import axios from 'axios'
export function request () {
  let obj = axios.create()
  obj.interceptors.response.use(
    function (res) {
      let promise = new Promise((resolve) => {
        resolve(res)
      })
      return co(promise)
    },
    function (e) {
      let promise = new Promise((resolve, reject) => {
        reject(e.response)
      })
      return co(promise)
    }
  )
  return obj
}
export const co = promise => {
  if (!promise || !Promise.prototype.isPrototypeOf(promise)) {
    return new Promise((resolve, reject) => {
      reject(new Error('requires promises as the param'))
    }).catch(error => {
      return [ null, error ]
      // return [err, null]
    })
  }
  return promise.then(function () {
    return [ ...arguments, null ]
    // return [null, ...arguments]
  }).catch(error => {
    return [ null, error ]
    // return [err, null]
  })
}
