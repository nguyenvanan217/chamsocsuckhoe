const { getAllUsers, addUserWithProfile, updateUser, deleteUser } = require("../service/SRUDService");

const getUsers = async (req, res) => {
    try {
        let result = await getAllUsers();
        return res.json(result);
    } catch (error) {
        console.error('Error fetching users:', error);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
};

const createUser = async (req, res) => {
    const userData = req.body;
    try {
        const userId = await addUserWithProfile(userData);
        return res.json({ userId });
    } catch (error) {
        console.error('Error adding user:', error);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
};

const updateUserById = async (req, res) => {
    const userId = req.params.id;
    const userData = req.body;
    try {
        const rowsAffected = await updateUser(userId, userData);
        return res.json({ message: 'Update successful' });
    } catch (error) {
        console.error('Error updating user:', error);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
};
const deleteUserById = async (req, res) => {
    const userId = req.params.id;
    try {
        const rowsAffected = await deleteUser(userId);
        if (rowsAffected > 0) {
            return res.json({ message: `User with ID ${userId} deleted successfully` });
        } else {
            return res.status(404).json({ message: `User with ID ${userId} not found` });
        }
    } catch (error) {
        console.error('Error deleting user:', error);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
};

module.exports = {
    getUsers,
    createUser,
    updateUserById,
    deleteUserById,
}