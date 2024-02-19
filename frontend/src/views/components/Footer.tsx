import { TextContent } from "../../constants/texts/TextContent.ts";

export default function Footer() {
    return (
        <footer className="footer_sandbox">
            <div className="text-body-blackShade1">
                {TextContent.FOOTER_NAME}
            </div>
        </footer>
    )
}
