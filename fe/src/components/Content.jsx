import { Routes } from "react-router-dom";
import { ContentStyle } from "../style";
import MainBar from "./MainBar";
import RightBar from "./RightBar";

function Content () {
    return (
        <ContentStyle>
            <Routes>
                <MainBar></MainBar>
                <RightBar></RightBar>
            </Routes>
        </ContentStyle>
    )
}

export default Content;