// import express from 'express'
// import React from 'react'
// import ReactDOMServer from 'react-dom/server'
// import fs from 'fs'
// import path from 'path'
// import { StaticRouter } from 'react-router-dom';
// import App from './src/App'

// const app = express();
// const router = express.Router()
// app.use(express.static('build'));

// app.get('*', (req, res) => {


//     const context = {}
//     const reactApp = ReactDOMServer.renderToString(
//         <StaticRouter location={req.url} context={context}>
//           <App />
//         </StaticRouter>
//       );
//     const indexFile = path.resolve('./build/index.html')
//     fs.readFile(indexFile, 'utf8', (err, data) => {
//         if (err) {
//             console.log("error")
//             return res.status(500).send('opps', 'error')
//         }
//         return res.send(data.replace(`<div id="root"></div>`, `<div id="root">${reactApp}</div>`))

//     })

// });
// router.use(express.static(path.resolve(__dirname, `..`, `build`)))
// app.use(router)
// const port = 5000;
// app.listen(port, () => {
//     console.log(`Server is running at http://localhost:${port}`);
// });


const express = require("express");
const path = require("path");
const fs = require("fs");
const data = require('./src/data.json')
const PORT = process.env.PORT || 5000;

const app = express();

app.get("/", (req, res) => {
    const filePath = path.resolve(__dirname, "./build", "index.html");
    fs.readFile(filePath, "utf8", (err, data) => {
        if (err) {
            return console.log(err);
        }

        data = data
            .replace(/__title__/g, "Home Page")
            .replace(/__description__/g, "Home page description.");

        res.send(data)
    });
});

app.get("/product/details/:id", (req, res) => {

    const { id } = req.params;
    const product = data.data.find((prod) => prod.id === parseInt(id));

    if (!product) {
        return res.status(404).send("Product not found");
    }
    const filePath = path.resolve(__dirname, "./build", "index.html");
    fs.readFile(filePath, "utf8", (err, data) => {
        if (err) {
            return console.log(err);
        }

        data = data
        .replace(/og:title/g, `${product.title}`)
        .replace(/og:description/g, `${product.description}`)
        .replace(/og:image/g, `${product.image}`)
        .replace(/og:url/g, `http://localhost:5000/product/details/${product.id}`)
     


        res.send(data)
    });
});

app.use(express.static(path.resolve(__dirname, "./build")))

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`)
})
