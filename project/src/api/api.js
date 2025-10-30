import axios from "axios";

const BASE_URL = "https://www.themealdb.com/api/json/v1/1";

//function for fetching the data from the API by the first letter

export const getMealByFirstLetter = async (letter) => {
  try {
    const response = await axios.get(`${BASE_URL}/search.php?f=${letter}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching meal data:", error);
    return [];
  }
};

//function for fetching meal categories

export const getMealByCategory = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/categories.php`);
    return response.data;
  } catch (error) {
    console.error("Error fetching meal categories:", error);
    throw error;
  }
};

//function for fetching meal categories by selected category

export const getMealBySelectedCategory = async (category) => {
  try {
    const response = await axios.get(`${BASE_URL}/filter.php?c=${category}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching meals by category:", error);
    throw error;
  }
};
