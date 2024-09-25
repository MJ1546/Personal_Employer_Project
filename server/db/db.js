require('dotenv').config()  
// const API_URL = "mongodb://127.0.0.1:27017/postdb";
const API_URL = "mongodb+srv://manjunath1546:<wewSeE@&*041>@cluster0.xxg8c.mongodb.net";
const { connect } = require('mongoose');

async function connectWithDB () {
    try {
        await connect(process.env.API_URL || API_URL);
        console.log("connected with DB")
    } catch (err) {
        console.log("not connect with db")
    }
}

module.exports = connectWithDB;
