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
router.get('/:id', (request,response) => {
    const id = parseInt(request.params.id)
    const post = posts.find((post) => post.id === id)
    if(!post){
        response.status(404).json({message:"post doesn't exist"})
    }else{
        // let singlepost = posts.filter((post) => post.id === id)
        response.status(200).json(post)
    }
    
})

// create new post

router.post('/',(req, res) =>{
    console.log('====================================');
    console.log(req.body);
    console.log('====================================');

    const newPost = {
        id:posts.length+1,
        title: req.body.title
    }

    if(!newPost.title){
        return res.status(400).json({message:"no title sent"})
    }

    const newPosts = [...posts,newPost]

    return res.status(200).json(newPosts)
});

// put request
router.put('/:id',(req,res)=>{
    const id = parseInt(req.params.id)
    const post = posts.find((post) => post.id === id)
    if(!post){
        response.status(404).json({message:"post doesn't exist"})
    }else{
        // let singlepost = posts.filter((post) => post.id === id)
        // response.status(200).json(post)
        post.title = req.body.title;
        // const newPosts = [...posts,post]

    return res.status(200).json(posts)

    }
});


// delete request
router.delete('/:id',(req,res)=>{
    const id = parseInt(req.params.id)
    const post = posts.find((post) => post.id === id)
    if(!post){
        response.status(404).json({message:"post doesn't exist"})
    }else{
        posts = posts.filter((post)=>post.id !== id);

        return res.status(200).json(posts)

    }
});

export default router; 