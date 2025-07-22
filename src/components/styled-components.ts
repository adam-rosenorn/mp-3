import styled from "styled-components";


export const StyledMain = styled.main`
    height: 100vh;
    width: 70%;
    text-align: center;
    border-left: 2px solid #C7EEFF;
    border-top: 2px solid #C7EEFF;
    border-bottom: 2px solid #C7EEFF;
    border-right: 4px solid #C7EEFF;
    
    @media screen and (max-width: 850px){
        width: 100%;
        border-left: 4px solid #C7EEFF;
    }
`;

export const StyledAlign = styled.div`
    display: flex;
    flex-direction: row;
    border-bottom: 2px solid #303841;
    margin-bottom: 5%;
`;

export const StyledText = styled.div`
    text-align: center;
    margin:  auto;
    font-size: calc(2px + 0.5vh + 0.5vw);
    padding: 2%;
`;

export const StyledLogo = styled.img`
    max-width: 20%;
    margin-left: 2%;
    padding: 2%;
    border-right: 2px solid #303841;
    
    @media screen and (max-width: 850px){
        max-width: 30%;
    }
`;