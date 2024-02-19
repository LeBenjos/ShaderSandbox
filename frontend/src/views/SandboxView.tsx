import { ReactElement, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Method } from "../constants/Method.ts";
import { PagePath } from "../constants/paths/PagePath.ts";
import { TextContent } from "../constants/texts/TextContent.ts";
import Setting from "../models/Setting.ts";
import Shader from "../models/Shader.ts";
import Footer from "./components/Footer.tsx";
import Header from "./components/Header.tsx";
import InformationSandbox from "./components/InformationSandbox.tsx";
import SettingSandbox from "./components/SettingSandbox.tsx";
import ThreePreview from "./components/ThreePreview.tsx";

type DataType = { _id: number, _title: string, _image_url: string, _author: string, _setting: { _s1: number, _s2: number, _s3: number } }

export default function SandboxView(): ReactElement<HTMLDivElement> {
    const [s1, setS1] = useState<number>(50);
    const [s2, setS2] = useState<number>(50);
    const [s3, setS3] = useState<number>(50);
    const [title, setTitle] = useState<string>("");
    const [author, setAuthor] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const { id } = useParams();


    useEffect(() => {
        const fetchData = async () => {
            try {
                await fetch(`http://localhost:3000/shaders/${id}`).then((response: Response) => {
                    if (!response.ok) {
                        throw new Error('Error retrieving data');
                    }
                    return response.json();
                }).then((data: DataType) => {
                    const clearData: Shader = new Shader(
                        data._id,
                        data._title,
                        data._image_url,
                        data._author,
                        new Setting(
                            data._setting._s1,
                            data._setting._s2,
                            data._setting._s3,
                        ),
                    );

                    setS1(clearData.setting!.s1);
                    setS2(clearData.setting!.s2);
                    setS3(clearData.setting!.s3);
                    setTitle(clearData.title);
                    setAuthor(clearData.author);
                });
            } catch (error) {
                console.error('Erreur:', error);
            }
        };

        if (id) {
            fetchData();
        }
    }, []);

    const handleCreate = async (): Promise<void> => {
        await fetch(`http://localhost:3000/shaders/`, {
            method: Method.POST,
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "createShader": {
                    "title": title,
                    "password": password,
                    "image_url": "TODO",
                    "author": author,
                    "setting": {
                        "s1": s1,
                        "s2": s2,
                        "s3": s3
                    }
                }
            })
        }).then(response => {
            if (!response.ok) {
                throw new Error('Erreur lors de la création');
            }
            console.log('Création réussie');
        }).catch(error => console.error('Erreur :', error));
    }

    const handleUpdate = async (): Promise<void> => {
        await fetch(`http://localhost:3000/shaders/${id}`, {
            method: Method.PUT,
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "updateShader": {
                    "title": title,
                    "password": password,
                    "image_url": "TODO",
                    "author": author,
                    "setting": {
                        "s1": s1,
                        "s2": s2,
                        "s3": s3
                    }
                }
            })
        }).then(response => {
            if (!response.ok) {
                throw new Error('Erreur lors de la modification');
            }
            console.log('Modification réussie');
        }).catch(error => console.error('Erreur :', error));
    }

    return <div className="sandboxView">
        <Header currentPage={PagePath.SANDBOX} />
        <div className="sandboxContainerMain">
            <div className="sandboxContainer">
                <SettingSandbox s1={s1} s2={s2} s3={s3} setS1={setS1} setS2={setS2} setS3={setS3} />
                <ThreePreview s1={s1} s2={s2} s3={s3} />
                <InformationSandbox title={title} password={password} author={author} setTitle={setTitle} setAuthor={setAuthor} setPassword={setPassword} />
            </div>
            <div>
                {id ?
                    <button onClick={handleUpdate} className="button text-small-blackShade1-uppercase">
                        {TextContent.BUTTON_UPDATE}
                    </button> :
                    <button onClick={handleCreate} className="button text-small-blackShade1-uppercase">
                        {TextContent.BUTTON_CREATE}
                    </button>}
            </div>
        </div>
        <Footer />
    </div>
}
