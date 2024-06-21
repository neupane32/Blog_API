const Blog = require('../model/blog.model.js');

//create a blog
const createBlogs = async (req,res) => {
    const {title, description, category} = req.body;
    try{
        const blogs = await Blog.create({
            title,
            description, 
            category
        });
        res.status(200).json({message: "Blog created successfully"})
        console.log("successfully created a blog",blogs);
    } catch(error) {
        res.status(500).json({ errorMessege: "Server Error" });
        console.log("Server Error", error);
    }

}

//get all the blogs
const getBlogs = async (req,res) => {
    try{
    const blogs = await Blog.find();
    if (blogs.length === 0) {
        return res.status(200).json({ message: "blogs not added" });
    }
    res.status(200).json({ message: "The all blogs are ->", blogs });
    console.log("Blogs displayed successfully");
    }catch(error) {
        res.status(500).json({errorMessage: "Server Error"})
    }
}

//get a blog with specific id
const getABlog = async (req,res) => {
    try {
        const id = req.params.id
        const blog = await Blog.findById(id);
        if (!blog) {
            return res.status(404).json({ message: `No suchn blog with this id: ${req.params.id}` });
        }
        res.status(200).json({ message: `Blog found successfully having ID: ${req.params.id}`, blog });
    } catch (error) {
        res.status(500).json({ errorMessage: "Server Error" });
    }
}

//update a blog
const updateABlog = async (req,res) => {
    try{
        const id = req.params.id
        const updateBlog = await Blog.findByIdAndUpdate(id, req.body);
        if(!updateBlog){
            return res.status(404).json({ message: `No such blog found with ID: ${req.params.id}` });
        }
        const updatedABlog = await updateBlog.save();
        console.log(updatedABlog)
        res.status(200).json({ message: `successfully updated a blog having ID: ${req.params.id}`, updatedABlog });
    }catch(eror){
        res.status(500).json({errorMessage:"Server Error"})
    }
}

module.exports = {createBlogs,
                  getBlogs,
                  getABlog,
                  updateABlog
};

