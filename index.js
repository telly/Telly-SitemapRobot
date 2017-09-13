var PSG = require("phantomjs-sitemap-generator");
var p = new PSG( 'https://telly.com', { verbose: true } );
p.crawl();
