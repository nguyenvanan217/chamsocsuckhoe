const { getAllChildCheckupHistory, getChildCheckupHistoryByID, getChildCheckupHistoryByUserID, addChildCheckupHistory, updateChildCheckupHistory, deleteChildCheckupHistory } = require("../service/SRUDService");

const getChildCheckupHistory = async (req, res) => {
    try {
        let result = await getAllChildCheckupHistory();
        return res.json(result);
    } catch (error) {
        console.error('Error fetching child_checkup_history:', error);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
}

const _getChildCheckupHistoryById = async (req, res) => {
    const id = req.params.id;
    try {
        let result = await getChildCheckupHistoryByID(id);
        if (!result) {
            return res.status(404).json({ message: 'child_checkup_history not found' });
        }
        return res.json(result);
    } catch (error) {
        console.error('Error fetching child_checkup_history:', error);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
}

const _getChildCheckupHistoryByUserId = async (req, res) => {
    const user_id = req.params.user_id;
    try {
        let result = await getChildCheckupHistoryByUserID(user_id);
        if (!result) {
            return res.status(404).json({ message: 'child_checkup_history not found' });
        }
        return res.json(result);
    } catch (error) {
        console.error('Error fetching child_checkup_history:', error);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
}

const createChildCheckupHistory = async (req, res) => {
    const childData = req.body;
    try {
        const childId = await addChildCheckupHistory(childData);
        return res.json({ childId });
    } catch (error) {
        console.error('Error adding child_checkup_history:', error);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
}
const updateChildCheckupHistoryById = async (req, res) => {
    const childId = req.params.id;
    const childData = req.body;
    try {
        const rowsAffected = await updateChildCheckupHistory(childId, childData);
        return res.json({ message: 'Update successful' });
    } catch (error) {
        console.error('Error updating child_checkup_history:', error);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
}
const deleteChildCheckupHistoryById = async (req, res) => {
    const childId = req.params.id;
    try {
        const rowsAffected = await deleteChildCheckupHistory(childId);
        if (rowsAffected > 0) {
            return res.json({ message: `child_checkup_history with ID ${childId} deleted successfully` });
        } else {
            return res.status(404).json({ message: `child_checkup_history with ID ${childId} not found` });
        }
    } catch (error) {
        console.error('Error deleting child_checkup_history:', error);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
}
module.exports = {
    getChildCheckupHistory,
    _getChildCheckupHistoryById,
    _getChildCheckupHistoryByUserId,
    createChildCheckupHistory,
    updateChildCheckupHistoryById,
    deleteChildCheckupHistoryById,
}