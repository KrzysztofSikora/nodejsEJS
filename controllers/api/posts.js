/**
 * Created by krzysztof on 25.04.16.
 */

var Post = require('/home/krzysztof/IdeaProjects/nodejsEJS/models/post');
var router = require('express').Router()


router.get('/api/posts', function (req, res, next) {
    Post.find()
        .sort('-date')
        .exec(function (err, posts) {
            if (err) {
                return next(err)
            }
            res.json(posts)
        })
})

router.post('/api/posts', function (req, res, next) {
    var post = new Post({
        username: req.body.username,
        body: req.body.body
    });
    post.save(function (err, post) {
        if (err) {
            return next(err)
        }
        res.json(201, post)

    })
})




///// dodaje rozszerzenie projektu
//delete by idno
// router.delete('/api/posts/:id')
router.get('/api/posts/:id', function (req, res, next) {
    Post.remove( {_id:req.params.id})
        .exec(function (err, post) {
            if (err) {
                return next(err)
            }
           // res.json(post)
            res.sendfile('layouts/angul.html')
        })
})

// find and remove by id ostatni:D
router.get('/api/posts/last', function (req, res, next) {
   Post.findOneAndRemove()
        .sort('-date')
        .exec(function (err, post) {
            if (err){ return next(err) }
            res.json(post)
        })
})


// dodaje
router.put('/api/posts/update/:id', function (req, res, next) {
    Post.update(
        {
            _id:req.params.id
        },
        { 
            username: req.body.username, 
            body: req.body.body

        }).exec(function (err, post) {
            if (err){ return next(err)}

        res.json(post)
    })
})

router.delete('/api/posts/delete/:id', function (req, res, next) {
    Post.remove(
        {
            _id:req.params.id

        }).exec(function (err, post) {
        if (err){ return next(err)}

        res.json(post)
    })
})


module.exports = router