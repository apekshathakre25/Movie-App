export { removeMovie } from "../reducers/MovieSlice";
import axios from "../../Utils/Axios";
import { loadMovie } from "../reducers/MovieSlice";

export const asyncLoadMovie = (id) => async (dispatch, getState) => {
  try {
    const detail = await axios.get(`/movie/${id}`);
    const externalid = await axios.get(`/movie/${id}/external_ids`);
    const recommendations = await axios.get(`/movie/${id}/recommendations`);
    const similar = await axios.get(`/movie/${id}/similar`);
    const translations = await axios.get(`/movie/${id}/translations`);
    const videos = await axios.get(`/movie/${id}/videos`);
    const watchprovider = await axios.get(`/movie/${id}/watch/providers`);

    let the_Data = {
      details: detail.data,
      externalid: externalid.data,
      recommendations: recommendations.data.results,
      similar: similar.data.results,
      translations: translations.data.translations.map((t) => t.english_name),
      videos: videos.data.results.find((movie) => movie.type === "Trailer"),
      watchprovider: watchprovider.data.results.IN,
    };

    dispatch(loadMovie(the_Data));
    console.log(the_Data);
  } catch (error) {
    console.log(error);
  }
};
