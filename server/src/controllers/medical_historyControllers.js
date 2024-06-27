const { getAllMedicalHistory, addMedicalHistory, updateMedicalHistory, deleteMedicalHistory } = require("../service/SRUDService")

const getMedicalHistory = async (req, res) => {
    try {
        let result = await getAllMedicalHistory();
        return res.json(result);
    } catch (error) {
        console.error('Error fetching medical_history:', error);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
}
const createMedicalHistory = async (req, res) => {
    const medicalHistoryData = req.body;
    try {
        const medicalHistoryId = await addMedicalHistory(medicalHistoryData);
        return res.json({ medicalHistoryId });
    } catch (error) {
        console.error('Error adding medical_history:', error);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
}
const updateMedicalHistoryById = async (req, res) => {
    const medicalHistoryId = req.params.id;
    const medicalHistoryData = req.body;
    try {
        const rowsAffected = await updateMedicalHistory(medicalHistoryId, medicalHistoryData);
        return res.json({ message: 'Update successful' });
    } catch (error) {
        console.error('Error updating medical_history:', error);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
}
const deleteMedicalHistoryById = async (req, res) => {
    const medicalHistoryId = req.params.id;
    try {
        const rowsAffected = await deleteMedicalHistory(medicalHistoryId);
        if (rowsAffected > 0) {
            return res.json({ message: `medical_history with ID ${medicalHistoryId} deleted successfully` });
        } else {
            return res.status(404).json({ message: `medical_history with ID ${medicalHistoryId} not found` });
        }
    } catch (error) {
        console.error('Error deleting medical_history:', error);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
}

module.exports = {
    getMedicalHistory,
    createMedicalHistory,
    updateMedicalHistoryById,
    deleteMedicalHistoryById,
}