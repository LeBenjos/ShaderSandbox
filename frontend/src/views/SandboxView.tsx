import CryptoJS from 'crypto-js';
import { ReactElement, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { HttpStatus } from '../constants/HttpStatus.ts';
import { Method } from "../constants/Method.ts";
import { StatusId } from '../constants/StatusId.ts';
import { PagePath } from "../constants/paths/PagePath.ts";
import { TextContent } from "../constants/texts/TextContent.ts";
import Setting from "../models/Setting.ts";
import Shader from "../models/Shader.ts";
import Footer from "./components/Footer.tsx";
import Header from "./components/Header.tsx";
import InformationSandbox from "./components/InformationSandbox.tsx";
import Poppin from './components/Poppin.tsx';
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
    const [error, setError] = useState<TextContent>(TextContent.NONE);
    const [success, setSuccess] = useState<TextContent>(TextContent.NONE);
    const [imageUrl, setImageUrl] = useState<string>("");
    const [canSend, setCanSend] = useState<boolean>(true);

    const { id, status } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            if (id && Number(id) !== 0) {
                await fetch(import.meta.env.VITE_PUBLIC_API_URL + id)
                    .then((response: Response) => {
                        return response.json();
                    })
                    .then((data: DataType) => {
                        const clearData = new Shader(
                            data._id,
                            data._title,
                            data._image_url,
                            data._author,
                            new Setting(
                                data._setting._s1,
                                data._setting._s2,
                                data._setting._s3
                            )
                        );

                        setS1(clearData.setting!.s1);
                        setS2(clearData.setting!.s2);
                        setS3(clearData.setting!.s3);
                        setTitle(clearData.title);
                        setAuthor(clearData.author);
                    }).catch(() => {
                        document.location.href = import.meta.env.VITE_PUBLIC_FRONTEND_URL + `0/${StatusId.NOT_FOUND}`;
                    })
            }

        };

        if (status === StatusId.NOT_FOUND) {
            setError(TextContent.SANDBOX_NOT_FOUND);
            setSuccess(TextContent.NONE);
        } else if (status === StatusId.CREATED) {
            setError(TextContent.NONE);
            setSuccess(TextContent.SANDBOX_SUCCESS_CREATION);
        } else if (status === StatusId.DELETED) {
            setError(TextContent.NONE);
            setSuccess(TextContent.SANDBOX_SUCCESS_DELETE);
        }

        fetchData();
    }, []);

    const handleCreate = async (): Promise<void> => {
        if (!canSend) return;
        setCanSend(false);
        await fetch(import.meta.env.VITE_PUBLIC_API_URL, {
            method: Method.POST,
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "createShader": {
                    "title": title,
                    "password": CryptoJS.SHA256(password).toString(CryptoJS.enc.Base64),
                    "image_url": imageUrl,
                    "author": author,
                    "setting": {
                        "s1": s1,
                        "s2": s2,
                        "s3": s3
                    }
                }
            })
        }).then((response: Response) => {
            if (response.status !== HttpStatus.CREATED) {
                throw new Error(TextContent.SANDBOX_ERROR_CREATION);
            } else {
                return response.json();
            }
        }).then((data: number) => {
            document.location.href = import.meta.env.VITE_PUBLIC_FRONTEND_URL + `${data}/${StatusId.CREATED}`;
            setCanSend(true);
        }).catch((error) => {
            console.log()
            setSuccess(TextContent.NONE);
            setError(error.message);
            setCanSend(true);
        })
    }

    const handleUpdate = async (): Promise<void> => {
        if (!canSend) return;
        setCanSend(false);
        await fetch(import.meta.env.VITE_PUBLIC_API_URL + id, {
            method: Method.PUT,
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "updateShader": {
                    "title": title,
                    "password": CryptoJS.SHA256(password).toString(CryptoJS.enc.Base64),
                    "image_url": imageUrl,
                    "author": author,
                    "setting": {
                        "s1": s1,
                        "s2": s2,
                        "s3": s3
                    }
                }
            })
        }).then((response: Response) => {
            if (response.status !== HttpStatus.OK) {
                throw new Error(TextContent.SANDBOX_ERROR_UPDATE);
            } else {
                setError(TextContent.NONE);
                setSuccess(TextContent.SANDBOX_SUCCESS_UPDATE);
                setCanSend(true);
            }
        }).catch((error) => {
            setSuccess(TextContent.NONE);
            setError(error.message);
            setCanSend(true);
        })
    }

    const handleDelete = async (): Promise<void> => {
        if (!canSend) return;
        setCanSend(false);
        await fetch(import.meta.env.VITE_PUBLIC_API_URL + id, {
            method: Method.DELETE,
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ password: CryptoJS.SHA256(password).toString(CryptoJS.enc.Base64) }),
        }).then(response => {
            if (response.status !== HttpStatus.ACCEPTED) {
                throw new Error(TextContent.SANDBOX_ERROR_DELETE);
            }
            document.location.href = import.meta.env.VITE_PUBLIC_FRONTEND_URL + `0/${StatusId.DELETED}`;
        }).catch((error) => {
            setSuccess(TextContent.NONE);
            setError(error.message);
            setCanSend(true);
        })
    }

    const handlePDF = async (): Promise<void> => {
        if (!canSend) return;
        setCanSend(false);
        fetch(import.meta.env.VITE_PUBLIC_API_URL + `${id}/pdf`)
            .then((response: Response) => {
                console.log(response)
                if (!response.ok) {
                    throw new Error(TextContent.SANDBOX_ERROR_PDF);
                }
                return response.blob();
            }).then((data: Blob) => {
                const url = window.URL.createObjectURL(data);
                const link = document.createElement('a');
                link.href = url;
                link.download = 'document.pdf';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
                setError(TextContent.NONE);
                setSuccess(TextContent.SANDBOX_SUCCESS_PDF);
                setCanSend(true);
            }).catch((error) => {
                setSuccess(TextContent.NONE);
                setError(error.message);
                setCanSend(true);
            });
    }

    return <div className="sandboxView">
        <Header currentPage={PagePath.SANDBOX} />
        <div className="sandboxContainerMain">
            {error !== TextContent.NONE && <Poppin text={error} className='errorPoppin' />}
            {success !== TextContent.NONE && <Poppin text={success} className='successPoppin' />}
            <div className="sandboxContainer">
                <SettingSandbox s1={s1} s2={s2} s3={s3} setS1={setS1} setS2={setS2} setS3={setS3} />
                <ThreePreview setImageUrl={setImageUrl} s1={s1} s2={s2} s3={s3} />
                <InformationSandbox title={title} author={author} setTitle={setTitle} setAuthor={setAuthor} setPassword={setPassword} handleDelete={handleDelete} />
            </div>
            <div className='sandboxOption'>
                {id && Number(id) !== 0 ?
                    <>
                        <button onClick={handleUpdate} className="button text-small-blackShade1-uppercase">
                            {TextContent.BUTTON_UPDATE}
                        </button>
                        <button onClick={handlePDF} className='button text-small-blackShade1-uppercase'>
                            {TextContent.BUTTON_PDF}
                        </button>
                    </> :
                    <button onClick={handleCreate} className="button text-small-blackShade1-uppercase">
                        {TextContent.BUTTON_CREATE}
                    </button>}
            </div>
        </div>
        <Footer />
    </div>
}
