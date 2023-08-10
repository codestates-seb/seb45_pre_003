import { ContainerStyle } from "../style";
import LeftBar from './LeftBar';
import Content from "./Content";

function Container () {
    return (
        <ContainerStyle>
            <LeftBar/>
            <Content/>
        </ContainerStyle>
    )
}

export default Container;