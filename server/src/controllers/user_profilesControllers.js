const { getAllUserProfiles, getUserProfilesByUserID, addUserProfiles, updateUserProfiles, deleteUserProfiles } = require("../service/SRUDService");

const getUserProfiles = async (req, res) => {
    try {
        let result = await getAllUserProfiles();
        return res.json(result);
    } catch (error) {
        console.error('Error fetching user_profiles:', error);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
}
const _getUserProfilesByUserID = async (req, res) => {
    const user_id = req.params.user_id;
    try {
        let result = await getUserProfilesByUserID(user_id);
        if (!result) {
            return res.status(404).json({ message: 'User profile not found' });
        }
        return res.json(result);
    } catch (error) {
        console.error('Error fetching user_profiles:', error);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
}
const createUserProfiles = async (req, res) => {
    const userProfilesData = req.body;
    try {
        const userProfilesId = await addUserProfiles(userProfilesData);
        return res.json({ userProfilesId });
    } catch (error) {
        console.error('Error adding user_profiles:', error);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
}
const updateUserProfilesById = async (req, res) => {
    const userProfilesId = req.params.id;
    const userProfilesData = req.body;
    try {
        const rowsAffected = await updateUserProfiles(userProfilesId, userProfilesData);
        return res.json({ message: 'Update successful' });
    } catch (error) {
        console.error('Error updating user_profiles:', error);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
}
const deleteUserProfilesById = async (req, res) => {
    const userProfilesId = req.params.id;
    try {
        const rowsAffected = await deleteUserProfiles(userProfilesId);
        if (rowsAffected > 0) {
            return res.json({ message: `user_profiles with ID ${userProfilesId} deleted successfully` });
        } else {
            return res.status(404).json({ message: `user_profiles with ID ${userProfilesId} not found` });
        }
    } catch (error) {
        console.error('Error deleting user_profiles:', error);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
}

module.exports = {
    getUserProfiles,
    _getUserProfilesByUserID,
    createUserProfiles,
    updateUserProfilesById,
    deleteUserProfilesById,
}