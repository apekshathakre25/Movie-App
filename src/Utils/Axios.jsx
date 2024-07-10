import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNTlkODVmNDY1NzBlOTY4ZjdiZWJkNjA3ZDdhMTczNCIsIm5iZiI6MTcxOTgwNDk5MC43Njk1MzYsInN1YiI6IjY2ODIyMWRjMmQ2ODg4NmUyOWVmNWE0MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Si1tZcrmf9xQB9aJ4mx-ohZfb9e7D5IunVl1bzEZ-yE",
  },
});

export default instance;
