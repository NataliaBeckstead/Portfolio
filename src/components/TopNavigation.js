import React from "react";
import styled from "styled-components";

const NavContainer = styled.div `
    display: flex;
    width: 50%;
    justify-content: space-around;
`;


const TopNavigation = () => {
    return (
        <NavContainer>
            <nav>
                <ul>
                    <li><a href='#about'>About</a></li>
                    <li><a href='#skills'>Skills/Expertise</a></li>
                    <li><a href='#projects'>Projects</a></li>
                </ul>
            </nav>
        </NavContainer>
    );
};

export default TopNavigation;