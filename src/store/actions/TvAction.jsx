export { removeTv } from "../reducers/TvSlice";
import axios from "../../Utils/Axios";
import { loadTv } from "../reducers/TvSlice";

export const asyncLoadTV = (id) => async (dispatch, getState) => {
  try {
    const detail = await axios.get(`/tv/${id}`);
    const externalid = await axios.get(`/tv/${id}/external_ids`);
    const recommendations = await axios.get(`/tv/${id}/recommendations`);
    const similar = await axios.get(`/tv/${id}/similar`);
    const translations = await axios.get(`/tv/${id}/translations`);
    const videos = await axios.get(`/tv/${id}/videos`);
    const watchprovider = await axios.get(`/tv/${id}/watch/providers`);

    let the_Data = {
      details: detail.data,
      externalid: externalid.data,
      recommendations: recommendations.data.results,
      similar: similar.data.results,
      translations: translations.data.translations.map((t) => t.english_name),
      videos: videos.data.results.find((tv) => tv.type === "Trailer"),
      watchprovider: watchprovider.data.results.IN,
    };

    dispatch(loadTv(the_Data));
    console.log(the_Data);
  } catch (error) {
    console.log(error);
  }
};
