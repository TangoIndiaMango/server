const express = require('express');
const app = express();
const port = process.env.PORT || 8000
require("./DBConnection/conn");
const userRoute = require("./Routers/userRoute")

const cors = require('cors');

app.use(cors({'access-control-allow-origin': '*'}))
app.use(cors({
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
        origin: "http://localhost:3000",
        origin: "*"
    }
}))

app.options('/user', function(req, res, next){
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'POST');
    res.header("Access-Control-Allow-Headers", "accept, content-type");
    res.header("Access-Control-Max-Age", "1728000");
    return res.sendStatus(200);
 });

app.use(express.json())
app.use(userRoute)


app.listen(port, () => {
    console.log(`SERVER IS RUNNIG.........${port}`)
})
