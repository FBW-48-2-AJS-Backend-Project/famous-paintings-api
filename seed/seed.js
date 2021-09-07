import mongoose from 'mongoose';
import Painting from '../models/Painting.js';
import faker from 'faker';

(async function (){

    // CONNECTION TO DB
    mongoose.connect("mongodb+srv://aimhark:aimhark@cluster0.0cmhp.mongodb.net/paintings_db?retryWrites=true&w=majority",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: true,
        useCreateIndex: true,
    })
    .then(()=> console.log(`Connection to Database established`))
    .catch((err) => console.log(`Unable to establish connection to Database`))

    // CREATE 20 FAKE PAINTINGS
    const paintingsPromise = Array(20)
    .fill(null)
    .map(()=> {
        const paintingData = {
            title: faker.random.words(),
            artist: faker.random.word()+" "+faker.random.word(),
            year: faker.date.past(),
            price: faker.commerce.price(10,20),
            cover: faker.image.image(400, 400),
        };
        console.log(`Painting ${paintingData.title} from ${paintingData.artist} has been created`);

        const newPainting = new Painting(paintingData);
        return newPainting.save();
    })

    try{
        await Promise.all(paintingsPromise);
        console.log('-----------------------------------------');
        console.log(`All 20 fake paintings have been stored on the database`);
        console.log('-----------------------------------------');
    }
    catch(err){
        console.log(err);
    };

    // CLOSE CONNECTION TO DB
    mongoose.connection.close();

})();
