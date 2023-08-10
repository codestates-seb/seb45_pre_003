import { ContentStyle } from "../style";
import MainBar from "./MainBar";
import RightBar from "./RightBar";

function Content () {
    return (
        <ContentStyle>
            <MainBar></MainBar>
            <RightBar></RightBar>
        </ContentStyle>
    )
}

export default Content;