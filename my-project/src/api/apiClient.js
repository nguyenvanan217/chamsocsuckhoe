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
        console.error("Error fetching user profiles data:", error);
        throw error;
    }
}
export const updateUserProfiles = async (id, userProfilesData) => {
    try {
        const response = await axios.put(`${API_BASE_URL}/user_profiles/${id}`, userProfilesData);
        return response.data;
    } catch (error) {
        console.error("Error fetching user profiles data:", error);
        throw error;
    }
}



export const fetchMedicalHistoryByUserId = async (user_id) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/medical_history/${user_id}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching medical history data:", error);
        throw error;
    }
}

export const fetchMedicalHistoryById = async (id) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/medical_history/id/${id}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching medical history data:", error);
        throw error;
    }
}


export const addMedicalHistory = async (medicalHistoryData) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/medical_history`, medicalHistoryData);
        return response.data;
    } catch (error) {
        console.error("Error fetching medical history data:", error);
        throw error;
    }
}

export const updateMedicalHistory = async (id, medicalHistoryData) => {
    try {
        const response = await axios.put(`${API_BASE_URL}/medical_history/${id}`, medicalHistoryData);
        return response.data;
    } catch (error) {
        console.error("Error fetching medical history data:", error);
        throw error;
    }
}
export const deleteMedicalHistory = async (id) => {
    try {
        const response = await axios.delete(`${API_BASE_URL}/medical_history/${id}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching medical history data:", error);
        throw error;
    }
}


export const fetchVaccinationHistoryByUserId = async (user_id) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/vaccination_history/${user_id}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching medical history data:", error);
        throw error;
    }
}

export const fetchVaccinationHistoryById = async (id) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/vaccination_history/id/${id}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching medical history data:", error);
        throw error;
    }
}

export const addVaccinationHistory = async (vaccinationHistoryData) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/vaccination_history`, vaccinationHistoryData);
        return response.data;
    } catch (error) {
        console.error("Error fetching medical history data:", error);
        throw error;
    }
}

export const updateVaccinationHistory = async (id, vaccinationHistoryData) => {
    try {
        const response = await axios.put(`${API_BASE_URL}/vaccination_history/${id}`, vaccinationHistoryData);
        return response.data;
    } catch (error) {
        console.error("Error fetching medical history data:", error);
        throw error;
    }
}
export const deleteVaccinationHistory = async (id) => {
    try {
        const response = await axios.delete(`${API_BASE_URL}/vaccination_history/${id}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching medical history data:", error);
        throw error;
    }
}

export const fetchChildCheckupHistoryByUserId = async (user_id) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/child_checkup_history/${user_id}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching child_checkup_history data:", error);
        throw error;
    }
}

export const fetchChildCheckupHistoryById = async (id) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/child_checkup_history/id/${id}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching child_checkup_history data:", error);
        throw error;
    }
}

export const addChildCheckupHistory = async (childCheckupHistoryData) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/child_checkup_history`, childCheckupHistoryData);
        return response.data;
    } catch (error) {
        console.error("Error fetching child_checkup_history data:", error);
        throw error;
    }
}

export const updateChildCheckupHistory = async (id, childCheckupHistoryData) => {
    try {
        const response = await axios.put(`${API_BASE_URL}/child_checkup_history/${id}`, childCheckupHistoryData);
        return response.data;
    } catch (error) {
        console.error("Error fetching child_checkup_history data:", error);
        throw error;
    }
}
export const deleteChildCheckupHistory = async (id) => {
    try {
        const response = await axios.delete(`${API_BASE_URL}/child_checkup_history/${id}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching child_checkup_history data:", error);
        throw error;
    }
}
