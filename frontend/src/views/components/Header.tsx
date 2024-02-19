import { HTMLAttributes, ReactElement } from "react";
import { Link } from "react-router-dom";
import { PagePath } from "../../constants/paths/PagePath.ts";
import { TextContent } from "../../constants/texts/TextContent.ts";
import TinyLogo from "./TinyLogo.tsx";

type Props = HTMLAttributes<HTMLDivElement> & {
    currentPage: PagePath;
}

export default function Header({ currentPage, ...props }: Props): ReactElement<HTMLDivElement> {
    return <header {...props} className="headerSandbox">
        <div className="headerLeft">
            <h1 className="text-titleH2-blackBasic-uppercase">
                <Link to={PagePath.HOME}>{TextContent.H1_TITLE}</Link>
            </h1>
            <nav className="headerNav">
                <Link to={PagePath.SANDBOX} className={`${currentPage === PagePath.SANDBOX ? "linkActive" : ""} text-body-blackShade2-lowercase link`}>
                    {TextContent.BUTTON_GO_TO_SANDBOX}
                </Link>
                <Link to={PagePath.LIBRARY} className={`${currentPage === PagePath.LIBRARY ? "linkActive" : ""} text-body-blackShade2-lowercase link`}>
                    {TextContent.BUTTON_GO_TO_LIBRARY}
                </Link>
            </nav>
        </div>
        <div className="headerRight">
            <TinyLogo />
        </div>
    </header>
}
