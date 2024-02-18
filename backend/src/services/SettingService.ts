import CustomError from "../components/CustomeError.ts";
import { ISettingTable } from "../constants/Types/DatabaseInterface.ts";
import Setting from "../models/Setting.ts";
import Shader from "../models/Shader.ts";
import SettingRepository from "../repositories/SettingRepository.ts";

export default class SettingService {
    private static _SettingRepository = new SettingRepository();

    //#region GET (id)
    //
    public static async GetSettingById(id: number): Promise<Setting> {
        const data = (await this._SettingRepository.getDataById(id))[0];

        const setting = new Setting(
            Number((data as ISettingTable).s1),
            Number((data as ISettingTable).s2),
            Number((data as ISettingTable).s3)
        );

        return setting;
    }
    //
    //#endregion

    //#region UPDATE
    //
    public static async UpdateShaderById(id: number, updateShader: Shader): Promise<boolean | CustomError> {
        let isUpdated: bigint = BigInt(0);

        const currentSettingData = (await this._SettingRepository.getDataById(id))[0];
        const updatedData: ISettingTable = {
            shader_id: (currentSettingData as ISettingTable).shader_id,
            s1: updateShader.setting!.s1,
            s2: updateShader.setting!.s2,
            s3: updateShader.setting!.s3
        }

        isUpdated = await this._SettingRepository.updateDataById(updatedData);

        return isUpdated > BigInt(0);
    }
    //
    //#endregion
}