import axios from "axios";

export const signUp = async (data) => {
    console.log(data);
    
    try {
        const response = await axios.post(`threehorses.pythonanywhere.com/api/signup/`,
            data,);
        console.log("responsed", response.data);
        return response.data;
    } catch (error) {
        console.error("API Error:", error.response || error.message);
        throw error.response ? error.response.data : { message: "Network error" };
    }
}

export const signin = async (data) => {
    console.log(data);
    
    try {
        const response = await axios.post(`threehorses.pythonanywhere.com/api/signin/`,
            data,);
        console.log("responsed", response.data);
        return response.data;
    } catch (error) {
        console.error("API Error:", error.response || error.message);
        throw error.response ? error.response.data : { message: "Network error" };
    }
}