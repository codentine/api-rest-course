
const blogs = [
    {
        id:1,
        title: "Blog 1",
        username:"admin"
    },
    {
        id:2,
        title: "Blog 2",
        username:"admin"
    }
]

const posts = [
    {
        id: 1,
        title: "Post Principal",
        content: "Contenido del post principal",
        blogId: 1
    }, 
    {
        id: 2,
        title: "Post Secundario",
        content: "Contenido del post secundario del blog secundario",
        blogId: 2
    }
]

const comments = [
    {
        id: 1,
        content: "Me gusto el blog",
        likes: 0,
        postId: 1
    },
    {
        id: 2,
        content: "No me gusto el blog",
        likes: 0,
        postId: 1
    },
    {
        id: 3,
        content: "Me pareció muy interesante",
        likes: 0,
        postId: 2
    }
]