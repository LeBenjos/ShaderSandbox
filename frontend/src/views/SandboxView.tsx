import { ReactElement } from "react";
import { PagePath } from "../constants/paths/PagePath.ts";
import Footer from "./components/Footer.tsx";
import Header from "./components/Header.tsx";

export default function SandboxView(): ReactElement<HTMLDivElement> {
    return <div>
        <Header currentPage={PagePath.SANDBOX} />
        <div className="sandboxContainer">

        </div>
        <Footer />
    </div>
}
