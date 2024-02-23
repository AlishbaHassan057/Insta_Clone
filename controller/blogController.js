const Blog = require("../models/blogModel");
const AsyncHandler = require("express-async-handler");

const addBlog = AsyncHandler(async (req, res) => {
  const { title, description, dated } = req.body;
  try {
    const addedBlog = await blogModel.create({
      title,
      // image,
      description,
      dated,
      // user: req.user._id,
    });
    res.send(addedBlog);
  } catch (error) {
    res.status(401);
    throw new Error(error);
  }
});

const getBlog = AsyncHandler(async (req, res) => {
  const blog = await Blog.find();

  res.send(blog);
});

module.exports = {
  addBlog,
  getBlog,
};
