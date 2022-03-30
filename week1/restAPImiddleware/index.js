// problem -1;

const express = require("express");
const app = express();

app.use(allBooks);

app.get("/books", (req,res)=>{
    return res.send("fetching all books")
});

function allBooks(req,res,next){
    console.log("getting books")
    next();
}


// problem 2


// app.get("/books", singleBook("GameOfThrones"), (req,res)=>{
//     return res.send({"book":res.name});
// });

// function singleBook(book_name){
//    return function book(req,res,next){
//        if(book_name === "GameOfThrones"){
//            res.name = book_name;
//            return next();
//        }
//        return res.send("not allowed");
//    }
// }

app.listen(2222,()=>{
    console.log("listnig port 2222");
});

// -----------------------------------------problem 2
