const blogsRouter = require("./blog.routes");
const postRouter = require("./post.routes");
const commentsRouter = require("./comment.routes");
const userRouter = require('./user.routes')
const { restrict } = require('../lib/middlewares/auth.middleware');
module.exports = (app) => {

    app.get("/", (req,res) => res.send("CURSO DE API REST"));

    app.get("/saludo", (req,res) => res.send("<i>Hola mundo</i>"));
    app.use("/users", userRouter);

    app.use(restrict)
    app.use("/blogs",blogsRouter);
    app.use("/posts",postRouter);
    app.use("/comments",commentsRouter);
    
}
