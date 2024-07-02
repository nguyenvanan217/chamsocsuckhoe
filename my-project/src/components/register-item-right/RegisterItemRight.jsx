import React from 'react';
import styled from 'styled-components';
import bgLogin from '../../assets/img/bg-login.jpg';

const BackgroundDiv = styled.div`
    position: relative;
    background-image: url(${bgLogin});
    background-size: cover;
    background-position: center;
    width: 100%;
    height: auto;
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
        </BackgroundDiv>
    );
};

export default RegisterItemRight;
