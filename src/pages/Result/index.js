import Button from "../../components/Button";
import Container from "../../components/Container";
import ResultSection from "../../components/ResultSection";
import { Link } from "react-router-dom";
import { QUIZZES } from "../../constants";


const Result = ({score, setScore}) => {
    const convertedScore = Math.floor((score / QUIZZES.length) * 100);

    return (
        <Container>
            <ResultSection convertedScore={convertedScore}/>
            <Link to="/">
                <Button text="테스트 다시하기" onClick={() => setScore(0)}></Button>
            </Link>
        </Container>
    );
};

export default Result;

