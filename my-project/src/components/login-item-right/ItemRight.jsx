import React from 'react';
import styled from 'styled-components';
import bgLogin from '../../assets/img/bg-login.jpg';

const BackgroundDiv = styled.div`
    position: relative; // Thêm dòng này
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

const ItemRight = () => {
    return (
        <BackgroundDiv>
            <StyledH1>
                <div className="bg-[#EFEAD8] p-3 rounded-md">
                    <h2 className="text-[#E71A1C] text-xl font-bold mb-3">Thông báo:</h2>
                    <p className="text-[#E71A1C] text-lg font-medium">
                        Viettel trân trọng thông báo đến Quý khách hàng về Chính sách bảo vệ dữ liệu cá nhân của Viettel
                        khi cung cấp sản phẩm, hàng hóa, dịch vụ căn cứ Nghị định 13/2023/NĐ-CP. Chi tiết xem tại đường
                        link sau:
                    </p>
                    <a
                        href="https://viettel.vn/ThongbaochinhsachbaoveDLCN"
                        className="text-[#428BCA] text-lg font-medium"
                    >
                        https://viettel.vn/ThongbaochinhsachbaoveDLCN
                    </a>
                    <p className="text-[#E71A1C] text-lg font-medium">
                        Bằng việc đăng nhập hệ thống, Quý khách hàng xác nhận đã đọc Thông báo về Chính sách bảo vệ dữ
                        liệu cá nhân của Viettel
                    </p>
                    <p className="text-[#E71A1C] mt-7 text-lg font-medium">Xin trân trọng cảm ơn!</p>
                </div>
            </StyledH1>
        </BackgroundDiv>
    );
};

export default ItemRight;
