import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { addMedicalHistory, fetchMedicalHistoryById, updateMedicalHistory } from '../../api/apiClient';
import { addDays, format, parseISO } from 'date-fns';

function InforMedical() {
    const [userId, setUserId] = useState();
    let { id, isCheckOrUpdate } = useParams();
    const [isUpdate, setIsUpdate] = useState(JSON.parse(isCheckOrUpdate));
    const navigate = useNavigate();

    const [medicalHistory, setMedicalHistory] = useState({
        clinic_name: "",
        examination_date: "",
        symptoms: "",
        symptom_description: "",
        genetic_history: "",
        medical_history: "",
        body_temperature: "",
        heart_rate: "",
        blood_pressure: "",
        blood_sugar: "",
        height: "",
        weight: "",
        initial_diagnosis: "",
        disease_name: "",
        main_medication: "",
        medication_details: "",
        post_medication_diet_and_lifestyle: "",
        examination_cost: "",
        user_id: null
    });
    const [medicalHistoryPrev, setMedicalHistoryPrev] = useState({
        clinic_name: "",
        examination_date: "",
        symptoms: "",
        symptom_description: "",
        genetic_history: "",
        medical_history: "",
        body_temperature: "",
        heart_rate: "",
        blood_pressure: "",
        blood_sugar: "",
        height: "",
        weight: "",
        initial_diagnosis: "",
        disease_name: "",
        main_medication: "",
        medication_details: "",
        post_medication_diet_and_lifestyle: "",
        examination_cost: "",
        user_id: null
    });

    useEffect(() => {
        const user_id = localStorage.getItem('user_id');
        if (user_id) {
            const parsedUserId = JSON.parse(user_id);
            setUserId(parsedUserId);

            // Cập nhật medicalHistory sau khi userId được thiết lập
            setMedicalHistory(prevState => ({
                ...prevState,
                user_id: parsedUserId
            }));

            setMedicalHistoryPrev(prevState => ({
                ...prevState,
                user_id: parsedUserId
            }));
        } else {
            navigate('/');
        }
    }, [navigate]);

    useEffect(() => {
        const getMedicalHistory = async () => {
            try {
                const data = await fetchMedicalHistoryById(id);
                setMedicalHistory({ ...data[0], examination_date: data[0].examination_date.split('T')[0] });
                setMedicalHistoryPrev({ ...data[0], examination_date: data[0].examination_date.split('T')[0] });
            } catch (error) {
                console.error("Failed to fetch medical history data", error);
            }
        };

        if (userId && id !== "0") {
            getMedicalHistory();
        }
    }, [userId, id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setMedicalHistory(prevState => ({
            ...prevState,
            [name]: name === "examination_date" ? value.split('T')[0] : value
        }));

    };

    const handleSubmit = async (key) => {
        switch (key) {
            case "cancel":
                setIsUpdate(false);
                setMedicalHistory(medicalHistoryPrev)
                break;
            case "update":
                setIsUpdate(true);
                break;
            case "add":
                await addMedicalHistory({
                    ...medicalHistory,
                    examination_date: medicalHistory.examination_date && format(addDays(parseISO(medicalHistory.examination_date), 1), 'yyyy-MM-dd')
                });
                navigate("/lichsukhamchuabenh")
                break;
            case "save":
                try {
                    await updateMedicalHistory(id, {
                        ...medicalHistory,
                        examination_date: format(addDays(parseISO(medicalHistory.examination_date), 1), 'yyyy-MM-dd')
                    });
                    setIsUpdate(false); // Đặt lại trạng thái chỉnh sửa sau khi lưu thành công
                } catch (error) {
                    console.error("Error updating medical history", error);
                    // Xử lý lỗi, ví dụ hiển thị thông báo cho người dùng
                }
                break;
            default:
                break;
        }

    };

    return (
        <div>
            <div className="w-[1350px] mx-auto">
                <div className='w-full flex justify-end'>
                    <Link to="/lichsukhamchuabenh">
                        <button className='bg-green-500 text-white px-7 py-1 text-[17px] rounded-[3px] mt-5'>Quay lại</button>
                    </Link>
                </div>
                <div className="text-2xl my-4">Thông tin Khám Chữa Bệnh</div>
                <div className="flex gap-8 flex-wrap">
                    <div>
                        <p className="mb-2">
                            Tên Bệnh Viện/Phòng Khám <span className="text-red-700">(&#42;)</span>
                        </p>
                        <input
                            type="text"
                            className="border w-72 h-9 outline-none px-2 text-[#A3AAB5]"
                            value={medicalHistory.clinic_name}
                            onChange={handleChange}
                            name="clinic_name"
                            disabled={!isUpdate}
                        />
                    </div>

                    <div>
                        <p className="mb-2">
                            Ngày Khám Bệnh <span className="text-red-700">(&#42;)</span>
                        </p>
                        <input
                            type="date"
                            className="border w-72 h-9 outline-none px-2 text-[#A3AAB5]"
                            value={medicalHistory.examination_date}
                            onChange={handleChange}
                            name="examination_date"
                            disabled={!isUpdate}
                        />
                    </div>
                    <div>
                        <p className="mb-2">
                            Triệu Chứng <span className="text-red-700">(&#42;)</span>
                        </p>
                        <input
                            type="text"
                            className="border w-72 h-9 outline-none px-2 text-[#A3AAB5]"
                            value={medicalHistory.symptoms}
                            onChange={handleChange}
                            name="symptoms"
                            disabled={!isUpdate}
                        />
                    </div>
                    <div>
                        <p className="mb-2">
                            Mô tả triệu chứng <span className="text-red-700">(&#42;)</span>
                        </p>
                        <input
                            type="text"
                            className="border w-72 h-9 outline-none px-2 text-[#A3AAB5]"
                            value={medicalHistory.symptom_description}
                            onChange={handleChange}
                            name="symptom_description"
                            disabled={!isUpdate}
                        />
                    </div>

                    <div>
                        <p className="mb-2">
                            Tiểu sử bệnh di truyền <span className="text-red-700">(&#42;)</span>
                        </p>
                        <input
                            type="text"
                            className="border w-72 h-9 outline-none px-2 text-[#A3AAB5]"
                            value={medicalHistory.genetic_history}
                            onChange={handleChange}
                            name="genetic_history"
                            disabled={!isUpdate}
                        />
                    </div>

                    <div>
                        <p className="mb-2">
                            Tiểu sử bệnh lý <span className="text-red-700">(&#42;)</span>
                        </p>
                        <input
                            type="text"
                            className="border w-72 h-9 outline-none px-2 text-[#A3AAB5]"
                            value={medicalHistory.medical_history}
                            onChange={handleChange}
                            name="medical_history"
                            disabled={!isUpdate}
                        />
                    </div>
                </div>
                <p className="mt-5 font-bold">1/ Khám lâm sàng</p>
                <div className="flex flex-wrap justify-between">
                    <div className="flex flex-col basis-1/3">
                        <p className="mb-2 my-4">Nhiệt độ cơ thể (&#176;C)</p>
                        <input
                            type="text"
                            className="border w-32 h-9 outline-none px-2  bg-[#E8ECEF] text-black"
                            value={medicalHistory.body_temperature}
                            onChange={handleChange}
                            name="body_temperature"
                            disabled={!isUpdate}
                        />
                    </div>
                    <div className="flex flex-col basis-1/3">
                        <p className="mb-2 my-4">Nhịp Tim (bpm) </p>
                        <input
                            type="text"
                            className="border w-32 h-9 outline-none px-2  bg-[#E8ECEF] text-black"
                            value={medicalHistory.heart_rate}
                            onChange={handleChange}
                            name="heart_rate"
                            disabled={!isUpdate}
                        />
                    </div>
                    <div className="flex flex-col basis-1/3">
                        <p className="mb-2 my-4">Huyết áp (mm/Hg) </p>
                        <input
                            type="text"
                            className="border w-32 h-9 outline-none px-2  bg-[#E8ECEF] text-black"
                            value={medicalHistory.blood_pressure}
                            onChange={handleChange}
                            name="blood_pressure"
                            disabled={!isUpdate}
                        />
                    </div>
                    <div className="flex flex-col basis-1/3">
                        <p className="mb-2 my-4">Đường huyết (mg/dl)</p>
                        <input
                            type="text"
                            className="border w-32 h-9 outline-none px-2  bg-[#E8ECEF] text-black"
                            value={medicalHistory.blood_sugar}
                            onChange={handleChange}
                            name="blood_sugar"
                            disabled={!isUpdate}
                        />
                    </div>
                    <div className="flex flex-col basis-1/3">
                        <p className="mb-2 my-4">Chiều cao (cm) </p>
                        <input
                            type="text"
                            className="border w-32 h-9 outline-none px-2  bg-[#E8ECEF] text-black"
                            value={medicalHistory.height}
                            onChange={handleChange}
                            name="height"
                            disabled={!isUpdate}
                        />
                    </div>
                    <div className="flex flex-col basis-1/3">
                        <p className="mb-2 my-4">Cân nặng (kg) </p>
                        <input
                            type="text"
                            className="border w-32 h-9 outline-none px-2  bg-[#E8ECEF] text-black"
                            value={medicalHistory.weight}
                            onChange={handleChange}
                            name="weight"
                            disabled={!isUpdate}
                        />
                    </div>
                    <div className="flex flex-col basis-1/3">
                        <p className="mb-2 my-4">Chẩn đoán ban đầu</p>
                        <input
                            type="text"
                            className="border w-72 h-9 outline-none px-2  bg-[#E8ECEF] text-black"
                            value={medicalHistory.initial_diagnosis}
                            onChange={handleChange}
                            name="initial_diagnosis"
                            disabled={!isUpdate}
                        />
                    </div>
                    <div className="flex flex-col basis-1/3">
                        <p className="mb-2 my-4">Tên bệnh</p>
                        <input
                            type="text"
                            className="border w-72 h-9 outline-none px-2  bg-[#E8ECEF] text-black"
                            value={medicalHistory.disease_name}
                            onChange={handleChange}
                            name="disease_name"
                            disabled={!isUpdate}
                        />
                    </div>
                    <div className="flex flex-col basis-1/3">
                        <p className="mb-2 my-4">Thuốc chính</p>
                        <input
                            type="text"
                            className="border w-72 h-9 outline-none px-2  bg-[#E8ECEF] text-black"
                            value={medicalHistory.main_medication}
                            onChange={handleChange}
                            name="main_medication"
                            disabled={!isUpdate}
                        />
                    </div>
                    <div className="flex flex-col basis-1/3">
                        <p className="mb-2 my-4">Hình ảnh thuốc</p>
                        <input
                            type="file"
                            className="border w-72 h-9 outline-none px-2  bg-[#E8ECEF] text-black"
                            value={medicalHistory.medication_image}
                            name="medication_image"
                            disabled={!isUpdate}
                        />
                    </div>
                    <div className="flex flex-col basis-1/3">
                        <p className="mb-2 my-4">Chi tiết thuốc</p>
                        <input
                            type="text"
                            className="border w-72 h-9 outline-none px-2  bg-[#E8ECEF] text-black"
                            value={medicalHistory.medication_details}
                            onChange={handleChange}
                            name="medication_details"
                            disabled={!isUpdate}
                        />
                    </div>
                    <div className="flex flex-col basis-1/3">
                        <p className="mb-2 my-4">Sau khi dùng thuốc chế độ dinh dưỡng và sinh hoạt</p>
                        <input
                            type="text"
                            className="border w-72 h-9 outline-none px-2  bg-[#E8ECEF] text-black"
                            value={medicalHistory.post_medication_diet_and_lifestyle}
                            onChange={handleChange}
                            name="post_medication_diet_and_lifestyle"
                            disabled={!isUpdate}
                        />
                    </div>
                    <div className="flex flex-col basis-1/3">
                        <p className="mb-2 my-4">Chi phí khám bệnh</p>
                        <input
                            type="text"
                            className="border w-72 h-9 outline-none px-2  bg-[#ff5656] text-white placeholder-white"
                            value={medicalHistory.examination_cost}
                            onChange={handleChange}
                            name="examination_cost"
                            placeholder='VNĐ'
                            disabled={!isUpdate}
                        />
                    </div>
                </div>
                <div className="flex justify-center my-8 gap-2">
                    {id !== "0" &&
                        (
                            isUpdate
                                ?
                                <button
                                    onClick={() => handleSubmit("cancel")}
                                    className="bg-[#1684FF] px-8 py-3 text-white rounded-lg font-semibold text-lg"
                                >
                                    Huỷ
                                </button>
                                :
                                <button
                                    onClick={() => handleSubmit("update")}
                                    className="bg-[#1684FF] px-8 py-3 text-white rounded-lg font-semibold text-lg"
                                >
                                    Chỉnh sửa
                                </button>
                        )}

                    {isUpdate &&
                        (id !== "0" ?
                            <button
                                onClick={() => handleSubmit("save")}
                                className="bg-[#1684FF] px-8 py-3 text-white rounded-lg font-semibold text-lg"
                            >
                                Lưu thông tin
                            </button>
                            : <button
                                onClick={() => handleSubmit("add")}
                                className="bg-[#1684FF] px-8 py-3 text-white rounded-lg font-semibold text-lg"
                            >
                                Thêm thông tin
                            </button>)
                    }
                </div>
            </div>
        </div>
    );
}

export default InforMedical;
