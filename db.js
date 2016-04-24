/**
 * Created by krzysztof on 24.04.16.
 */
var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/test');

module.exports = mongoose