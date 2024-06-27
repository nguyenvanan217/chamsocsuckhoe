import React from 'react';
import { Routes ,Route } from 'react-router-dom';
import Vaccination from './Pages/vaccinationinformation/Vaccination';
import Login from '../src/Pages/loginForm/Login';
import Injection from './Pages/injectioninformation/Injection';
import Resigter from './Pages/registerForm/Register';
import MedicalHistory from './Pages/medicalhistory/MedicalHistory';
import VaccinationHistory from './Pages/vaccinationhistory/VaccinationhHistory';
import ChildrenExHistory from './Pages/childrenexhistory/ChildrenExHistory';
import MyInfor from './Pages/informe/MyInfor';
export default function App() {
    return <>
        <Routes>
            <Route path="/thongtinnguoidung" element={<MyInfor />} />
            <Route path="/lichsukhamchuabenh" element={<MedicalHistory />} />
            <Route path="/lichsutiemphong" element={<VaccinationHistory />} />
            <Route path="/lichsukhamtreem" element={<ChildrenExHistory />} />
            <Route path="/" element={<Login />} />  
            <Route path="/dangky" element={<Resigter />} />
            <Route path="/thongtintiemchung" element={<Vaccination />} />
            <Route path="/thongtinmuitiem" element={<Injection />} />         
        </Routes>
    </>;
}
