const express = require("express");
const app = express();
const port = 5000;

app.get('/api/product',(req,res)=>{
const product=[
    {'id':1,"title":"demo"},
    {'id':2,"title":"demo2"},

];
res.json(product);


})
app.listen(port,()=>console.log('running at http://localhost:${port}'));
