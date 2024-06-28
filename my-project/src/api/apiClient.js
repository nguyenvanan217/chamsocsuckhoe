import axios from 'axios';

const API_BASE_URL = 'http://localhost:8888/chamsocsuckhoe/';

export const fetchUserDatas = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/users`);
        return response.data;
    } catch (error) {
        console.error("Error fetching user data:", error);
        throw error;
    }
}

export const addUser = async (userData) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/users`, userData);
        return response.data;
    } catch (error) {
        console.error("Error adding user:", error);
        throw error;
    }
}

export const fetchUserProfilesByUserId = async (user_id) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/user_profiles/${user_id}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching user data:", error);
        throw error;
    }
}
export const updateUserProfiles = async (id, userProfilesData) => {
    try {
        const response = await axios.put(`${API_BASE_URL}/user_profiles/${id}`, userProfilesData);
        return response.data;
    } catch (error) {
        console.error("Error fetching user data:", error);
        throw error;
    }
}