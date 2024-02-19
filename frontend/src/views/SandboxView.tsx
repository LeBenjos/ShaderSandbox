import { Link } from "react-router-dom";
import { PagePath } from "../constants/paths/PagePath.ts";

export default function SandboxView() {
    return (
        <>
            Sandbox
            <br />
            <Link to={PagePath.HOME}>
                go to home
            </Link>
            <Link to={PagePath.LIBRARY}>
                go to library
            </Link>
        </>
    )
}
