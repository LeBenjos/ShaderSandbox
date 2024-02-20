import { HTMLAttributes } from "react"
import { TextContent } from "../../constants/texts/TextContent.ts"

type Props = HTMLAttributes<HTMLDivElement> & {
    className?: string,
    text: TextContent,
}

export default function Poppin({ className, text, ...props }: Props) {
    return <div {...props} className={`${className ? className : ""} poppin`}>
        <p className="text-small-whiteBasic-uppercase">{text}</p>
    </div>
}
