import {Button, Container, ResultSection} from "components";
import { useParams } from "react-router";

const Result = ({convertedScore, setScore}) => {
    
    const { cCode } = useParams();

    return (
        <Container>
            <ResultSection cCode={cCode}/>
            <Button to="/" onClick={() => setScore(0)}>테스트 다시하기</Button>
        </Container>
    );
};

export default Result;

