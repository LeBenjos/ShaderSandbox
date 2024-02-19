import { ChangeEvent, useEffect, useRef } from "react";
import { TextContent } from "../../constants/texts/TextContent.ts";

type Props = {
    title: string,
    author: string,
    setTitle: React.Dispatch<React.SetStateAction<string>>,
    setAuthor: React.Dispatch<React.SetStateAction<string>>,
    setPassword: React.Dispatch<React.SetStateAction<string>>,
}

export default function InformationSandbox({ title, author, setTitle, setAuthor, setPassword }: Props) {
    const titleRef = useRef<HTMLInputElement>(null);
    const authorRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);

    const handleTitleChange = (e: ChangeEvent): void => {
        setTitle((e.target as HTMLInputElement).value);
    }

    const handleAuthorChange = (e: ChangeEvent): void => {
        setAuthor((e.target as HTMLInputElement).value);
    }

    const handlePasswordChange = (e: ChangeEvent): void => {
        setPassword((e.target as HTMLInputElement).value);
    }

    useEffect(() => {
        if (!titleRef) return;
        if (!authorRef) return;
        if (!passwordRef) return;

        console.log(title, author)

        titleRef.current!.value = title;
        authorRef.current!.value = author;
    }, []);

    return <div className="informationSandbox">
        <h2 className="text-titleH3-blackBasic-uppercase">{TextContent.SANDBOX_INFORMATIONS}</h2>
        <div className="information title">
            <label htmlFor="title" className="text-body-blackShade1-uppercase">{TextContent.SANDBOX_INFORMATIONS_TITLE}</label>
            <input ref={titleRef} id="title" type="text" min="0" max="100" value={title} onChange={handleTitleChange} />
        </div>
        <div className="information author">
            <label htmlFor="author" className="text-body-blackShade1-uppercase">{TextContent.SANDBOX_INFORMATIONS_AUTHOR}</label>
            <input ref={authorRef} id="author" type="text" min="0" max="100" value={author} onChange={handleAuthorChange} />
        </div>
        <div className="information password">
            <label htmlFor="password" className="text-body-blackShade1-uppercase">{TextContent.SANDBOX_INFORMATIONS_PASSWORD}</label>
            <input ref={passwordRef} id="password" type="password" min="0" max="100" onChange={handlePasswordChange} />
        </div>
    </div>
}
