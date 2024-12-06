import { Router } from 'express';
const router = Router();


let posts = [
    {id: 1, title: 'Post One'},
    {id: 2,title: 'Post Two'},
    {id: 3,title: 'Post Three'},
]


// get all posts
router.get('/', (request,response) => {
    response.status(200).json(posts)
})


// get single post
router.get('/:id', (request,response, next) => {
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
    
})

// create new post

router.post('/',(req, res,next) =>{

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
});

// put request
router.put('/:id',(req,res,next)=>{
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
});


// delete request
router.delete('/:id',(req,res,next)=>{
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
});

export default router; 