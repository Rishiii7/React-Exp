const http = require("http");
const { PORT } = require('./config');
const fs = require("fs");
const path = require("path");

const server = http.createServer( (req, res) => {
    // handle your request
    console.log(__dirname);
    fs.readFile(path.resolve(__dirname, 'public', 'index.html'), (err, data) => {
        res.setHeader('Content-Type', 'text/html');
        if( err ) {
            res.writeHead(500);
            return res.end('some error occurred')
        }
        res.writeHead(200);
        return res.end();
    });
});

server.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
})