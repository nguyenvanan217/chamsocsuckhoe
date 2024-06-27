const { getAllVaccinationHistory, addVaccinationHistory, updateVaccinationHistory, deleteVaccinationHistory } = require("../service/SRUDService")

const getVaccinationHistory = async (req, res) => {
    try {
        let result = await getAllVaccinationHistory();
        return res.json(result);
    } catch (error) {
        console.error('Error fetching vaccination_history:', error);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
}
const createVaccinationHistory = async (req, res) => {
    const vaccinationHistoryData = req.body;
    try {
        const vaccinationHistoryId = await addVaccinationHistory(vaccinationHistoryData);
        return res.json({ vaccinationHistoryId });
    } catch (error) {
        console.error('Error adding vaccination_history:', error);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
}
const updateVaccinationHistoryById = async (req, res) => {
    const vaccinationHistoryId = req.params.id;
    const vaccinationHistoryData = req.body;
    try {
        const rowsAffected = await updateVaccinationHistory(vaccinationHistoryId, vaccinationHistoryData);
        return res.json({ message: 'Update successful' });
    } catch (error) {
        console.error('Error updating vaccination_history:', error);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
}
const deleteVaccinationHistoryById = async (req, res) => {
    const vaccinationHistoryId = req.params.id;
    try {
        const rowsAffected = await deleteVaccinationHistory(vaccinationHistoryId);
        if (rowsAffected > 0) {
            return res.json({ message: `vaccination_history with ID ${vaccinationHistoryId} deleted successfully` });
        } else {
            return res.status(404).json({ message: `vaccination_history with ID ${vaccinationHistoryId} not found` });
        }
    } catch (error) {
        console.error('Error deleting vaccination_history:', error);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
}

module.exports = {
    getVaccinationHistory,
    createVaccinationHistory,
    updateVaccinationHistoryById,
    deleteVaccinationHistoryById,
}