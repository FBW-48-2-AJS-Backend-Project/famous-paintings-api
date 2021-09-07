import express from 'express';
import mongoose from 'mongoose';
const app = express();
const port = 5000;
import paintingRouter from './routes/paintingRouter.js';
import createError from 'http-errors';


// MONGOOSE CONFIG
mongoose.connect(`mongodb+srv://aimhark:aimhark@cluster0.0cmhp.mongodb.net/paintings_db?retryWrites=true&w=majority`,
{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
})
.then(()=> console.log(`Connection to Database established`))
.catch((err) => console.log(`Unable to connect to the Database`))

// MIDDLEWARE
app.use(express.json());

// ROUTES
app.get('/', (req, res) => {
    res.send(`Welcome to the painting store`)
})

app.use('/paintings', paintingRouter)

app.listen(port, () => {
    console.log(`Example app listen http://localhost:${port}`)
})

app.use(function errorHandler(err, req, res, next) {
    res.status(err.status || 400).send({
      error: {
        message: err.message,
        status: err.status,
      },
    });
  });