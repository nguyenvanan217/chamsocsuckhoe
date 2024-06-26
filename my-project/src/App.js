import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Vaccination from './Pages/vaccinationinformation/Vaccination';
import Login from '../src/Pages/loginForm/Login';
import Resigter from './Pages/registerForm/Register';
import MedicalHistory from './Pages/medicalhistory/MedicalHistory';
import VaccinationHistory from './Pages/vaccinationhistory/VaccinationhHistory.jsx';
import ChildrenExHistory from './Pages/childrenexhistory/ChildrenExHistory';
import MyInfor from './Pages/informe/MyInfor';
import InforMedical from './Pages/informedical/InforMedical.jsx';
import ChildrenPerDisInfor from './Pages/Childrenperdisinformation/ChildrenPerDisInfor.jsx';
import User from './Pages/userinfor/User.jsx';
export default function App() {
    return <>
        <Routes>
            <Route path="/thongtinnguoidung" element={<MyInfor />} />
            <Route path="/thongtinkhambenh/:id/:isCheckOrUpdate" element={<InforMedical />} />
            <Route path="/lichsukhamchuabenh" element={<MedicalHistory />} />
            <Route path="/lichsutiemphong" element={<VaccinationHistory />} />
            <Route path="/thongtinkhamdinhkytreem/:id/:isCheckOrUpdate" element={<ChildrenPerDisInfor />} />
            <Route path="/thongtintaikhoan" element={<User />} />
            <Route path="/lichsukhamtreem" element={<ChildrenExHistory />} />
            <Route path="/" element={<Login />} />
            <Route path="/dangky" element={<Resigter />} />
            <Route path="/thongtintiemphong/:id/:isCheckOrUpdate" element={<Vaccination />} />
        </Routes>
    </>;
}
