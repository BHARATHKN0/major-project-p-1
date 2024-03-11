import mongoose from "mongoose";


const Connection = async (username, password) =>{
    const URL = `mongodb+srv://${username}:${password}@reva-users.fza3yau.mongodb.net/`;

    try {
        // await mongoose.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true});
        await mongoose.connect(URL)
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting with the database', error);
    }
}

export default Connection;