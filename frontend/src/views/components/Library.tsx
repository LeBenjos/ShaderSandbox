import { ReactElement, useEffect, useState } from "react";
import Shader from "../../models/Shader.ts";
import ShaderCard from "./ShaderCard.tsx";

type DataType = { _id: number, _title: string, _image_url: string, _author: string, _setting: null }

export default function Library({ search }: { search: string }): ReactElement<HTMLDivElement> {
    const [fetchedData, setFetchedData] = useState<Shader[]>([]);
    const [shaders, setShader] = useState<Shader[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            await fetch(`http://localhost:3000/shaders/`).then((response: Response) => {
                if (!response.ok) {
                    throw new Error('Error retrieving data');
                }
                return response.json();
            }).then((data: DataType[]) => {
                const clearData: Shader[] = [];

                data.forEach((shader: DataType) => {
                    clearData.push(new Shader(
                        shader._id,
                        shader._title,
                        shader._image_url,
                        shader._author,
                        shader._setting,
                    ))
                });

                setShader(clearData);
                setFetchedData(clearData);
            }).catch((error) => {
                console.error('Erreur:', error);
            })
        }

        fetchData();
    }, []);

    useEffect(() => {
        const filterData: Shader[] = [];
        fetchedData.forEach(data => {
            if ((data.title.toLowerCase()).indexOf(search.toLowerCase()) !== -1) {
                filterData.push(data);
            }
        })

        setShader(filterData);
    }, [search]);

    return <div className="library">
        {shaders.map((shader, index) => {
            return <ShaderCard shader={shader} key={index} />
        })}
    </div>
}
