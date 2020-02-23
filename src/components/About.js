import React from "react";
import styled from "styled-components";

const AboutContainer = styled.div `
    display: flex;
    justify-content: center;
    margin-bottom: 4rem;
    margin-top: 4rem;
`;

const Wrapper = styled.div `
    width: 80%;
    @media (max-width: 500px) {
        width: 95%;
    }
`;

const About = () => {
    return (
        <AboutContainer>
            <Wrapper>
                <h2>About me</h2>
                <p>I'm currently a student at Lambda School studying to be a web developer. Prior to my coding journey I spent the past 
                    10 years working as a photographer. I gravitate towards work that allows me to express my ideas in a creative way. I am happy to have found coding as another means for me to challenge myself in a form of creative expression.
                    I will complete my training later this year and will be excited to continue my career working in the tech industry.</p>
            </Wrapper>
        </AboutContainer>
    );
};

export default About;