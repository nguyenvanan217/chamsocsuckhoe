import React from 'react';
import styled from 'styled-components';
import bgLogin from '../../assets/img/bg-login.jpg';

const BackgroundDiv = styled.div`
    position: relative;
    background-image: url(${bgLogin});
    background-size: cover;
    background-position: center;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const StyledH1 = styled.h1`
    position: absolute;
    top: 25px;
    left: 25px;
    width: 530px;
    height: 355px
    color: white;
    opacity: 0.9;
    z-index: 10;
`;

const RegisterItemRight = () => {
    return (
        <BackgroundDiv>
            <StyledH1>
                <div className="bg-[#fcf8e3] p-3 rounded-md w-[430px] border border-[#faebcc]">
                    <h2 className="text-[#E71A1C] font-medium mb-2 text-[18px]">Thông báo:</h2>
                    <p className="text-[#E71A1C] text-[14px]">
                        Viettel trân trọng thông báo đến Quý khách hàng về Chính sách bảo vệ dữ liệu cá nhân của Viettel
                        khi cung cấp sản phẩm, hàng hóa, dịch vụ căn cứ Nghị định 13/2023/NĐ-CP. Chi tiết xem tại đường
                        link sau:
                    </p>
                    <a
                        href="https://viettel.vn/ThongbaochinhsachbaoveDLCN"
                        className="text-[#428BCA] font-bold text-[14px]"
                    >
                        https://viettel.vn/ThongbaochinhsachbaoveDLCN
                    </a>
                    <p className="text-[#E71A1C] text-[14px]">
                        Bằng việc đăng nhập hệ thống, Quý khách hàng xác nhận đã đọc Thông báo về Chính sách bảo vệ dữ
                        liệu cá nhân của Viettel
                    </p>
                    <p className="text-[#E71A1C] mt-5 text-[14px]">Xin trân trọng cảm ơn!</p>
                </div>
            </StyledH1>
        </BackgroundDiv>
    );
};

export default RegisterItemRight;
