import { ISettingTable } from "../constants/Types/DatabaseInterface.ts";
import Setting from "../models/Setting.ts";
import SettingRepository from "../repositories/SettingRepository.ts";

export default class SettingService {
    private static _SettingRepository = new SettingRepository();

    public static async GetSettingById(id: number): Promise<Setting> {
        const data = (await this._SettingRepository.getDataById(id))[0];

        const setting = new Setting(
            Number((data as ISettingTable).s1),
            Number((data as ISettingTable).s2),
            Number((data as ISettingTable).s3)
        );

        return setting;
    }
}