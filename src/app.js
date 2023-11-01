const express=require('express')
const app=express();
require('./db/conn')
const athletesRouter=require('./routers/atheltesRouter')
const port=process.env.PORT || 3000;
const cors=require('cors')

app.use(express.json())
app.use(athletesRouter)
app.use(cors())



app.listen(port,()=>{
    console.log(`Port is running successfully in ${port}`)
})