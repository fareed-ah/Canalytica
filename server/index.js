const express = require("express");
const app = express();
const { spawn } = require("child_process");

// Add headers
app.use(function (req, res, next) {
  // Website you wish to allow to connect
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");

  // Request methods you wish to allow
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );

  // Request headers you wish to allow
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader("Access-Control-Allow-Credentials", true);

  // Pass to next layer of middleware
  next();
});

// Function to convert an Uint8Array to a string
var uint8arrayToString = function (data) {
  return String.fromCharCode.apply(null, data);
};

//Root
app.get("/", (req, res) => {
  //get content for root home page
  res.send("{'appname':'Canalytica home page'}");
});

//Search tweets based on hashtag
app.get("/sentiment/:hashtag", (req, res) => {
  (async () => {
    try {
      const output = await getTweets(req, res);
      logOutput("main")(output);
      res.send(output);
      //process.exit(0);
    } catch (e) {
      console.error("Error during script execution ", e.stack);
      // process.exit(1);
    }
  })();
});

const logOutput = (name) => (data) => console.log(`[${name}] ${data}`);

function getTweets(req, res) {
  return new Promise((resolve, reject) => {
    // spawn new child process to call the python script
    console.log(req.params.hashtag);
    const process = spawn("python3", ["./twitterAPI.py", req.params.hashtag]);

    var dataToSend = "";
    // collect data from script
    process.stdout.on("data", (data) => {
      dataToSend += data.toString();
      logOutput("stdout")(data);
    });

    process.stderr.on("data", (data) => {
      logOutput("stderr")(data);
    });
    process.on("exit", (code, signal) => {
      logOutput("exit")(`${code} (${signal})`);
      if (code !== 0) {
        reject(new Error(err.join("\n")));
        return;
      }
      try {
        resolve(dataToSend);
      } catch (e) {
        reject(e);
      }
    });
  });
}
app.listen(5000, () => console.log("Server listening on port 5000"));
