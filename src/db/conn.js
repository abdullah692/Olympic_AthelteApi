
const mongoose=require('mongoose')

mongoose.connect("mongodb+srv://abdullahsidd:romanreigns12345@cluster0.6xbb7.mongodb.net/olympic?retryWrites=true&w=majority",{
    useNewUrlParser:true,
    useUnifiedTopology:true,
}).then(()=>{
console.log('Connection is built successfully')
}).catch((err)=>{
    console.log('Error Message',err)
})
