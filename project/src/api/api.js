import axios from 'axios';

const BASE_URL = "www.themealdb.com/api/json/v1/1";

export const getMealByFirstLetter = async (letter) =>{
    try{
        const response = await axios.get(`https://${BASE_URL}/search.php?f=${letter}`);
        return response.data;
    }
    catch(error){
        console.error("Error fetching meal data:", error);
        return [];
    }
}
