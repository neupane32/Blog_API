const express = require("express")
const router = express();

const {createBlogs, getBlogs, getABlog, updateABlog} = require("../controller/blog.controllers.js");

//routes for creating a blog
router.post('/blogs', createBlogs);

//routes to get all blogs
router.get('/blogs', getBlogs);

//routes to get a blog
router.get('/blogs/:id', getABlog);

//routes to update a blog
router.put('/blogs/:id', updateABlog);







module.exports = router;