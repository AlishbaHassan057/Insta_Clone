const AsyncHandler = require("express-async-handler");
const Blog = require("../models/blogModel");

const addBlog = AsyncHandler(async (req, res) => {
  const { title, description, dated } = req.body;
  try {
    const addedBlog = await Blog.create({
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

module.exports = {
  addBlog,
};
