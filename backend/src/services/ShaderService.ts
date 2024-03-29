import CustomError from "../components/CustomeError";
import { IShaderTable } from "../constants/Types/DatabaseInterface";
import Shader from "../models/Shader";
import ShaderRepository from "../repositories/ShaderRepository";

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
                (shader as IShaderTable).image_url,
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
            (data as IShaderTable).image_url,
            (data as IShaderTable).author
        );

        return shader;
    }
    //
    //#endregion

    //#region CREATE
    //
    public static async CreateShader(createdData: IShaderTable): Promise<number> {
        const isCreated = await this._ShaderRepository.createData(createdData);
        return isCreated;
    }
    //
    //#endregion

    //#region UPDATE
    //
    public static async UpdateShaderById(id: number, updateShader: Shader): Promise<boolean | CustomError> {
        let isUpdated: bigint = BigInt(0);
        const hashPassword = (await this._ShaderRepository.getPasswordById(id))[0].password;

        if (updateShader.password === hashPassword) {
            const currentShaderData = (await this._ShaderRepository.getDataById(id))[0];
            const updatedData: IShaderTable = {
                id: (currentShaderData as IShaderTable).id,
                title: updateShader.title,
                password: (currentShaderData as IShaderTable).password,
                image_url: updateShader.image_url,
                author: updateShader.author,
                created_at: (currentShaderData as IShaderTable).created_at,
                updated_at: new Date(),
            }

            isUpdated = await this._ShaderRepository.updateDataById(id, updatedData);
        }


        return isUpdated > BigInt(0);
    }
    //
    //#endregion

    //#region DELETE
    //
    public static async DeleteShaderById(id: number, password: string): Promise<boolean> {
        let isDeleted: bigint = BigInt(0);

        const hashPassword = (await this._ShaderRepository.getPasswordById(id))[0].password;

        if (password === hashPassword) {
            isDeleted = await this._ShaderRepository.deleteDataById(id);
        }

        return isDeleted > BigInt(0);
    }

    public static async AdminDeleteShader(id: number): Promise<boolean> {
        const isDeleted = await this._ShaderRepository.deleteDataByIdForce(id);
        return isDeleted > BigInt(0);
    }
    //
    //#endregion
}