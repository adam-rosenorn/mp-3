import styled from "styled-components";
import { Link } from "react-router";

const StyledFooter = styled.footer`
    background-color: #2185D5;
    color: #F3F3F3;
    border-top: 2px solid #C7EEFF;
    border-right: 4px solid #C7EEFF;
    border-bottom: 4px solid #C7EEFF;
    border-left: 4px solid #C7EEFF;
    padding: 0.5%;
`;

export default function Footer() {
    return (
        <StyledFooter>
            <p>&#169; All rights reserved <Link to={""}>Credits</Link></p>
        </StyledFooter>
    )
}