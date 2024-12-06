import express from 'express';
import path from 'path'
const port = process.env.PORT || 8000
import posts from './routes/posts.js';
import logger from './middleware/logger.js';

const app = express()

// body parser middleware

app.use(express.json())
app.use(express.urlencoded({extended:false}));

// logger middleware
app.use(logger)
// setup static folder

// app.use(express.static(path.join(__dirname,'public')))

// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, 'public', 'index.html'))
// })


// // app.get('/about', (req, res) => {
// //     res.send("about")
// // })

// app.get('/about', (req, res) => {
//     res.sendFile(path.join(__dirname, 'public', 'about.html'))
// })


app.use('/api/posts',posts)



app.listen(port, () => console.log(`server is running on port ${port}`))