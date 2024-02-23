const express = require("express");

const { addBlog, getBlog } = require("../controller/blogController");
const router = express.Router();

router.post("/add-blog", addBlog);

module.exports = router;
