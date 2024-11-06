//1. 导入http模块
const http = require('http')

//2. 创建http服务器实例
const server = http.createServer()

//3. 为服务器实例绑定request事件,监听客户端请求
server.on('request', (req, res) => {
  const url = req.url;
  let context = '404 Not found'

  if (url === './' || url === '/index.html') {
    context = '<h1> index webpage </h1>'
  } else if (url === '/about.html') {
    context = '<h1>about this webpage</h1>'
  }

  res.end(context);
})

//启动服务器
server.listen(8080, () => {
  console.log('server running at http://127.0.0.1:8080')
})