import styled from "styled-components";
import { StyledMain } from "../styled-components";

const StyledHeader = styled.h2`
    padding: 2%;
    font-size: calc(4px + 1vh + 1vw);
    margin-bottom: 5%;
`;

const StyledH4 = styled.h4`
    padding: 2%;
    margin-bottom: 3%;
`;

const StyledTable = styled.table`
    border:  3px solid #303841;
    margin: auto;
    max-width: 85%;
    background-color: #C7EEFF;
`;

const StyledHeadElement = styled.th`
    border:  3px solid #303841;
    height: 8vh;
    width: 10vw;
    font-size: calc(2px + 0.6vw + 0.6vh);
    background-color: #2185D5;
    color: #F3F3F3;
    
    @media screen and (max-width: 850px){
        width: 20vw;
    }
`;

const StyledBodyElement = styled.td`
    border:  3px solid #303841;
    height: 15vh;
    font-size: calc(2px + 0.6vw + 0.6vh);
    background-color: #2185D5;
    color: #F3F3F3;
`;






export default function References() {
    return (
        <StyledMain>
            <StyledHeader>References</StyledHeader>
            <StyledH4>Here are some people you can contact if you want to know more about me or just get a professional's approval</StyledH4>
            <StyledTable>
                <thead>
                    <tr>
                        <StyledHeadElement>Name</StyledHeadElement>
                        <StyledHeadElement>Relation</StyledHeadElement>
                        <StyledHeadElement>Email</StyledHeadElement>
                        <StyledHeadElement>Number</StyledHeadElement>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <StyledBodyElement>Thomas</StyledBodyElement>
                        <StyledBodyElement>Boss</StyledBodyElement>
                        <StyledBodyElement>example@mail.dk</StyledBodyElement>
                        <StyledBodyElement>+4512345678</StyledBodyElement>
                    </tr>
                    <tr>
                        <StyledBodyElement>Raul</StyledBodyElement>
                        <StyledBodyElement>Former professor</StyledBodyElement>
                        <StyledBodyElement>example@mail.com</StyledBodyElement>
                        <StyledBodyElement>+4587654321</StyledBodyElement>
                    </tr>
                </tbody>
            </StyledTable>
        </StyledMain>
    )
}