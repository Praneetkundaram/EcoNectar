const express =require('express')
const app = express()
const PORT = process.env.PORT || 4000;
const db = require('./config/db')
app.use(express.json()); 
db();
app.use("/user",require('./routes/UserRoute'))
app.get("/",(req,res)=>{
    res.send("API is working")
})
app.listen(PORT,()=>{
    console.log('server is on ' +PORT)
})



