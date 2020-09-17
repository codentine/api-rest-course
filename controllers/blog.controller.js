const url = require("url");
const { findAll, findById, createBlog, updateBlog } = require("../services/blog.services");
const { prepareResponse } = require("../lib/utils");

// Query String: ?filter=<valor> -- url.parse(req.url, true).query;
// Param: /:param -- req.params

const genericResponse = {
  data: {}
}

exports.findAll = async (req, res, next) => {
  try {
    const { username } = url.parse(req.url, true).query;
    const blogs = await findAll(username);
    const response = Object.assign({}, genericResponse, { data: { blogs }})
    res.status(200).json(response).end();
  } catch(error) {
    next(error)
  }
};

exports.findById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const blog = await findById(id);
    const response = Object.assign({}, genericResponse, { data: { blog }})
    res.status(200).json(response).end();
  } catch(error) {
    next(error)
  }
};

exports.createBlog = async (req, res, next) => {
  try {
    const { body } = req;
    const newBlog = await createBlog(body)
    const response = Object.assign({}, genericResponse, { data: { newBlog }})
    res.status(201).json(response).end();
  } catch(error) {
    next(error)
  }
  
};

exports.updateBlog = async(req, res, next) => {
  try {
    const { body, params: { id } } = req;
    const blogUpdated = await updateBlog(id, body);
    const response = prepareResponse(blogUpdated, 'blogUpdated');
    res.status(200).json(response).end()
  } catch(error){
    next(error)
  }
}