import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "./reducers/MovieSlice";
import tvReducer from "./reducers/TvSlice";
import peopleReducer from "./reducers/PeopleSlice";

const store = configureStore({
  reducer: {
    movie: movieReducer,
    tv: tvReducer,
    people: peopleReducer,
  },
});

export default store;
