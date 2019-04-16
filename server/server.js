const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const mongoose = require('mongoose')

const models = require('./model')
const Chat = models.getModel('chat')

const app = express()

const server = require('http').Server(app)
const io = require('socket.io')(server)
io.on('connection', function (socket) {
  console.log('user login')
  socket.on('sendmsg', function (data) {
    console.log(data)
    const {from, to, msg} = data;
    const chatid = [from, to].sort().join('_');
    Chat.create({chatid, from, to, content: msg}, function (err, doc) {
      io.emit('recvmsg', Object.assign({}, doc._doc))
    })
    // io.emit('recvmsg', data)
  })
})
// work in express

const userRouter = require('./user')


app.use(cookieParser())
app.use(bodyParser.json())
app.use('/user', userRouter)

server.listen(9093,function () {
  console.log('node app start at port 9093')
})