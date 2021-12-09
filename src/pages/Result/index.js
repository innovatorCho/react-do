import {Button, Container, ResultSection} from "components";
import { Link } from "react-router-dom";
import { QUIZZES } from "../../constants";


const Result = ({score, setScore}) => {
    const convertedScore = Math.floor((score / QUIZZES.length) * 100);

    return (
        <Container>
            <ResultSection convertedScore={convertedScore}/>
            <Button to="/" onClick={() => setScore(0)}>테스트 다시하기</Button>
        </Container>
    );
};

export default Result;

