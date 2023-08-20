import { ContainerStyle } from "../style";
import LeftBar from "./LeftBar";
import { HomePageMainBarStyle } from "./homepage/HomePage.style";



function PageNotFound () {
    return (
    <>
        <ContainerStyle>
            <HomePageMainBarStyle>
                <h1>Page Not Found</h1>
            </HomePageMainBarStyle>
        </ContainerStyle>
    </>
    )
}

export default PageNotFound;