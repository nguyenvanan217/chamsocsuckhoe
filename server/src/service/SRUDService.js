const connection = require('../config/database');

//  ******* start users *****
const getAllUsers = async () => {
    let [result, fields] = await connection.query("SELECT * FROM USERS");
    return result;
};

const getUsersById = async (id) => {
    let [result, fields] = await connection.query("SELECT * FROM USERS WHERE id = ?", [id]);
    return result;
};

const addUserWithProfile = async (userData) => {
    const query = 'INSERT INTO USERS (name, phone, email, password) VALUES (?, ?, ?, ?)';
    const [result] = await connection.query(query, [userData.name, userData.phone, userData.email, userData.password]);
    const userId = result.insertId;

    // Thêm thông tin user_profiles vào bảng USER_PROFILES
    const addUserProfileQuery = 'INSERT INTO USER_PROFILES (user_id, name) VALUES (?, ?)';
    await connection.query(addUserProfileQuery, [userId, userData.name]);

    return userId; // Trả về ID của bản ghi mới được thêm vào
};

const updateUser = async (userId, userData) => {
    const query = 'UPDATE USERS SET name = ?, phone = ?, email = ?, password = ? WHERE id = ? ';
    const [result] = await connection.query(query, [userData.name, userData.phone, userData.email, userData.password, userId]);
};

const deleteUser = async (userId) => {
    const query = 'DELETE FROM USERS WHERE id = ?';
    const [result] = await connection.query(query, [userId]);
    return result.affectedRows; // Trả về số lượng hàng đã bị xoá
}
//  ******* end users *****

//  ******* start child_checkup_history *****
const getAllChildCheckupHistory = async () => {
    let [result, fields] = await connection.query("SELECT * FROM CHILD_CHECKUP_HISTORY");
    return result;
};

const getChildCheckupHistoryByID = async (id) => {
    let [result, fields] = await connection.query("SELECT * FROM CHILD_CHECKUP_HISTORY WHERE id = ?", [id]);
    return result;
};
const getChildCheckupHistoryByUserID = async (user_id) => {
    let [result, fields] = await connection.execute("SELECT * FROM CHILD_CHECKUP_HISTORY WHERE user_id = ?", [user_id]);
    return result;
};

const addChildCheckupHistory = async (childData) => {
    const query = 'INSERT INTO CHILD_CHECKUP_HISTORY (name, gender, birth_date, regular_check_up_date, height, weight, condition_description, user_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?)';
    const [result] = await connection.query(query, [
        childData.name,
        childData.gender,
        childData.birth_date,
        childData.regular_check_up_date,
        childData.height,
        childData.weight,
        childData.condition_description,
        childData.user_id
    ]);
    return result.insertId; // Trả về ID của bản ghi mới được thêm vào
};
const updateChildCheckupHistory = async (childId, childData) => {
    const query = 'UPDATE CHILD_CHECKUP_HISTORY SET name = ?, gender = ?, birth_date = ?, regular_check_up_date = ?, height = ?, weight = ?, condition_description = ?, user_id = ? WHERE id = ? ';
    const [result] = await connection.query(query, [
        childData.name,
        childData.gender,
        childData.birth_date,
        childData.regular_check_up_date,
        childData.height,
        childData.weight,
        childData.condition_description,
        childData.user_id,
        childId,
    ]);
};
const deleteChildCheckupHistory = async (childId) => {
    const query = 'DELETE FROM CHILD_CHECKUP_HISTORY WHERE id = ?';
    const [result] = await connection.query(query, [childId]);
    return result.affectedRows; // Trả về số lượng hàng đã bị xoá
};
//  ******* end child_checkup_history *****

//  ******* start medical_history *****
const getAllMedicalHistory = async () => {
    let [result, fields] = await connection.query("SELECT * FROM MEDICAl_HISTORY");
    return result;
};

const getMedicalHistoryByID = async (id) => {
    let [result, fields] = await connection.execute("SELECT * FROM MEDICAl_HISTORY WHERE id = ?", [id]);
    return result;
};


const getMedicalHistoryByUserID = async (user_id) => {
    let [result, fields] = await connection.execute("SELECT * FROM MEDICAl_HISTORY WHERE user_id = ?", [user_id]);
    return result;
};

const addMedicalHistory = async (medicalHistoryData) => {
    const query = 'INSERT INTO MEDICAL_HISTORY (clinic_name, examination_date, symptoms, symptom_description, genetic_history, medical_history, body_temperature, heart_rate, blood_pressure, blood_sugar, height, weight, initial_diagnosis, disease_name, main_medication, medication_details, post_medication_diet_and_lifestyle,examination_cost, user_id) VALUES (?,?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
    const [result] = await connection.query(query, [
        medicalHistoryData.clinic_name,
        medicalHistoryData.examination_date,
        medicalHistoryData.symptoms,
        medicalHistoryData.symptom_description,
        medicalHistoryData.genetic_history,
        medicalHistoryData.medical_history,
        medicalHistoryData.body_temperature,
        medicalHistoryData.heart_rate,
        medicalHistoryData.blood_pressure,
        medicalHistoryData.blood_sugar,
        medicalHistoryData.height,
        medicalHistoryData.weight,
        medicalHistoryData.initial_diagnosis,
        medicalHistoryData.disease_name,
        medicalHistoryData.main_medication,
        // medicalHistoryData.medication_image,
        medicalHistoryData.medication_details,
        medicalHistoryData.post_medication_diet_and_lifestyle,
        medicalHistoryData.examination_cost,
        medicalHistoryData.user_id
    ]);
    return result.insertId; // Trả về ID của bản ghi mới được thêm vào
};
const updateMedicalHistory = async (medicalHistoryId, medicalHistoryData) => {
    const query = 'UPDATE MEDICAl_HISTORY SET clinic_name = ?, examination_date = ?, symptoms = ?, symptom_description = ?, genetic_history = ?, medical_history = ?, body_temperature = ?,heart_rate = ?, blood_pressure = ?, blood_sugar = ?, height = ?, weight = ?, initial_diagnosis = ?, disease_name = ?, main_medication = ?, medication_details = ?, post_medication_diet_and_lifestyle = ?,examination_cost = ?, user_id = ? WHERE id = ? ';
    const [result] = await connection.query(query, [
        medicalHistoryData.clinic_name,
        medicalHistoryData.examination_date,
        medicalHistoryData.symptoms,
        medicalHistoryData.symptom_description,
        medicalHistoryData.genetic_history,
        medicalHistoryData.medical_history,
        medicalHistoryData.body_temperature,
        medicalHistoryData.heart_rate,
        medicalHistoryData.blood_pressure,
        medicalHistoryData.blood_sugar,
        medicalHistoryData.height,
        medicalHistoryData.weight,
        medicalHistoryData.initial_diagnosis,
        medicalHistoryData.disease_name,
        medicalHistoryData.main_medication,
        // medicalHistoryData.medication_image,
        medicalHistoryData.medication_details,
        medicalHistoryData.post_medication_diet_and_lifestyle,
        medicalHistoryData.examination_cost,
        medicalHistoryData.user_id,
        medicalHistoryId,
    ]);
};
const deleteMedicalHistory = async (medicalHistoryId) => {
    const query = 'DELETE FROM MEDICAl_HISTORY WHERE id = ?';
    const [result] = await connection.query(query, [medicalHistoryId]);
    return result.affectedRows; // Trả về số lượng hàng đã bị xoá
};
//  ******* end medical_history *****

//  ******* start vaccination_history *****
const getAllVaccinationHistory = async () => {
    let [result, fields] = await connection.query("SELECT * FROM VACCINATION_HISTORY");
    return result;
};
const getVaccinationHistoryByID = async (id) => {
    let [result, fields] = await connection.query("SELECT * FROM VACCINATION_HISTORY WHERE id = ?", [id]);
    return result;
};
const getVaccinationHistoryByUserID = async (user_id) => {
    let [result, fields] = await connection.execute("SELECT * FROM VACCINATION_HISTORY WHERE user_id = ?", [user_id]);
    return result;
};

const addVaccinationHistory = async (vaccinationHistoryData) => {
    const query = 'INSERT INTO VACCINATION_HISTORY (vaccination_dates, vaccination_names, vaccination_rooms, post_vaccination_status,caccination_costs, user_id) VALUES (?, ?, ?, ?, ?, ?)';
    const [result] = await connection.query(query, [
        vaccinationHistoryData.vaccination_dates,
        vaccinationHistoryData.vaccination_names,
        vaccinationHistoryData.vaccination_rooms,
        vaccinationHistoryData.post_vaccination_status,
        vaccinationHistoryData.caccination_costs,
        vaccinationHistoryData.user_id,
    ]);
    return result.insertId; // Trả về ID của bản ghi mới được thêm vào
};
const updateVaccinationHistory = async (vaccinationHistoryID, vaccinationHistoryData) => {
    const query = 'UPDATE VACCINATION_HISTORY SET vaccination_dates = ?, vaccination_names = ?, vaccination_rooms = ?, post_vaccination_status = ?, caccination_costs = ?, user_id = ?  WHERE id = ? ';
    const [result] = await connection.query(query, [
        vaccinationHistoryData.vaccination_dates,
        vaccinationHistoryData.vaccination_names,
        vaccinationHistoryData.vaccination_rooms,
        vaccinationHistoryData.post_vaccination_status,
        vaccinationHistoryData.caccination_costs,
        vaccinationHistoryData.user_id,
        vaccinationHistoryID,
    ]);
}
const deleteVaccinationHistory = async (vaccinationHistoryID) => {
    const query = 'DELETE FROM VACCINATION_HISTORY WHERE id = ?';
    const [result] = await connection.query(query, [vaccinationHistoryID]);
    return result.affectedRows; // Trả về số lượng hàng đã bị xoá
}
//  ******* end vaccination_history *****

//  ******* start user_profiles *****
const getAllUserProfiles = async () => {
    let [result, fields] = await connection.query("SELECT * FROM USER_PROFILES");
    return result;
};
const getUserProfilesByUserID = async (user_id) => {
    let [result, fields] = await connection.execute("SELECT * FROM USER_PROFILES WHERE user_id = ?", [user_id]);
    return result;
};
const addUserProfiles = async (userProfilesData) => {
    const query = 'INSERT INTO USER_PROFILES (user_id, name, gender, birth_date, cccd, birth_place, address) VALUES (?, ?, ?, ?, ?, ?, ?)';
    const [result] = await connection.query(query, [
        userProfilesData.user_id,
        userProfilesData.name,
        userProfilesData.gender,
        userProfilesData.birth_date,
        userProfilesData.cccd,
        userProfilesData.birth_place,
        userProfilesData.address,
    ]);
    return result.insertId; // Trả về ID của bản ghi mới được thêm vào
};

const updateUserProfiles = async (userProfilesId, userProfilesData) => {
    const query = 'UPDATE USER_PROFILES SET name = ?, gender = ?, birth_date = ?, cccd = ?, birth_place = ?, address = ? WHERE id = ? ';
    const [result] = await connection.query(query, [
        userProfilesData.name,
        userProfilesData.gender,
        userProfilesData.birth_date,
        userProfilesData.cccd,
        userProfilesData.birth_place,
        userProfilesData.address,
        userProfilesId,
    ]);
};
const deleteUserProfiles = async (userProfilesId) => {
    const query = 'DELETE FROM USER_PROFILES WHERE id = ?';
    const [result] = await connection.query(query, [userProfilesId]);
    return result.affectedRows; // Trả về số lượng hàng đã bị xoá
};
//  ******* end user_profiles *****

module.exports = {
    getAllUsers,
    getUsersById,
    addUserWithProfile,
    updateUser,
    deleteUser,
    getAllChildCheckupHistory,
    getChildCheckupHistoryByID,
    getChildCheckupHistoryByUserID,
    addChildCheckupHistory,
    updateChildCheckupHistory,
    deleteChildCheckupHistory,
    getAllMedicalHistory,
    getMedicalHistoryByID,
    getMedicalHistoryByUserID,
    addMedicalHistory,
    updateMedicalHistory,
    deleteMedicalHistory,
    getAllVaccinationHistory,
    getVaccinationHistoryByID,
    getVaccinationHistoryByUserID,
    addVaccinationHistory,
    updateVaccinationHistory,
    deleteVaccinationHistory,
    getAllUserProfiles,
    getUserProfilesByUserID,
    addUserProfiles,
    updateUserProfiles,
    deleteUserProfiles,
}