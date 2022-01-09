import React from "react"
import styled from "styled-components"
import VsLogo from "../images/vss.png"
import PhLogo from "../images/ph.png"
import IllustrLogo from "../images/ill.png"

const Skills = () => {
    return (
        <SkillsConteiner id="skills">
            <SkillsWrapper>
                <h2>Skills/Expertise</h2>
                <h3>Web Development</h3>
                <div>
                    <i class="fab fa-html5 f"></i>
                    <i class="fab fa-css3-alt f"></i>
                    <i class="fab fa-js f"></i>
                    <i class="fab fa-less f"></i>
                    <i class="fab fa-react f"></i>
                    <i class="fab fa-git-alt f"></i>
                    <i class="fab fa-python f"></i>
                </div>
                <h3>Tools</h3>
                <div>
                    <img src={VsLogo} alt="logo of Visual Studio Code" className="f"/>
                    <img src={PhLogo} alt="logo of Visual Studio Code" className="f"/>
                    <img src={IllustrLogo} alt="logo of Visual Studio Code" className="f"/>
                </div>
            </SkillsWrapper>
        </SkillsConteiner>
    )
}

export default Skills;

const SkillsConteiner = styled.div `
    display: flex;
    justify-content: center;
    margin-bottom: 1rem;
`

const SkillsWrapper = styled.div `
    width: 80%;
    @media (max-width: 500px) {
        width: 95%;
    }
`