const app = require("./index");
const connect = require("./configs/db");

app.listen(3333, async function(){

    try {
        await  connect();
        console.log("listnig on port 3333");
    } catch (err) {
        console.error(err.message);
    }
  
})