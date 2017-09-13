// Crawling process
var PSG = require("phantomjs-sitemap-generator");
var p = new PSG( 'https://telly.com', { verbose: true } );
var fs = require('fs');

// Serving sitemap
const express = require('express')
const app = express()
app.use("/sitemap.xml", express.static('sitemap.xml'));

app.listen(80, function () {
    console.log('Example app listening on port 80!')
});

// Trigers crawling start
app.get("/refresh-sitemap", function (req, res) {
    if (fs.existsSync('sitemap.xml')) {
        fs.unlink('sitemap.xml');
    }
    p.crawl();
    res.send("Crawling started");
});

// Retrieve crawling status
app.get("/crawling-status", function (req, res) {
    if (fs.existsSync('sitemap.xml')) {
        res.send('Idle');
    } else {
        res.send('Running');
    }
})

