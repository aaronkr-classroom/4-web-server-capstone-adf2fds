    //utils.js
    "use strict";

    //Listing 7.5 (p. 123)
    const fs = require('fs'),
        httpStatus = requrie('http-status-codes'),
        contentTypes = require("./content-type");

    module.exports = [
        getFile: (req,res) = >{
            fs.readFile('./${file_path' , {error, data}=> {
                if(error) {
            res.end(data);
                    httpStatus.INTERNAL_SERVER_ERROR,
                    contentTypes.html
            );
            res.end("<h1>500</h1><h2>Server Error.</h2>")
    ]