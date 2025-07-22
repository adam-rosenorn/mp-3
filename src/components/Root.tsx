import { Route, Routes } from "react-router";
import styled from "styled-components";
import Nav from "./Nav.tsx";
import Header from "./Header.tsx";
import Footer from "./Footer.tsx";
import Home from "./mains/Home.tsx";
import Education from "./mains/Education.tsx";
import Employment from "./mains/Employment.tsx";
import Volunteering from "./mains/Volunteering.tsx";
import References from "./mains/References.tsx";
import Projects from "./mains/Projects.tsx";


const Wrapper = styled.div`
    width: 85vw;
    margin: auto;
    background-color: #F3F3F3;
`;

const Container = styled.div`
    display: flex;
    flex-direction: row;
    
    @media screen and (max-width: 850px){
        display: flex;
        flex-direction: column;
    }
`;



export default function Root() {
    return(
        <Wrapper>
            <Header />
            <Container>
                <Nav />
                <Routes>
                    <Route
                        path={`/`}
                        element={<Home />}
                    />
                    <Route
                        path={`/education.html`}
                        element={<Education />}
                    />
                    <Route
                        path={`/employment.html`}
                        element={<Employment />}
                    />
                    <Route
                        path={`/projects.html`}
                        element={<Projects />}
                    />
                    <Route
                        path={`/volunteering.html`}
                        element={<Volunteering />}
                    />
                    <Route
                        path={`/references.html`}
                        element={<References />}
                    />
                </Routes>
            </Container>
            <Footer />
        </Wrapper>
    )
}