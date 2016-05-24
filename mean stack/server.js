var express=require("express");
var app=express();
var bodyParser=require("body-parser");
var mongoose=require("mongoose");

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(express.static(__dirname+"/public"));

mongoose.connect("mongodb://localhost/person_list");

var personSchema=new mongoose.Schema({
         name:String,
         age:Number
});

var persons=mongoose.model("persons",personSchema);

app.post("/matchPerson",function(req,res){
        res.setHeader("content-type","application/json");
        persons.find({name:req.body.name},function(err,data){
              if(err)
                console.log(err);
                else {
                   res.json(data);

                }
        })
});
app.listen(1332,function(){
   console.log("server started...");
});
