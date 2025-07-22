import styled from "styled-components";
import { Link } from "react-router";

const StyledNav = styled.nav`
    background-color: #303841;
    width: 30%;
    border-right: 2px solid #C7EEFF;
    border-top: 2px solid #C7EEFF;
    border-bottom: 2px solid #C7EEFF;
    border-left: 4px solid #C7EEFF;
    max-height: 100vh;
    
    @media screen and (max-width: 850px){
        width: 100%;
        border-right: 4px solid #C7EEFF;
        height: 40px;
    }
`;

const StyledList = styled.ul`
    padding-left: 0;
    list-style: none;
    display: flex;
    flex-direction: column;
    
    @media screen and (max-width: 850px){
        flex-direction: row;
    }
`;

const StyledListItem = styled.li`
    border-right: 2px solid #C7EEFF;
    border-bottom: 2px solid #C7EEFF;
    border-left: 2px solid #C7EEFF;
    border-top: 2px solid #C7EEFF;
    text-align: center;
    margin: 5vh auto;
    width: 70%;
    background-color: #2185D5;
    
    @media screen and (max-width: 850px){
        margin: 5px 0 auto;
        border-left: 2px solid #303841;
    }
`;

const StyledLink = styled(Link)`
    padding: 1% 2%;
    text-decoration: none;
    color: #F3F3F3;
    font-size: calc(2px + 1vw + 1vh);
    
    @media screen and (max-width: 850px){
        padding: 0 1%;
        text-decoration: none;
        color: #F3F3F3;
        font-size: calc(4px + 1vw);
    }
`;




export default function Nav() {
    return (
        <StyledNav>
            <StyledList>
                <StyledListItem>
                    <StyledLink to={`/`}>Home</StyledLink>
                </StyledListItem>
                <StyledListItem>
                    <StyledLink to={`/education.html`}>Education</StyledLink>
                </StyledListItem>
                <StyledListItem>
                    <StyledLink to={`/employment.html`}>Employment</StyledLink>
                </StyledListItem>
                <StyledListItem>
                    <StyledLink to={`/projects.html`}>Projects</StyledLink>
                </StyledListItem>
                <StyledListItem>
                    <StyledLink to={`/volunteering.html`}>Volunteering</StyledLink>
                </StyledListItem>
                <StyledListItem>
                    <StyledLink to={`/references.html`}>References</StyledLink>
                </StyledListItem>
            </StyledList>
        </StyledNav>
    )
}