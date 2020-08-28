const { findAll } = require("../services/comment.services");

// Query String: ?filter=<valor> -- url.parse(req.url, true).query;
// Param: /:param -- req.params
const genericResponse = {
    data: {}
  }
  
exports.findAll = async (req, res, next) => {
    try {
        const comments = await findAll()
        const response = Object.assign({}, genericResponse, { data: { comments }})
        res.status(200).json(response).end()
    } catch (error) {
        next (error)
    }
    
}