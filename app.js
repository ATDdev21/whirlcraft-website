const express = require('express')
const app = express()
const port = 5000

app.use(express.static('public'));

app.set('views', './views');
app.set('view engine', 'ejs');

app.get('', (req, res) => {
    res.render('index')
})

app.listen(port, () => console.info(`App listening on port ${port}`))