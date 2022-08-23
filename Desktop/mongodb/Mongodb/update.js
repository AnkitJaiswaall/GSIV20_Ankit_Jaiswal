const dbConnect=require('./mongodb')

const updatadata=async()=>{
    const data=await dbConnect();
    const result=await data.update(
        {name:"iphone"}, {$set:{name:"youphone"}}
        )
    console.log(data)

}

updatadata()