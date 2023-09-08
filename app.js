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
    const now = new Date();
    const year = now.getUTCFullYear();
    const month = String(now.getUTCMonth() + 1).padStart(2, '0');
    const day = String(now.getUTCDate()).padStart(2, '0');
    const hours = String(now.getUTCHours()).padStart(2, '0');
    const minutes = String(now.getUTCMinutes()).padStart(2, '0');
    const seconds = String(now.getUTCSeconds()).padStart(2, '0');
    const formattedUtcTime = `${year}-${month}-${day}T${hours}:${minutes}:${seconds}Z`;

    const newResponse ={
        "slack_name":slack_name,
        "current_day":FullDays[new Date().getDay()],
        "utc_time":formattedUtcTime,
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

app.listen(500,()=>console.log("server is lsiteneing on localHost 500..."))