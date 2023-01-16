import axios from "axios";

const spotifyApi = axios.create({
  baseURL: "http://localhost:3000",
});

export default spotifyApi;
