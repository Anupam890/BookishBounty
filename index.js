const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const mongoose = require('mongoose');
const userRouter = require('./routes/userAuth');

dotenv.config();
const PORT = process.env.PORT;
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api/users', userRouter);


//database Connection
const mongodb = async() => {
    try {
        await mongoose.connect(process.env.MONGO_URI)
            .then(() => "connection established")
            .catch((error) => {
                console.log(error);
            })
    } catch (error) {
        console.log(error);
    }
}
mongodb()



app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});