
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// Set view engine to EJS
app.set('view engine', 'ejs');

// Use body-parser middleware to parse form data
app.use(bodyParser.urlencoded({ extended: true }));

// In-memory storage for to-do items
let todoItems = [];

app.get('/', (req, res) => {
    res.render('index', { todoItems });
});

app.post('/add', (req, res) => {
    const newItem = req.body.newItem;
    if (newItem) {
        todoItems.push(newItem);
    }
    res.redirect('/');
});

app.post('/delete/:index', (req, res) => {
    const index = parseInt(req.params.index, 10);
    if (index >= 0 && index < todoItems.length) {
        todoItems.splice(index, 1);
    }
    res.redirect('/');
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
