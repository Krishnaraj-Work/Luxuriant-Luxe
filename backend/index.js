// import app from './server.js'
const express = require("express");
const fs = require("@cyclic.sh/s3fs/promises")(
	"cyclic-gleaming-flannel-shirt-fox-sa-east-1"
);
app = express();

app.all("/", (req, res) => {
    console.log("Just got a request!");
    async function run() {
		const json = JSON.parse(await fs.readFile("test/_read.json"));
        return json;
    }
    console.log(run());
    res.send("Yo!");
    
});
// app.listen(process.env.PORT || 3000, ()=>{
//     console.log('Server is listening on port 3000')
//     console.log(process.env.master_password)
// })
