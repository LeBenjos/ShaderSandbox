import { ChangeEvent, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { Method } from "../../constants/Method.ts";
import { TextContent } from "../../constants/texts/TextContent.ts";

type Props = {
    title: string,
    password: string,
    author: string,
    setTitle: React.Dispatch<React.SetStateAction<string>>,
    setAuthor: React.Dispatch<React.SetStateAction<string>>,
    setPassword: React.Dispatch<React.SetStateAction<string>>,
}

export default function InformationSandbox({ title, password, author, setTitle, setAuthor, setPassword }: Props) {
    const titleRef = useRef<HTMLInputElement>(null);
    const authorRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);

    const { id } = useParams();

    const handleTitleChange = (e: ChangeEvent): void => {
        setTitle((e.target as HTMLInputElement).value);
    }

    const handleAuthorChange = (e: ChangeEvent): void => {
        setAuthor((e.target as HTMLInputElement).value);
    }

    const handlePasswordChange = (e: ChangeEvent): void => {
        setPassword((e.target as HTMLInputElement).value);
    }

    const handleDelete = async (): Promise<void> => {
        await fetch(`http://localhost:3000/shaders/${id}`, {
            method: Method.DELETE,
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ password: password })
        }).then(response => {
            if (!response.ok) {
                throw new Error('Erreur lors de la suppression');
            }
            console.log('Suppression réussie');
        }).catch(error => console.error('Erreur :', error));
    }

    useEffect(() => {
        if (!titleRef) return;
        if (!authorRef) return;
        if (!passwordRef) return;

        titleRef.current!.value = title;
        authorRef.current!.value = author;
    }, []);

    return <div className="informationSandbox">
        <div className="headerInformation">
            <h2 className="text-titleH3-blackBasic-uppercase">{TextContent.SANDBOX_INFORMATIONS}</h2>
            {id && <button onClick={handleDelete} className="iconLink">
                <img src="/assets/icons/trash.svg" alt="edit shader icon" />
            </button>}
        </div>
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
    </div >
}
