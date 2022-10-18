const express=require('express')

const app=express()

const port=3000



app.get('/hackerspace/:name',(req,res)=>{
    console.log(req.params)
    res.send('<h1>Fullstack ${req.params.name}</h1>')}
    )






app.listen(port,(err)=>
err ? console.log(err) :
console.log('server is running on port ${port}...')
)
