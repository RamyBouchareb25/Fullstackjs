const mongoose = require('mongoose'),
express = require('express'),
app = express(),
//User = mongoose.model('user'),
port = 3000;
app.get('/',(req,res) => {
    res.send(`<h1>welcome<h1>`)
})
var livereload = require("livereload");
var connectLiveReload = require("connect-livereload");
const liveReloadServer = livereload.createServer();
liveReloadServer.server.once("connection", () => {
  setTimeout(() => {
    liveReloadServer.refresh("/");
  }, 100);
});
app.use(connectLiveReload());
require('dotenv').config()
mongoose.connect(process.env.URL).then(() => {
    console.log("connected");
}).catch((err) => {
    console.error(err)
});
app.listen(port, () => {
    console.log("server started at port " + port)
})
app.get('/firstname', (req,res) => {
    const name = req.params;
    res.send(name);
})