import styled from "styled-components";
import { StyledMain, StyledAlign, StyledText, StyledLogo } from "../styled-components.ts";

const StyledHeader = styled.h2`
    padding: 2%;
    margin-bottom: 5%;
    font-size: calc(4px + 1vh + 1vw);
`;



export default function Education() {
    return (
        <StyledMain>
            <StyledHeader>Education</StyledHeader>
            <StyledAlign>
                <StyledLogo src="public/eg.jpg" alt="Espergaerde Gymnasium's logo"/>
                <StyledText>
                    <h3>Espergærde Gymnasium | 2018-2021</h3>
                    <p>Upper Secondary Education in Espergærde, Denmark</p>
                </StyledText>
            </StyledAlign>
            <StyledAlign>
                <StyledLogo src="public/itu.jpg" alt="IT University of Copenhagen's logo"/>
                <StyledText>
                    <h3>IT University of Copenhagen | 2022-Now</h3>
                    <p>Bachelor of Science in Data Science. Copenhagen, Denmark</p>
                </StyledText>
            </StyledAlign>
        </StyledMain>
    )
}