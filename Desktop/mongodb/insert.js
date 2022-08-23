const dbConnect=require('./mongodb');

const insert=async()=>{
    const db=await dbConnect();
    const result= await db.insert([{
        name:"iphone12",brand:"Apple",price:90000,category:"mobile"
    },
    {
        name:"iphone13",brand:"Apple",price:120000,category:"mobile"
    }
])

    console.log(result)
}

insert()