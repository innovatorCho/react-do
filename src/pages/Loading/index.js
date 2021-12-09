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

const Loading = () => {
    const [title, setTitle] = useState("결과 분석중");
    const navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => {
            setTitle((title) => title + ".");
        }, 700);
    }, [title]);

    return (
        <Container>
            <Title>{title}</Title>
            <Spinner></Spinner>
        </Container>
    );
};

export default Loading;