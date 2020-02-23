import React from "react";
import styled from "styled-components";
import PicM from "../images/mp.jpg";
import Nasa from "../images/ns.jpg";

const ProjectsConteiner = styled.div `
    display: flex;
    justify-content: center;
`;

const ProjectsWrapper = styled.div `
    width: 80%;
`;

const CardHodor = styled.div `
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const Card = styled.div `
    width: 45%;
    background-color: rgba(255, 255, 255, 0.5);
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    border-radius: 12px;
    padding: 1%;
    margin-bottom: 2rem;
    @media (max-width: 800px) {
        flex-direction: column;
        width: 100%;
      }
`;

const SkillHodor = styled.div `
    display: flex;
    flex-wrap: wrap;
`;

const Skill = styled.div `
    background-color: #376f9e;
    color: rgb(230, 230, 230);
    font-size: 1.5rem;
    margin-left: 1rem;
    border-radius: 16px;
    padding: 0.2rem 0.5rem 0.3rem 0.5rem;
    margin-top: 0.5rem;
`;

const Photo = styled.img `
    max-width: 100%;
    height: auto;
    border-radius: 12px;
`;


const Projects = () => {
    return (
        <ProjectsConteiner>
            <ProjectsWrapper>
                <h2>Projects</h2>
                <CardHodor>
                    <Card>
                        <a href="https://github.com/NataliaBeckstead/nasa-photo-of-the-day"><h3>NASA: Photo of the day</h3></a> 
                        <Photo src={Nasa} alt="Space photo from NASA"></Photo>
                        <a href="https://clever-fermi-ec1eb6.netlify.com"><p class="click">Click to see site</p></a>
                        <a href="https://github.com/NataliaBeckstead/nasa-photo-of-the-day"><p class="click">Click to see code</p></a>
                        <p>Web application which allows you to choose any day, and enjoy increadible photos, released by NASA on that day.</p>
                        <SkillHodor>
                            <Skill>React</Skill>
                            <Skill>NASA APOD API</Skill>
                            <Skill>axios</Skill>
                            <Skill>Styled components</Skill>
                        </SkillHodor>
                    </Card>
                    <Card>
                        <a href="https://github.com/Build-week-picmetric2/Marketing-Page"><h3>PicMetrick2</h3></a> 
                        <Photo src={PicM} alt="image of PicMetrick site"></Photo>
                        <a href="https://zealous-leakey-6d3a4f.netlify.com"><p class="click">Click to see site</p></a>
                        <a href="https://github.com/Build-week-picmetric2/Marketing-Page"><p class="click">Click to see code</p></a>
                        <p>Marketing page for PicMetrik2 application.</p>
                        <SkillHodor>
                            <Skill>HTML</Skill>
                            <Skill>CSS</Skill>
                            <Skill>Less</Skill>
                        </SkillHodor>
                    </Card>
                </CardHodor>
            </ProjectsWrapper>
        </ProjectsConteiner>
    );
};

export default Projects;