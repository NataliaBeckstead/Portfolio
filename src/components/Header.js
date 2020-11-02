import React from "react";
import styled from "styled-components";
import Avatar from "../images/avatar.jpg";
import TopNavigation from "./TopNavigation";


const HeaderContainer = styled.div `
    min-height: 100vh;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding-top: 1rem;
    @media (max-width: 800px) {
        flex-direction: column-reverse;
    }
`;

const MainHodor = styled.div `
    @media (max-width: 500px) {
        text-align: center;
    }
`;

const WrapDiv1 = styled.div `
    display: flex;
    align-items: center;
    margin-top: 5rem;
    @media (max-width: 500px) {
        margin-left: 2rem;
    }
`;

const WrapDiv2 = styled.div `
    display: flex;
    align-items: center;
    @media (max-width: 500px) {
        margin-left: 2rem;
    }
`;

const IconHodor = styled.div `
    display: flex;
    margin-top: 4rem;
    @media (max-width: 500px) {
        margin-left: 2rem;
    }
`;
const Photo = styled.img `
    border-radius: 50%;
    max-width: 40%;
`;

const Header = () => { 
    return (
        <HeaderContainer>
            <MainHodor>
                <TopNavigation />
                <h1>Natalia Beckstead</h1>
                <h2>Full Stack Web Developer</h2>
                <WrapDiv1>
                    <i class="far fa-envelope"></i>
                    <a href = "mailto: nataliabeckstead@gmail.com">nataliabeckstead@gmail.com</a>
                </WrapDiv1>
                <WrapDiv2>
                    <i class="fas fa-map-marker-alt"></i>
                    <p>Salt Lake City, UT</p>
                </WrapDiv2>
                <IconHodor>
                    <a href="https://github.com/NataliaBeckstead"><i class="fab fa-github"></i></a>
                    {/* <i class="fab fa-linkedin-in"></i> */}
                    <a href="https://www.instagram.com/toosphoto/"><i class="fab fa-instagram"></i></a>
                </IconHodor>
            </MainHodor>
            <Photo src={Avatar} alt="Profile photo"></Photo>
        </HeaderContainer>
    );
};

export default Header;