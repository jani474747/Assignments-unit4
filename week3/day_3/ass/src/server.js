
const app = require("./index");
const connect = require("./configs/db");

app.listen(4444, async()=>{
    try {
        await connect();
        console.log("listnig on 4444");
    } catch (err) {
        console.error(err.message);
    }
})