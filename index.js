
var express  = require('express');
var app =  express();
app.use(express.json())
app.use(express.urlencoded({
  extended: true
}))
//demo code
let list=[];

app.post('/',async(req,res,next) =>{
    let name = req.body.name;
    list.push(name);
    res.send(name);
})

app.get('/',async(req,res,next) =>{
    res.send(list);
})
app.get('/:name',async(req,res,next) =>{
    let name = req.params.name;
    let temp="new var";
    console.log(temp);
    res.send(list.find(e=>e==name));
})
app.delete('/:name',async(req,res,next) =>{
    res.send(list.pop());
})
app.get('/something',async(req,res)=>{
    res.send("app is live");
})

app.listen(8080, function (err) {
    console.log("server is running")
})
