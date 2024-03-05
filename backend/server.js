const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express()
app.use(cors())

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: '',
    database: "mytutor"
})


app.get('/',(re,res)=>{
    return res.json("from backend");
})

app.get('/mytutor',(req,res)=>{
    const sql = "Select * from categories"
    db.query(sql,(err,data)=>{
        if(err) return res.json(err)
        return res.json(data)
    })
})

app.listen(8081, ()=>{
    console.log("Server is running on port 8081")
})