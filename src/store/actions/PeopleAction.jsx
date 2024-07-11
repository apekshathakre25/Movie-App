export { removePeople } from "../reducers/PeopleSlice";
import axios from "../../Utils/Axios";
import { loadPeople } from "../reducers/PeopleSlice";

export const asyncLoadPeople = (id) => async (dispatch, getState) => {
  try {
    const detail = await axios.get(`/person/${id}`);
    const externalid = await axios.get(`/person/${id}/external_ids`);
    const combinedCredits = await axios.get(`/person/${id}/combined_credits`);
    const tvCredits = await axios.get(`/person/${id}/tv_credits`);
    const movieCredits = await axios.get(`/person/${id}/movie_credits`);

    let the_Data = {
      details: detail.data,
      externalid: externalid.data,
      combinedCredits: combinedCredits.data,
      tvCredits: tvCredits.data,
      movieCredits: movieCredits.data,
    };

    dispatch(loadPeople(the_Data));
    console.log(the_Data);
  } catch (error) {
    console.log(error);
  }
};
