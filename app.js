const express = require('express');
const https = require('https');
const fs = require('fs');
const app = express();

const port = 5000;

app.use(express.static('public'));

app.set('views', './views');
app.set('view engine', 'ejs');

app.get('', (req, res) => {
    res.render('index');
});

const options = {
    key: fs.readFileSync('/SSL/whirlcraft_xyz/private-key.pem'),
    cert: fs.readFileSync('/SSL/whirlcraft_xyz/whirlcraft_xyz.crt'),
    ca: fs.readFileSync('/SSL/whirlcraft_xyz/whirlcraft_xyz.ca-bundle')
};

const server = https.createServer(options, app);

server.listen(port, () => {
    console.info(`App listening on port ${port}`);
});