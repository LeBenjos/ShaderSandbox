import { ISettingTable } from "../constants/Types/DatabaseInterface";
import Setting from "../models/Setting";
import Shader from "../models/Shader";
import SettingRepository from "../repositories/SettingRepository";

export default class SettingService {
    private static _SettingRepository = new SettingRepository();

    //#region GET (id)
    //
    public static async GetSettingById(id: number): Promise<Setting | null> {
        const data = (await this._SettingRepository.getDataById(id))[0];

        if (data) {
            const setting = new Setting(
                Number((data as ISettingTable).s1),
                Number((data as ISettingTable).s2),
                Number((data as ISettingTable).s3)
            );


            return setting;
        }

        return null;
    }
    //
    //#endregion

    //#region CREATE
    //
    public static async CreateSetting(createdData: ISettingTable): Promise<number> {
        const isCreated = await this._SettingRepository.createData(createdData);
        return isCreated;
    }
    //
    //#endregion

    //#region UPDATE
    //
    public static async UpdateSettingById(id: number, updateShader: Shader): Promise<boolean> {
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