import React from "react"
import styled from "styled-components"

const Footer = () => {
    return (
        <FooterConteiner>
            <FooterWrapper>
                    <a href="https://github.com/NataliaBeckstead" target="_blank"><i class="fab fa-github"></i></a>
                    <a href="https://www.linkedin.com/in/natalia-beckstead/" target="_blank"><i class="fab fa-linkedin-in"></i></a>
                    <a href="https://www.instagram.com/toosphoto/" target="_blank"><i class="fab fa-instagram"></i></a>
            </FooterWrapper>
        </FooterConteiner>
    )
}

export default Footer;

const FooterConteiner = styled.div `
    display: flex;
    justify-content: center;
    margin-top: 3rem;
    margin-bottom: 3rem;
`

const FooterWrapper = styled.div `
    width: 80%;
    @media (max-width: 500px) {
        width: 95%;
    }
`