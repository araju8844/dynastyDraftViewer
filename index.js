const dotenv = require('dotenv').config();
const fetch = require("node-fetch");
const axios = require('axios')
// above line allows for .env file which will let us have environment variables

const url = "https://api.sleeper.app/v1/draft/" + process.env.DRAFT_ID + "/picks";
const youtubeUrl = "https://www.googleapis.com/youtube/v3/search?key=" + process.env.YOUTUBE_API_KEY + "&type=video&part=snippet&q=";
let firstName = "None";
let lastName = "None";
const getResponse = async () => {
    const data  = await axios(url);
    newfirstName = data["data"][data["data"].length - 1]["metadata"]["first_name"];
    newlastName = data["data"][data["data"].length - 1]["metadata"]["last_name"];
    if (firstName == newfirstName && lastName == newlastName) {
        console.log("Same name");
    }
    else {
        firstName = newfirstName;
        lastName = newlastName;
        let inputYTUrl = youtubeUrl + firstName + "%20" + lastName + "%20" + "Highlights";
        const response = await fetch(inputYTUrl);
        const ytData = await response.json();
        console.log("https://www.youtube.com/watch?v=" + ytData["items"][0]["id"]["videoId"]);
    }
}
// what we will do from here is add an if case to compare player ids
// if they are the same (no new pick) you stay the same, otherwise you print a new Youtube URLy
setInterval(getResponse, 2000);
// axios.get(url).then(resp => {
//     console.log(resp.data);
// });
