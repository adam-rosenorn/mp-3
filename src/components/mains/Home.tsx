import styled from "styled-components";
import { StyledMain } from "../styled-components";
import { Link } from "react-router";

const StyledHeader = styled.h2`
    padding: 2%;
    font-size: calc(4px + 1vh + 1vw);
`;

const StyledMainText = styled.h5`
    padding: 2%;
    font-size: calc(4px + 0.9vh + 0.4vw);
    
    @media screen and (max-width: 850px){
        padding: 5%;
        
    }
`;

const StyledImage = styled.img`
    max-width: 100%;
    max-height: 60%;
    margin: auto;
    
    @media screen and (max-width: 850px){
        max-width: 50%;
    }
`;


export default function Home() {
    return (
        <>
            <title>Home | Resume</title>
            <StyledMain>
                <StyledHeader>Home</StyledHeader>
                <StyledImage src="public/main-photo.jpg" alt="Adam Rosenorn"/>
                <StyledMainText>
                    My name is Adam Rosenorn, and I am a student at the <strong>IT University of Copenhagen</strong>,
                    where I am almost done with my Bachelor's degree in <strong>Data Science</strong>.
                    This summer i will be attending summer school at Boston University.
                </StyledMainText>
                <StyledMainText>
                    I am currently working as a student assistant at <strong>Hovmand</strong>, where I am helping out with
                    some
                    internal websites and bettering our use of data. If you have any questions, offers or just want to say
                    hi, feel free to <Link to={""}>contact me</Link>.
                </StyledMainText>
            </StyledMain>
        </>
    )
}