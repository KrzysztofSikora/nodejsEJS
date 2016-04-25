/**
 * Created by krzysztof on 25.04.16.
 */
// var router = require('express').Router()
var express = require('express')
var router = express.Router()

router.use(express.static(__dirname + '/../assets'))



router.get('/', function (req, res) {
    res.sendfile('layouts/posts.html')
})

module.exports = router