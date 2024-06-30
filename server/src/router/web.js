const express = require("express");
const { getUsers, createUser, updateUserById, deleteUserById } = require("../controllers/userControllers");
const { getChildCheckupHistory, _getChildCheckupHistoryById, _getChildCheckupHistoryByUserId, createChildCheckupHistory, updateChildCheckupHistoryById, deleteChildCheckupHistoryById } = require("../controllers/child_checkup_historyControllers");
const { getMedicalHistory, _getMedicalHistoryByID, _getMedicalHistoryByUserID, createMedicalHistory, updateMedicalHistoryById, deleteMedicalHistoryById } = require("../controllers/medical_historyControllers");
const { getVaccinationHistory, _getVaccinationHistoryByID, _getVaccinationHistoryByUserID, createVaccinationHistory, updateVaccinationHistoryById, deleteVaccinationHistoryById } = require("../controllers/vaccination_historyControllers");
const { getUserProfiles, _getUserProfilesByUserID, createUserProfiles, updateUserProfilesById, deleteUserProfilesById } = require("../controllers/user_profilesControllers");
const router = express.Router();

router.get("/users", getUsers);
router.post('/users', createUser);
router.put('/users/:id', updateUserById);
router.delete('/users/:id', deleteUserById);

router.get("/child_checkup_history", getChildCheckupHistory);
router.get("/child_checkup_history/id/:id", _getChildCheckupHistoryById);
router.get("/child_checkup_history/:user_id", _getChildCheckupHistoryByUserId);
router.post("/child_checkup_history", createChildCheckupHistory);
router.put("/child_checkup_history/:id", updateChildCheckupHistoryById);
router.delete("/child_checkup_history/:id", deleteChildCheckupHistoryById);

router.get("/medical_history", getMedicalHistory);
router.get("/medical_history/id/:id", _getMedicalHistoryByID);
router.get("/medical_history/:user_id", _getMedicalHistoryByUserID);
router.post("/medical_history", createMedicalHistory);
router.put("/medical_history/:id", updateMedicalHistoryById);
router.delete("/medical_history/:id", deleteMedicalHistoryById);

router.get("/vaccination_history", getVaccinationHistory);
router.get("/vaccination_history/id/:id", _getVaccinationHistoryByID);
router.get("/vaccination_history/:user_id", _getVaccinationHistoryByUserID);
router.post("/vaccination_history", createVaccinationHistory);
router.put("/vaccination_history/:id", updateVaccinationHistoryById);
router.delete("/vaccination_history/:id", deleteVaccinationHistoryById);

router.get("/user_profiles", getUserProfiles);
router.get("/user_profiles/:user_id", _getUserProfilesByUserID);
router.post("/user_profiles", createUserProfiles);
router.put("/user_profiles/:id", updateUserProfilesById);
router.delete("/user_profiles/:id", deleteUserProfilesById);

// API:http://localhost:8888/chamsocsuckhoe/$key

module.exports = router;