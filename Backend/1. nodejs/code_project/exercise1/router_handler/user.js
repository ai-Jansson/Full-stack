//link数据库
const db = require('../db/index')

//导入加密密码模块
const bcrypt = require('bcryptjs')

//导入加密生成token模块包
const jwt = require('jsonwebtoken')

//导入token加密规则
const config = require('../schema/config')

exports.register = (req, res) => {

  const userinfo = req.body

  db.query('select * from ev_users where username=?', [userinfo.username], (error, result) => {
    if (error) {
      return res.send({ message: error.message })
    }
    console.log(result)
    if (result.length > 0) {
      return res.send('The username exits, please change other one')
    }

    userinfo.password = bcrypt.hashSync(userinfo.password, 10)

    db.query('insert into ev_users set ?', { username: userinfo.username, password: userinfo.password }, (error, result) => {
      if (error) return res.sent(error.message)

      if (result.affectedRows !== 1) return res.send({ message: '注册失败' })

    })
  })
}


exports.login = (req, res) => {

  const userinfo = req.body

  db.query('select * from ev_users where username = ?', [userinfo.username], (error, result) => {

    if (error) {
      return res.send({ message: error.message })
    }

    if (result.length != 1) {
      return res.send('Sorry, query fail')
    }

    if (!bcrypt.compareSync(userinfo.password, result[0].password)) {
      return res.send('The password is incorrect')
    }

    const user = { ...result[0], password: '', user_pic: '' }
    const tokenStr = jwt.sign(user, config.jwtSecretkey, {
      expiresIn: '10h'
    })

    res.send(tokenStr)
  })
}