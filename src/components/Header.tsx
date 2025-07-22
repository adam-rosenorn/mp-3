import styled from "styled-components";

const StyledHeader = styled.header`
    background-color: #2185D5;
    color: #F3F3F3;
    border-bottom: 2px solid #C7EEFF;
    border-right: 4px solid #C7EEFF;
    border-left: 4px solid #C7EEFF;
    border-top: 4px solid #C7EEFF;
    padding: 1%;
    text-align: left;
    
    @media screen and (max-width: 850px){
        text-align: center;
    }
`;

const StyledWideParagraph = styled.p`
    
    @media screen and (max-width: 850px){
        display: none;
    }
`;

const StyledNarrowParagraph = styled.p`
    display: none;

    @media screen and (max-width: 850px){
        display: block;
    }
`;




export default function Header() {
    return (
        <StyledHeader>
            <h1>Adam Rosenorn</h1>
            <StyledWideParagraph id="wide-header">Hi and welcome to my resume, here you can learn a little bit about me</StyledWideParagraph>
            <StyledNarrowParagraph id="narrow-header">Welcome to my online resume</StyledNarrowParagraph>
        </StyledHeader>
    )
}