/**
 * Created by krzysztof on 22.04.16.
 */


var db = require('/home/krzysztof/IdeaProjects/nodejsEJS/db');

var Post = db.model('Post', {
    username: { type: String, required: true },
    body: { type: String, required: true },
    date: { type: Date, required: true, default: Date.now }

});

module.exports = Post;