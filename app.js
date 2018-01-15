var express=require("express")
var bodtPerser=require("body-parser")
var   fs=require("fs")


var app = express();
var urlencodedParser = bodtPerser.urlencoded({ extended: false })

app.set("view engine","ejs");
app.post("/create",urlencodedParser,function(req,res){
    var data=fs.readFileSync("message.txt","utf8")

    data=JSON.parse(data)

    data[data.length]=req.body

    fs.writeFileSync("message.txt",JSON.stringify(data))
    res.render("index.ejs",{data:data})
})

app.get("/",urlencodedParser,function(req,res){
    var data=fs.readFileSync("message.txt","utf8")
    data=JSON.parse(data)
        
    res.render("index.ejs",{data:data})
})

app.listen(3000)