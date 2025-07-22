import { StyledMain } from "../styled-components";
import { useState } from "react";
import Calculator from "../Calculator.ts";
import styled from "styled-components";


const StyledHeader = styled.h2`
    padding: 2%;
    font-size: calc(4px + 1vh + 1vw);
    margin-bottom: 6%;
`;

const StyledNumber = styled.input`
    height: calc(5vw + 3vh);
    width: calc(5vw + 3vh);
    background-color: #2185D5;
    text-align: center;
    margin-top: 10%;
    margin-right: 8%;
    margin-bottom: 10%;
    margin-left: 8%;
    color: #F3F3F3;
    border-top: 2px solid #C7EEFF;
    border-right: 2px solid #C7EEFF;
    border-bottom: 2px solid #C7EEFF;
    border-left: 2px solid #303841;
    font-size: calc(2px + 1vh + 1vw);
    
    @media screen and (max-width: 850px){
        height: calc(5vw + 9vh);
        width: calc(5vw + 9vh);
        font-size: calc(2px + 2vh + 1vw);
        margin-bottom: 15%;
    }
`;

const StyledButton = styled.button`
    background-color: #2185D5;
    color: #F3F3F3;
    border-top: 2px solid #C7EEFF;
    border-right: 2px solid #C7EEFF;
    border-bottom: 2px solid #C7EEFF;
    border-left: 2px solid #303841;
    height: calc(2vw + 1vh);
    width: calc(2vw + 1vh);
    text-align: center;
    margin-bottom: 3%;
    
    @media screen and (max-width: 850px){
        height: calc(1vw + 5vh);
        width: calc(1vw + 5vh);
        margin-bottom: 8%;
    }
`;

const StyledCalculator = styled.div`
    display: flex;
    flex-direction: column;
`;

const StyledResult = styled.h3<{ value: number }>`
    font-size: calc(2px + 1vh + 1vw);
    color: ${props => {
    if (props.value > 0) {
        return "green";
    } 
    else if (props.value < 0) {
        return "red";
    } 
    else {
        return "black";
    }
    }};
    
    @media screen and (max-width: 850px){
        font-size: calc(2px + 2vh + 1vw);
    }
`;

const StyledClear = styled.button`
    width: calc(4vw + 1vh);
    background-color: #2185D5;
    color: #F3F3F3;
    border-top: 2px solid #C7EEFF;
    border-right: 2px solid #C7EEFF;
    border-bottom: 2px solid #C7EEFF;
    border-left: 2px solid #303841;
    height: calc(2vw + 1vh);
    text-align: center;
    margin-bottom: 3%;

    @media screen and (max-width: 850px){
        height: calc(1vw + 5vh);
        margin-bottom: 8%;
        width: calc(1vw + 10vh);
    }
`;


export default function Projects() {

    const [firstNumber, setFirstNumber] = useState("");
    const [secondNumber, setSecondNumber] = useState("");
    const [result, setResult] = useState("");

    function clear() {
        setFirstNumber("");
        setSecondNumber("");
        setResult("");
    }

    return (
        <StyledMain>
            <StyledHeader>Projects</StyledHeader>
            <h3>Calculator</h3>
            {/* There is missing some spacing between the numbers and the buttons that is there in the mp-1,
            but I don't really know it isn't doing the same here. But other than that every thing is the same.
            */}
            <StyledCalculator>
                <div>
                    <StyledNumber
                        value={firstNumber}
                        onChange={(e) => setFirstNumber(e.target.value)}
                    />
                    <StyledNumber
                        value={secondNumber}
                        onChange={(e) => setSecondNumber(e.target.value)}
                    />
                </div>
                {/* I am not quite sure if this is the proper way to do the calculator,
                 but I thought it was a fun way to do it.
                */}
                <div>
                    <StyledButton onClick={() => setResult(Calculator("+", firstNumber, secondNumber))}>+</StyledButton>
                    <StyledButton onClick={() => setResult(Calculator("-", firstNumber, secondNumber))}>-</StyledButton>
                    <StyledButton onClick={() => setResult(Calculator("*", firstNumber, secondNumber))}>*</StyledButton>
                    <StyledButton onClick={() => setResult(Calculator("/", firstNumber, secondNumber))}>/</StyledButton>
                    <StyledButton onClick={() => setResult(Calculator("**", firstNumber, secondNumber))}>**</StyledButton>
                    <StyledClear onClick={clear}>Clear</StyledClear>
                    <StyledResult value={Number(result)}>{result}</StyledResult>
                </div>
            </StyledCalculator>
        </StyledMain>
    )
}