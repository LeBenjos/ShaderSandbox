import { Link } from "react-router-dom";
import { PagePath } from "../constants/paths/PagePath.ts";
import { TextContent } from "../constants/texts/TextContent.ts";
import Footer from "./components/Footer.tsx";
import HomeLogo from "./components/HomeLogo.tsx";

export default function HomeView() {
    return (<div className="homeView">
        <div className="homeContainer">
            <h1 className="text-titleH1-blackBasic-uppercase">{TextContent.H1_TITLE}</h1>
            <nav className="navHome">
                <Link to={PagePath.SANDBOX} className="text-body-blackShade2-lowercase">
                    {TextContent.BUTTON_GO_TO_SANDBOX}
                </Link>
                <Link to={PagePath.LIBRARY} className="text-body-blackShade2-lowercase">
                    {TextContent.BUTTON_GO_TO_LIBRARY}
                </Link>
            </nav>
            <HomeLogo />
        </div>
        <Footer />
    </div>)
}
