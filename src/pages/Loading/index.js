import { Container, Spinner } from "components";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

const Title = styled.h1`
    font-size: 64px;
    font-weight: bold;
    margin: 8px;
    margin-bottom: 96px;
    text-align: center;
`;

const getCode = (score) => {
    let cCode;
    if(score > 75) {
        cCode = "elon";
    } else if (score > 50) {
        cCode = "kimbal";
    } else if (score > 25) {
        cCode = "bezos";
    } else {
        cCode = "timemachine";
    }
    return cCode;
};

const Loading = ({convertedScore}) => {
    const [title, setTitle] = useState("결과 분석중");
    const navigate = useNavigate();
    const cCode = getCode(convertedScore);

    useEffect(() => {
        const id = setTimeout(() => {
            setTitle((title) => title + ".");
        }, 700);
        return () => clearTimeout(id);
    }, [title]);

    useEffect(() => {
        setTimeout(() => navigate(`/result/${cCode}`), 2000);
    }, [navigate, cCode]);

    return (
        <Container>
            <Title>{title}</Title>
            <Spinner></Spinner>
        </Container>
    );
};

export default Loading;