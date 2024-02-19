import { HTMLAttributes, ReactElement } from "react";
import { Link } from "react-router-dom";
import { PagePath } from "../../constants/paths/PagePath.ts";
import { TextContent } from "../../constants/texts/TextContent.ts";
import Shader from "../../models/Shader.ts";

type Props = HTMLAttributes<HTMLDivElement> & {
    shader: Shader
}

export default function ShaderCard({ shader }: Props): ReactElement<HTMLDivElement> {

    return <div className="libraryCard">
        <img src="/assets/images/defaultPoster.png" alt="shader image" />
        <div className="cardFooter">
            <h2 className="text-titleH4-blackShade1">{shader.title}</h2>
            <p className="text-small-blackShade2">{TextContent.BY} {shader.author}</p>
            <Link to={`${PagePath.SANDBOX}${shader.id}`} className="iconLink" >
                <img src="/assets/icons/editIcon.svg" alt="edit shader icon" />
            </Link>
        </div>
    </div>
}
