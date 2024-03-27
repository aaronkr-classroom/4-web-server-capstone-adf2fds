// main.js
"use strict";

// Listing 7.3 (p. 121)
const port = 3000,
    http = require('http'),
    httpStatus = require('http-status-codes'),
    fs = require('fs',
    router = require('./router',),
    contentTypes = require('./content-types'),
    utils = require('./utils');

    //GET 라우트
    router.get("/", (req,res) => {
        res.writeHead(httpSatus.OK,contenTypes.html);
        utils.getFile("views/index.html", res);
    });
    router.get("/", (req,res) => {
        res.writeHead(httpSatus.OK,contenTypes.html);
        utils.getFile("views/index.html", res);
    });
    router.get("/contact", (req,res) => {
        res.writeHead(httpSatus.OK,contenTypes.html);
        utils.getFile("views/index.html", res);
    });
    //POST 라우트
    router.get("/contact", (req,res) => {
        res.writeHead(httpSatus.OK,contenTypes.html);
        utils.getFile("views/index.html", res);
    });
    //CSS 애셋 라우트
    router.get("/bootstrap.css", (req,res) => {
        res.writeHead(httpSatus.OK,contenTypes.css);
        utils.getFile("public/css/bootstrap.css", res);
    });
    router.get("/confetti_cuisine.css", (req,res) => {
        res.writeHead(httpSatus.OK,contenTypes.css);
        utils.getFile("public/css/confetti_cuisine.css", res);
    });
    //JS 애셋 라우트
    //JPG 애셋 라우트
    router.get("/product.jpg", (req,res) => {
        res.writeHead(httpSatus.OK,contenTypes.jpg);
        utils.getFile("public/img/product.jpg", res);
    });
    router.get("/product.jpg", (req,res) => {
        res.writeHead(httpSatus.OK,contenTypes.jpg);
        utils.getFile("public/img/product.jpg", res);
    });
    //PNG 애셋 라우트
    router.get("/product.jpg", (req,res) => {
        res.writeHead(httpSatus.OK,contenTypes.jpg);
        utils.getFile("public/img/product.jpg", res);
    });
    router.get("/product.jpg", (req,res) => {
        res.writeHead(httpSatus.OK,contenTypes.jpg);
        utils.getFile("public/img/product.jpg", res);
    });
    http.createServer (rpiter.handle).listen(port);
    console.log('Server at: http://localhost:$')
