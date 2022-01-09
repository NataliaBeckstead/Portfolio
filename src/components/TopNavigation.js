import React from "react"
import styled from "styled-components"

const TopNavigation = () => {
    return (
        <nav>
            <NavContainer>
                <NavItem><a href='#about'>About</a></NavItem>
                <NavItem><a href='#skills'>Skills</a></NavItem>
                <NavItem><a href='#projects'>Projects</a></NavItem>
            </NavContainer>
        </nav>
    )
}

export default TopNavigation

const NavContainer = styled.ul `
    display: flex;
    width: 50%;
    justify-content: space-around;
    margin-top: 4rem;
    margin-bottom: 0;
`

const NavItem = styled.li `
    list-style-type:none;
`