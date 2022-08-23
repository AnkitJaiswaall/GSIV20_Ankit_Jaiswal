const express=require('express')
const dbConnect=require('./mongodb')
const mongodb=require('mongodb')


const app=express()

app.use(express.json())

app.get('/',async function(req,res){

    let data=await dbConnect()
    data=await data.find().toArray();

    res.send(data)
})

app.post('/' ,async function(req,res){
    let data=await dbConnect();
    let result=await data.insert(req.body)
    res.send(result)

})

//update by using name
// app.put('/',async function(req,res){
//     let data=await dbConnect();
//     let result=await data.updateOne(
//         {name:req.body.name},
//         {$set:req.body}
//         )

//         res.send("updated")
// })

//update by using param
app.put('/:name',async function(req,res){
    let data=await dbConnect();
    let result=await data.updateOne(
        {name:req.params.name},
        {$set:req.body}
        )

        res.send("updated")
})

app.delete('/:id',async function(req,res){
    let data=await dbConnect();
    let result= await data.deleteOne({_id:new mongodb.ObjectId(req.params.id)})
    res.send(result)
})

app.listen(3000)