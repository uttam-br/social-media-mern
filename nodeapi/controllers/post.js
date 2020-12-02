const Post = require("../models/post");

exports.getPosts = (req, res) => {
  const posts = Post.find()
    .select("_id title body")
    .then((posts) => res.json({ posts: posts }))
    .catch((error) => res.status(400).json({ error: error }));
};

exports.createPost = (req, res) => {
  const post = new Post(req.body);
  post.save().then((result) => {
    return res.json({ post: result });
  });
};
