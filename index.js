const express = require('express');
const app = express();

const { join } = require("path");

app.use(express.json())
app.use(express.static(__dirname));



//METHOD GET
app.get('/', (req, res) => {
    res.status(200).sendFile(__dirname + "/index.html")
})

app.get('/propaganda', (req, res) => {
    
    res.status(200).sendFile(__dirname + "/propaganda.html")
})

app.get("/partiti", (req, res) => {
    res.status(200).sendFile(__dirname + "/pariti.html")
})

app.get("/centri", (req, res) => {
    res.status(200).sendFile(__dirname + "/centri.html")
})

app.get("/futuro_nel_lavoro", (req, res) => {
    res.status(200).sendFile(__dirname + "/job.html")
})


app.all("*", (req, res) =>  {
   res.status(404).send("Not found")
});

app.listen(3000, () => {
    console.log("Listen on port 3000")
})
