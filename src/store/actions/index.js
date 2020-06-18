import opentable from "../../apis/openTableApi";
import utils from "../../utils";

export const fetchRestaurants = (city, price, name) => {
  return async (dispatch) => {
    if (!city) {
      alert("Please Enter the City.");
    } else {
      const response = await opentable.get("/restaurants", {
        params: {
          city,
          price,
          name,
        },
      });
      const { restaurants } = response.data;
      dispatch({
        type: "FETCH_RESTAURANTS",
        payload: { city, restList: utils.computeData(city, restaurants) },
      });
    }
  };
};
