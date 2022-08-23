const dbConnect=require('./mongodb')

const deleteData=async()=>{
    const data=await dbConnect();
    result=await data.deleteOne(
        {name:"youphone"}
    )
console.log(result)
}

deleteData()