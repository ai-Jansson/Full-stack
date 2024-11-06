
const express = require('express')
const { object } = require('joi')
const router = express.Router()

// 导入路由处理函数对应的模块
const user_handler = require('../router_handler/user')


//导入验证规则
const { reg_login_schema } = require('../schema/user')
//导入验证表单数据是否符合规则的中间件
const expressJoi = require('@escook/express-joi')


//登录
router.post('/login', expressJoi(reg_login_schema), user_handler.login)

//注册新用户
router.post('/register', expressJoi(reg_login_schema), user_handler.register)

module.exports = router
