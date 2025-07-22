import styled from "styled-components";
import { StyledMain, StyledAlign, StyledText, StyledLogo } from "../styled-components.ts";

const StyledHeader = styled.h2`
    padding: 2%;
    font-size: calc(4px + 1vh + 1vw);
`;


export default function Volunteering() {
    return (
        <StyledMain>
            <StyledHeader>Volunteering</StyledHeader>
            <StyledAlign>
                <StyledLogo src="public/hb.jpg" alt="Humlebaek Boldklubs's logo"/>
                <StyledText>
                    <h3>Summer Camp Coach | Humlebæk Boldklub</h3>
                    <p>Summer 2018 and Summer 2019</p>
                    <p>
                        Helped run a soccer camp for young kids
                    </p>
                </StyledText>
            </StyledAlign>
            <StyledAlign>
                <StyledLogo src="public/bread-of-life.jpg" alt="Bread of Life's logo"/>
                <StyledText>
                    <h3>Volunteer Helper | Bread of Life - Malden, MA</h3>
                    <p>March 2022 - May 2022</p>
                    <p>
                        Volunteered at a food bank in Malden, MA.
                    </p>
                </StyledText>
            </StyledAlign>
            <StyledAlign>
                <StyledLogo src="public/itu.jpg" alt="IT University of Copenhagen's logo"/>
                <StyledText>
                    <h3>Tutor | IT University of Copenhagen</h3>
                    <p>Summer/Fall 2024</p>
                    <p>
                        Helped new students with their study start. Arranged and organized events and games.
                    </p>
                </StyledText>
            </StyledAlign>
        </StyledMain>
    )
}