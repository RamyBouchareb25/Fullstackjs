const mongoose = require('mongoose'),
express = require('express'),
app = express(),
port = 3000;
app.get('/',(req,res) => {
    res.send(`<h1>welcome<h1>`)
})
const db = "mongodb+srv://Ramy:qwerty2509@firstcluster.ea5rw.mongodb.net/FirstCluster?retryWrites=true&w=majority";
mongoose.connect(db).then(() => {
    console.log("connected");
}).catch((err) => {
    console.error(err)
});
app.listen(port, () => {
    console.log("server started at port " + port)
})