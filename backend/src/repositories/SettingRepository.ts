import { db } from "../configs/databases/database.config.ts";
import { TableName } from "../constants/TableName.ts";
import { IDatabase, ISettingTable } from "../constants/Types/DatabaseInterface.ts";

export default class SettingRepository<T extends keyof IDatabase> {
    private _type = TableName.SETTING;

    public async getDataById(id: number): Promise<IDatabase[T][]> {
        return ((await db.selectFrom(this._type).where('shader_id', '=', id).selectAll().execute()) as unknown) as IDatabase[T][];
    }

    public async createData(createdDate: ISettingTable): Promise<number> {
        const result = await db.insertInto(this._type)
            .values({
                shader_id: createdDate.shader_id,
                s1: createdDate.s1,
                s2: createdDate.s2,
                s3: createdDate.s3,
            })
            .returning('shader_id')
            .executeTakeFirstOrThrow()

        return result.shader_id;
    }

    public async updateDataById(dataUpdate: ISettingTable): Promise<bigint> {
        const result = await db.updateTable(this._type)
            .set({
                shader_id: dataUpdate.shader_id,
                s1: dataUpdate.s1,
                s2: dataUpdate.s2,
                s3: dataUpdate.s3
            })
            .where('shader_id', '=', dataUpdate.shader_id)
            .executeTakeFirst()

        return result.numUpdatedRows;
    }
}