import axios from "axios";

const imdbapi = axios.create({
  baseURL: "https://imdb-api.com/",
});

export { imdbapi };
