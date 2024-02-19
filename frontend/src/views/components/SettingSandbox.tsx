import { ChangeEvent, useEffect, useRef } from "react";
import { TextContent } from "../../constants/texts/TextContent.ts";

type Props = {
    s1: number,
    s2: number,
    s3: number,
    setS1: React.Dispatch<React.SetStateAction<number>>;
    setS2: React.Dispatch<React.SetStateAction<number>>;
    setS3: React.Dispatch<React.SetStateAction<number>>;
}

export default function SettingSandbox({ s1, s2, s3, setS1, setS2, setS3 }: Props) {

    const s1Ref = useRef<HTMLInputElement>(null);
    const s2Ref = useRef<HTMLInputElement>(null);
    const s3Ref = useRef<HTMLInputElement>(null);

    const handleS1Change = (e: ChangeEvent): void => {
        setS1(parseInt((e.target as HTMLInputElement).value))
    }

    const handleS2Change = (e: ChangeEvent): void => {
        setS2(parseInt((e.target as HTMLInputElement).value))
    }

    const handleS3Change = (e: ChangeEvent): void => {
        setS3(parseInt((e.target as HTMLInputElement).value))
    }

    useEffect(() => {
        if (!s1Ref) return;
        if (!s2Ref) return;
        if (!s3Ref) return;

        s1Ref.current!.value = s1.toString();
        s2Ref.current!.value = s2.toString();
        s3Ref.current!.value = s3.toString();
    }, []);

    return <div className="settingSandbox">
        <h2 className="text-titleH3-blackBasic-uppercase">{TextContent.SANDBOX_SETTING}</h2>
        <div className="setting setting1">
            <label htmlFor="s1" className="text-body-blackShade1-uppercase">{TextContent.SANDBOX_SETTING_S1}</label>
            <input ref={s1Ref} id="s1" type="range" min="0" max="100" value={s1} onChange={handleS1Change} />
        </div>
        <div className="setting setting2">
            <label htmlFor="s2" className="text-body-blackShade1-uppercase">{TextContent.SANDBOX_SETTING_S2}</label>
            <input ref={s2Ref} id="s2" type="range" min="0" max="100" value={s2} onChange={handleS2Change} />
        </div>
        <div className="setting setting2">
            <label htmlFor="s3" className="text-body-blackShade1-uppercase">{TextContent.SANDBOX_SETTING_S3}</label>
            <input ref={s3Ref} id="s3" type="range" min="0" max="100" value={s3} onChange={handleS3Change} />
        </div>
    </div>
}
