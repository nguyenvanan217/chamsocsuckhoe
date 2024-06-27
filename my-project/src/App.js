import React from 'react';
import { Routes ,Route } from 'react-router-dom';
import Vaccination from './Pages/vaccinationinformation/Vaccination';
import Login from '../src/Pages/loginForm/Login';
import Injection from './Pages/injectioninformation/Injection';
export default function App() {
    return <>
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/thongtintiemchung" element={<Vaccination />} />
            <Route path="/thongtinmuitiem" element={<Injection />} />
        </Routes>
    </>;
}
