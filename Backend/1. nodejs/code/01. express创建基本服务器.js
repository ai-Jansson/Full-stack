//1. 导入express
const express = require('express')

//2. 创建web服务器 
const app = express()

//4. 监听客户端的get和post请求
app.get('/user', (req, res) => {
  // 客户端使用 ?name=zs&age=20 这种查询字符串形式，发送到服务器的参数
  console.log(req.query)
})

app.post('/', (req, res) => {

})

//3. 启动服务器
app.listen(80, () => {
  console.log('express server running at http://127.0.0.1')
})


