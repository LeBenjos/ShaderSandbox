import { db } from "../configs/databases/database.config.ts";
import { TableName } from "../constants/TableName.ts";
import { IDatabase } from "../constants/Types/DatabaseInterface.ts";

export default class SettingRepository<T extends keyof IDatabase> {
    private _type = TableName.SETTING;

    public async getDataById(id: number): Promise<IDatabase[T][]> {
        return ((await db.selectFrom(this._type).where('shader_id', '=', id).selectAll().execute()) as unknown) as IDatabase[T][];
    }
}