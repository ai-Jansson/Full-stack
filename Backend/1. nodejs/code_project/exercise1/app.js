// 导入express第三方包
const express = require('express')

//创建服务器的实例对象
const app = express()

//导入express下的跨域包，配置cors全局中间件
const cors = require('cors')
app.use(cors())

// 配置解析表单数据的中间件
app.use(express.urlencoded({ extended: false }))

//配置解析token中间件,以及导入token规则
// const expressJWT = require('express-jwt')
// const config = require('./schema/config')
// app.use(expressJWT({ secret: config.jwtSecretkey }).unless({ path: ['/api/register'] }))

//导入userRouter并配置
const userRouter = require('./router/user')
app.use('/api', userRouter)

//启动服务器
app.listen(3007, () => {
  console.log('api server is runing at http://127.0.0.1:3007')
})

app.use((error, req, res, next) => {
  if (error.name = 'UnauthorizedError') {
    return res.send('身份认证失败')
  }
})