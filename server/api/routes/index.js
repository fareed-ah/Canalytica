const express = require('express')
const app = express()
const {spawn} = require('child_process');

// Function to convert an Uint8Array to a string
var uint8arrayToString = function(data){
    return String.fromCharCode.apply(null, data);
};

//Root
app.get('/', (req,res) =>{
    //get content for root home page
    res.send("Canalytica home page")
})

//Root
app.get('/sentiment/:hashtag', (req,res) =>{
    /*
        TODO 
        Return list of tweets with the hastag
        With data associated to sentiment analysis on each tweet
    */
   var dataToSend = "";
   // spawn new child process to call the python script
   console.log(req.params.hashtag)
   const python = spawn('python3', ['../twitterAPI.py', req.params.hashtag]);
   // collect data from script
   python.stdout.on('data',(data) => {
    console.log('Pipe data from python script ...');
    console.log(uint8arrayToString(data));
    dataToSend += data.toString();
   });
   // in close event we are sure that stream from child process is closed
   python.on('close', (code) => {
   console.log(`child process close all stdio with code ${code}`);
   // send data to browser
   res.send(dataToSend)
   });
})

app.listen(5000, () => console.log("Server listening on port 5000"))