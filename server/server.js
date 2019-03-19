const express = require('express')
const mongoose = require('mongoose')

const DB_URL = 'mongodb://127.0.0.1:27017/imooc'
mongoose.connect(DB_URL,{useNewUrlParser:true})

mongoose.connection.on('connected',function () {
  console.log('mongo connect success')
})

const app = express()

const User = mongoose.model('user', new mongoose.Schema({
  user: {
    type: String,
    require: true
  },
  age: {
    type: Number,
    require: true
  }
}))

// User.create({
//   user: 'imooc',
//   age: 18
// },function (err, doc) {
//   if (!err) {
//     console.log(doc)
//   } else {
//     console.log(err)
//   }
// })



app.get('/',function (req, res) {
  res.send('<h1>hello</h1>')
})

app.get('/data',function (req, res) {
  // res.json({name: 'immoc'})
  User.find({},function (err, doc) {
    res.json(doc)
  })
})

app.listen(9093,function () {
  console.log('node app start at port 9093')
})