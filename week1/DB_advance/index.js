const express = require("express");
const mongoose = require("mongoose")

const app = express();

// Connect MongoDB
const connectDB = () => {
    //mongodb url
 return mongoose.connect("mongodb://127.0.0.1:27017/movie")
//  local url
//  mongodb://127.0.0.1:27017/movie
//  online mongodb atlas url
//  mongodb+srv://atin_sahu:Shanvi5ahu@cluster0.thnki.mongodb.net/?retryWrites=true&w=majority

}

// create Schema - basically a structure of our document
const moviesSchema = mongoose.Schema({
    id : {type :Number, required: false},
    movie_name : String,
    movie_genre : String,
    production_year : Number,
    budget : String,
    
})

// Model
// users - user
const movie = mongoose.model("movie", moviesSchema)

//  db.user
app.get("/movie", async (req,res) => {
    const movieData = await movie.find({},{movie_name:1, production_year: 1, _id:0}).limit(5).lean().exec();
    console.log(movieData)
    return res.send(movieData)
})

app.listen(4444, async() => {
    try{
        await connectDB();
        console.log("listening at 4444")
    }
    catch(err){
        console.log(err)
    } 
})