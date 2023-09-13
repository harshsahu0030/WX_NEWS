import axios from "axios";

export const getNewsReport = (category) => async (dispatch) => {
  try {
    dispatch({
      type: "GetNewsRequest",
    });

    let link = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=e6f1ac3925014485a49d0837af2ac3a0`;

    const { data } = await axios.get(link);

    dispatch({
      type: "GetNewsSuccess",
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: "GetNewsFailure",
      patload: error.response.data.message,
    });
  }
};
