import { IShaderTable } from "../constants/Types/DatabaseInterface.ts";
import Shader from "../models/Shader.ts";
import ShaderRepository from "../repositories/ShaderRepository.ts";

export default class ShaderService {
    private static _ShaderRepository = new ShaderRepository();

    public static async CheckId(id: number): Promise<boolean> {
        const data = await this._ShaderRepository.getDataById(id);
        if (data.length !== 0) return true;
        return false;
    }

    //#region GET (*)
    //
    public static async SelectShaders(): Promise<Shader[]> {
        const data = await this._ShaderRepository.selectData();
        const shaders: Shader[] = [];

        data.forEach(shader => {
            shaders.push(new Shader(
                Number((shader as IShaderTable).id),
                (shader as IShaderTable).title,
                (shader as IShaderTable).imageUrl,
                (shader as IShaderTable).author,
            ));
        });

        return shaders;
    }
    //
    //#endregion

    //#region GET (id)
    //
    public static async GetShaderById(id: number): Promise<Shader> {
        const data = (await this._ShaderRepository.getDataById(id))[0];

        const shader = new Shader(
            Number((data as IShaderTable).id),
            (data as IShaderTable).title,
            (data as IShaderTable).imageUrl,
            (data as IShaderTable).author
        );

        return shader;
    }
    //
    //#endregion

    //#region CREATE
    //
    //
    //#endregion

    //#region UPDATE
    //
    //
    //#endregion

    //#region DELETE
    //
    public static async DeleteShaderById(id: number, password: string): Promise<boolean> {
        let isDeleted: bigint = BigInt(0);
        if (password) isDeleted = await this._ShaderRepository.deleteDataById(id, password);

        return isDeleted > BigInt(0);
    }
    //
    //#endregion
}