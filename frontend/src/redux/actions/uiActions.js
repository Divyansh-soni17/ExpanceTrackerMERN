import axios from "axios";
import {
  GET_CATEGORIES_START,
  GET_CATEGORIES_SUCCESS,
  GET_CATEGORIES_FAIL,
  ADD_CATEGORIES_START,
  ADD_CATEGORIES_SUCCESS,
  ADD_CATEGORIES_FAIL,
} from "../constants/uiConstants";

export const getCategoriesAsync = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: GET_CATEGORIES_START });
      const { data } = await axios.get("/api/categories");
      dispatch({ type: GET_CATEGORIES_SUCCESS, payload: data });
    } catch (error) {
      dispatch({
        type: GET_CATEGORIES_FAIL,
        payload: error.response.data.message,
      });
    }
  };
};

export const addCategoriesAsync = (categoryData) => {
  return async (dispatch) => {
    const config = {
      headers: { "Content-Type": "application/json" },
    };
    try {
      dispatch({ type: ADD_CATEGORIES_START });

      const { data } = await axios.post(
        "/api/categories/add",
        {
          name: categoryData,
        },
        config
      );
      dispatch({ type: ADD_CATEGORIES_SUCCESS, payload: data });
    } catch (error) {
      dispatch({
        type: ADD_CATEGORIES_FAIL,
        payload: error.response.data.message,
      });
    }
  };
};
