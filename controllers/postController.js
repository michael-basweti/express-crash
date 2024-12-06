let posts = [
    {id: 1, title: 'Post One'},
    {id: 2,title: 'Post Two'},
    {id: 3,title: 'Post Three'},
]

//@desc Get all posts
// @route GET /api/posts
export const getPosts = (request,response) => {
    response.status(200).json(posts)
}

// @desc Get single post
// @route GET /api/posts/:id
export const getSinglePost = (request,response, next) => {
    const id = parseInt(request.params.id)
    const post = posts.find((post) => post.id === id)
    if(!post){
        const err = new Error(`post with id ${id} doesn't exist`)
        err.status = 404
        next(err)
    }else{
        // let singlepost = posts.filter((post) => post.id === id)
        response.status(200).json(post)
    }
    
}


// @desc Create Post
// route POST /api/posts
export const createPost = (req, res,next) =>{

    const newPost = {
        id:posts.length+1,
        title: req.body.title
    }

    if(!newPost.title){
        const err = new Error(`no title sent`)
        err.status = 400
        next(err)
        // return res.status(400).json({message:"no title sent"})
    }

    const newPosts = [...posts,newPost]

    res.status(200).json(newPosts)
}


// @edit post
// @route PUT /api/posts
export const editPost = (req,res,next)=>{
    const id = parseInt(req.params.id)
    const post = posts.find((post) => post.id === id)
    if(!post){
        const err = new Error(`post with id ${id} doesn't exist`)
        err.status = 404
        next(err)
    }else{
        // let singlepost = posts.filter((post) => post.id === id)
        // response.status(200).json(post)
        post.title = req.body.title;
        // const newPosts = [...posts,post]

    res.status(200).json(posts)

    }
}

// @delete post
// @route DELETE /api/posts
export const deletePost = (req,res,next)=>{
    const id = parseInt(req.params.id)
    const post = posts.find((post) => post.id === id)
    if(!post){
        const err = new Error(`post with id ${id} doesn't exist`)
        err.status = 404
        next(err)
    }else{
        posts = posts.filter((post)=>post.id !== id);

        return res.status(200).json(posts)

    }
}