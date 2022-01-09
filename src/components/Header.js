import React from "react"
import styled from "styled-components"
import Avatar from "../images/avatar.jpg"
import TopNavigation from "./TopNavigation"

const Header = () => { 
    return (
        <>
        <TopNavigation />
        <HeaderContainer>
            <MainContainer>
                <h1>Natalia Beckstead</h1>
                <h2>Full Stack Web Developer</h2>
                <WrapDiv>
                    <i class="far fa-envelope"></i>
                    <a href = "mailto: nataliabeckstead@gmail.com">nataliabeckstead@gmail.com</a>
                </WrapDiv>
                <WrapDiv>
                    <i class="fas fa-map-marker-alt"></i>
                    <p style={{ margin: 0 }}>&nbsp;Salt Lake City, UT</p>
                </WrapDiv>
                <WrapDiv>
                    <a href="https://github.com/NataliaBeckstead" target="_blank"><i class="fab fa-github"></i></a>
                    <a href="https://github.com/NataliaBeckstead" target="_blank">https://github.com/NataliaBeckstead</a>
                </WrapDiv>
                <WrapDiv>
                    <a href="https://www.linkedin.com/in/natalia-beckstead/" target="_blank"><i class="fab fa-linkedin-in"></i></a>
                    <a href="https://www.linkedin.com/in/natalia-beckstead/" target="_blank">https://www.linkedin.com/in/natalia-beckstead</a>
                </WrapDiv>
                <WrapDiv>
                    <a href="https://www.instagram.com/toosphoto/" target="_blank"><i class="fab fa-instagram"></i></a>
                    <a href="https://www.instagram.com/toosphoto/" target="_blank">https://www.instagram.com/toosphoto</a>
                </WrapDiv>
            </MainContainer>
            <Photo src={Avatar} alt="Profile photo"></Photo>
        </HeaderContainer>
        </>
    )
}

export default Header

const HeaderContainer = styled.div `
    min-height: 90vh;
    display: flex;
    justify-content: space-around;
    align-items: center;
    @media (max-width: 800px) {
        flex-direction: column-reverse;
    }
`

const MainContainer = styled.div `
    @media (max-width: 500px) {
        text-align: center;
    }
`

const WrapDiv = styled.div `
    display: flex;
    align-items: center;
    margin-top: 2rem;
    @media (max-width: 500px) {
        margin-left: 2rem;
    }
`

const Photo = styled.img `
    border-radius: 50%;
    max-width: 40%;
`