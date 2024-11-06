const fs = require('fs')
const path = require('path')

fs.readFile(path.join(__dirname, '/00 文件读取.txt'), 'utf-8', (error, datastring) => {
  if (error) {
    return console.log('the error is' + error)
  }
  const arrId = datastring.split(' ')
  const arrNew = []
  arrId.forEach(item => {
    arrNew.push(item.replace('=', ':'))
  })

  const newStr = arrNew.join('\r\n')

  fs.writeFile('./01 文件读取.txt', newStr, 'utf-8', (error) => {
    if (error) {
      return console.log('the error is' + error)
    }
    return console.log('successfully write')
  })
})