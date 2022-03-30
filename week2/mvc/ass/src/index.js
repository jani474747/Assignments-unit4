const express = require("express");

const connect = require("./configs/db");

const app = express();
app.use(express.json());

const userController = require("./controllers/users_controller");
const studentController = require("./controllers/students_controllers");
const batchController = require("./controllers/batch_controller");
const evaluationController = require("./controllers/evaluations_controller");
const submisionController = require("./controllers/submisions_controller");



app.use("/users",userController);
app.use("/students",studentController);
app.use("/batchs",batchController);
app.use("/evaluations",evaluationController);
app.use("/submisions",submisionController);


app.listen(5555, async()=>{
    try {
        await connect();
        console.log("listening on port 5555");
    } catch (err) {
        console.log(err);
    }
})