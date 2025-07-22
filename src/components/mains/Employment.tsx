import styled from "styled-components";
import { StyledMain, StyledAlign, StyledText, StyledLogo } from "../styled-components.ts";


const StyledHeader = styled.h2`
    padding: 2%;
    margin-bottom: 5%;
    font-size: calc(4px + 1vh + 1vw);
`;

export default function Employment() {
    return (
        <StyledMain>
            <StyledHeader>Employment</StyledHeader>
            <StyledAlign>
                <StyledLogo src="public/itu.jpg" alt="IT University of Copenhagen's logo"/>
                <StyledText>
                    <h3>Teaching Assistant | IT University of Copenhagen</h3>
                    <p>Fall 2024</p>
                    <p>
                        Responsible for the course <b>Linear Algebra and Optimization</b>.
                        Helped students with their homework and assignments.
                    </p>
                </StyledText>
            </StyledAlign>
            <StyledAlign>
                <StyledLogo src="public/hovmand.jpg" alt="Hovmand's logo"/>
                <StyledText>
                    <h3>Student Assistant in Digitalization and IT | Hovmand</h3>
                    <p>March 2025 - Present</p>
                    <p>
                        Responsible for maintaining and creating different internal services, both front and back end, using languages such as Python, Golang, SQL, etc.
                        Leading the company in becoming a more data-driven company.
                    </p>
                </StyledText>
            </StyledAlign>
        </StyledMain>
    )
}
