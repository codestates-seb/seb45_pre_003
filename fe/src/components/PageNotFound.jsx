import { Link } from "react-router-dom";
import { ContainerStyle } from "../style";
import LeftBar from "./LeftBar";
import { HomePageMainBarStyle } from "./homepage/HomePage.style";



function PageNotFound () {
    return (
    <>
        <ContainerStyle>
            <HomePageMainBarStyle>
                <h1>Page Not Found</h1>
                <Link to={"/"}><h2>Home</h2></Link>
            </HomePageMainBarStyle>
        </ContainerStyle>
    </>
    )
}

export default PageNotFound;