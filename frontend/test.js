function encode(text, key) {
  let textArr = String(text).split('')
  let encodeArr = textArr.map((item, index) => {
    let strKey = String(key)
    let secretId = strKey.charCodeAt(index%strKey.length)
    return String.fromCharCode(item.charCodeAt(0)^secretId)
  })
  return encodeArr.join('')
}
console.log(encode(8123908, 'sayabc'))