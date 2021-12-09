import React from "react";
import styled from "styled-components";
import RESULT from "./result";

/*
const ResultTitle = styled.h1`
    font-size: 64px;
    font-weight: bold;
    margin-bottom: 8px;
    text-align: center;
`;

const Score = styled.p`
    font-size: 192px;
    margin: 40px;
    text-align: center;
    color: ${(props) => props.theme.primaryColor100};
`;
*/

const SectionTitle = styled.h1`
    font-size: 64px;
    font-weight: bold;
    margin-top: 0px;
    margin-bottom: 56px;
    text-align: center;
`;

const ResultTitle = styled.div`
    font-size: 24px;
    margin-bottom: 56px;
    text-align: center;
`;

const StyleImage = styled.img`
    border-radius: 16px;
    opacity: 80%;
    margin-bottom: 16px;
    max-width: 100%;
    display: block;
`;

const ResultSection = ({cCode}) => 
(    <>
        <SectionTitle>당신은 혹시</SectionTitle>
        <StyleImage src={RESULT[cCode].src} />
        <ResultTitle>{RESULT[cCode].title}</ResultTitle>
    </>
);

export default ResultSection;