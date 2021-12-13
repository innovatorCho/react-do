import {Button, Container, ResultSection} from "components";
import { useParams } from "react-router";

import { Helmet } from "react-helmet";
import RESULT from "components/ResultSection/result";

const Result = ({ setScore }) => {
    
    const { cCode } = useParams();
    const currentUrl = window.document.href;

    return (
        <>
            {/** URL 정보*/}
            <meta property="og:url" centent={currentUrl} />
            {/** title 정보 */}
            <meta property="og:title" content={RESULT[cCode]["ogTitle"]} />
            {/** 페이지 상세정보 */}
            <meta property="og:description" content={RESULT[cCode]["ogDescription"]} />
            {/** 페이지 대표 이미지 정보 */}
            <meta property="og:image" content={RESULT[cCode]["ogImage"]} />
            {/** 트위터 메타 정보 */}
            <meta property="twitter:title" content={RESULT[cCode]["ogTitle"]} />
            <meta property="twitter:description" content={RESULT[cCode]["ogDescription"]} />
            <meta property="twitter:image" conten={RESULT[cCode]["ogImage"]} />
            <Container>
                <ResultSection cCode={cCode}/>
                <Button to="/" onClick={() => setScore(0)}>테스트 다시하기</Button>
            </Container>
        </>
    );
};

export default Result;

