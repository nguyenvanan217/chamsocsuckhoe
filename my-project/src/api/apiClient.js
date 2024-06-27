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