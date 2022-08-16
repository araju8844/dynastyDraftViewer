const dotenv = require('dotenv').config();
const axios = require('axios')
// above line allows for .env file which will let us have environment variables

const url = "https://api.sleeper.app/v1/draft/" + process.env.DRAFT_ID + "/picks";

const getResponse = async () => {
    const data  = await axios(url);
    console.log(data["data"][data["data"].length - 1])
}

getResponse();
// axios.get(url).then(resp => {
//     console.log(resp.data);
// });
