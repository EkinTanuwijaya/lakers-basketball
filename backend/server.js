const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express()
app.use(cors())

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: '',
    database: "lakers"
})


app.get('/',(re,res)=>{
    return res.json("from backend");
})

app.get('/match',(req,res)=>{
    let startDate = req.query.startDate;
    let endDate = req.query.endDate;
    let whereQuery = "where True";
    if(startDate){
        whereQuery = " and m.`date` between '" +startDate + "' AND '" + endDate + "'";
    }
    // return res.json(whereQuery)
    const sql = "SELECT cast(`date` as date) as date, t.team_name as homename, homescore, awayscore, te.team_name as awayname \
    FROM `match` m join team t on m.home = t.id join team te on m.away = te.id " +whereQuery
    db.query(sql,(err,data)=>{
        if(err) return res.json(err)
        return res.json(data)
    })
})
app.get('/matchplayed',(req,res)=>{
    let startDate = req.query.startDate;
    let endDate = req.query.endDate;
    let whereQuery = "where True";
    if(startDate){
        whereQuery = " and m.`date` between '" +startDate + "' AND '" + endDate + "'";
    }
    // return res.json(whereQuery)
    const sql = "SELECT count(*) as count \
    FROM `match` m join team t on m.home = t.id join team te on m.away = te.id " +whereQuery
    db.query(sql,(err,data)=>{
        if(err) return res.json(err)
        return res.json(data)
    })
})
app.get('/player',(req,res)=>{
    const sql = "SELECT * FROM `player` p join position po on p.position = po.positionID"
    db.query(sql,(err,data)=>{
        if(err) return res.json(err)
        return res.json(data)
    })
})

app.listen(8081, ()=>{
    console.log("Server is running on port 8081")
})