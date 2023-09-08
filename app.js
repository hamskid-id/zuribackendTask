const express = require('express')
const app = express();
app.use(express.json());
app.get('/api',(req,res)=>{
    const{
        slack_name,
        track
    }=req.query;
    if(!req.query){
        res.send("<h1>hey there! You've just tested the route but no query params!</h1>");
    }
    const FullDays =[
        "Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"
    ]
    const newResponse ={
        "slack_name":slack_name,
        "current_day":FullDays[new Date().getDay()],
        "utc_time":new Date().toISOString(),
        "track":track,
        "github_file_url":"https://github.com/hamskid-id/zuribackendTask/blob/main/app.js",
        "github_repo_url":"https://github.com/hamskid-id/zuribackendTask",
        "status_code":res.status
    }
    res.status(200).json(newResponse);
})
app.get('/',(req,res)=>{
    res.send('<h1>Hello wolrd</h1>');
})

app.listen(500,()=>console.log("server is lsiteneing on localHost 5000..."))