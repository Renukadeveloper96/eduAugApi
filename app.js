var express = require('express');
const app = express();
const port =  process.env.PORT||9000;
const mongo = require('mongodb');
const MongoClient = mongo.MongoClient;
//const mongourl = "mongodb://localhost:27017"
const mongourl = "mongodb+srv://edureka123:1234@cluster0.nbutl.mongodb.net/eduaug?retryWrites=true&w=majority"

var db;

//get
app.get('/',(req,res) => {
    res.send("Welcome to Node Api1")
})

//category
app.get('/location',(req,res) =>{
    db.collection('location').find().toArray((err,result)=>{
        if(err) throw err;
        res.send(result)
    })
})

app.get('/cuisine',(req,res) =>{
    db.collection('cuisine').find().toArray((err,result)=>{
        if(err) throw err;
        res.send(result)
    })
})

MongoClient.connect(mongourl, (err,client) => {
    if(err) console.log("Error While Connecting");
    db = client.db('eduaug');
    app.listen(port,()=>{
        console.log(`listening on port no ${port}`)
    });
})