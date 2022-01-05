import React from 'react'
import styled from 'styled-components'

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
        <AboutContainer id='about'>
            <Wrapper>
                <h2>About me</h2>
                <p>Greetings. My name is Natalia Beckstead and I'm a full stack web developer with a background in commercial and art photography. 
                    Because of my background in art, I'm passionate about great designs and beautiful colors. I'm also strong with HTML, CSS, Sass, 
                    Less, JavaScript, React, Redux, Node, SQL, Python, Photoshop, Illustrator, Slack, Trello. I served as a professional photographer 
                    for years which developed my communication and time-management skills to a huge degree.</p>
            </Wrapper>
        </AboutContainer>
    );
};

export default About;