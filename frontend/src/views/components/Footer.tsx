import { HTMLAttributes, ReactElement } from "react";
import { TextContent } from "../../constants/texts/TextContent.ts";

type Props = HTMLAttributes<HTMLDivElement>;

export default function Footer({ className, ...props }: Props): ReactElement<HTMLDivElement> {
    return <footer className={`${className} footerSandbox`} {...props}>
        <div className="text-body-blackShade1">
            {TextContent.FOOTER_NAME}
        </div>
    </footer>
}
