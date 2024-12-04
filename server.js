const express = require('express')

const app = express()

app.get('/', (req, res) => {
    res.send({message:"This isn't a test json, or maybe it is."})
})

app.listen(5000, () => console.log(`server is running on port 8000`))