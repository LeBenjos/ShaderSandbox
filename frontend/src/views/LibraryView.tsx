import { Link } from "react-router-dom";
import { PagePath } from "../constants/paths/PagePath.ts";

export default function LibraryView() {
    return (<>
        Library
        <br />
        <Link to={PagePath.HOME}>
            go to home
        </Link>
        <Link to={PagePath.SANDBOX + '4'}>
            go to shader 4
        </Link>
    </>
    )
}
