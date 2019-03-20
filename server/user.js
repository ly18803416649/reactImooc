const express = require('express')
const Router = express.Router()
const models = require('./model')
const User = models.getModel('user')

Router.get('/list', function (req, res) {
  User.find({}, function (err, doc) {
    if (!err) {
      console.log(doc)
      return res.json(doc)
    } else {
      console.log(err)
    }
  })
})

Router.get('/info', function (req, res) {
  return res.json({code: 0})
})

module.exports = Router