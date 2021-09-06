
import express from 'express';
const app = express();
const port = 5000;

// MIDDLEWARE
app.use(express.json());

// ROUTES
app.get('/', (req, res) => {
    res.send(`Welcome to the painting store`)
})

app.listen(port, () => {
    console.log(`Example app listen http://localhost:${port}`)
})