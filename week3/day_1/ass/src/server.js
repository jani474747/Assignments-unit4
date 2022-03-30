const app = require("./index");

const connect = require("./configs/db");

app.listen(4000, async()=>{
    try {
        await connect();
        console.log("listnign on 4000");
        
    } catch (err) {
       console.error(err.message);
    }
})

