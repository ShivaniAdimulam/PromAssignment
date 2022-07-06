const express=require('express')
var bodyparser=require('body-parser')
const route=require('./router/route.js')
const app=express();

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}))

app.use('/',route)

app.listen(process.env.PORT || 3000 ,function(){
    console.log("express app running on port" + (process.env.PORT || 3000))
})