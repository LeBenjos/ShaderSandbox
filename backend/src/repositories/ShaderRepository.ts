import { db } from "../configs/databases/database.config.ts";
import { TableName } from "../constants/TableName.ts";
import { IDatabase, IShaderTable } from "../constants/Types/DatabaseInterface.ts";

export default class ShaderRepository<T extends keyof IDatabase> {
    private _type = TableName.SHADER;

    public async selectData(): Promise<IDatabase[T][]> {
        return await (db.selectFrom(this._type).selectAll().execute() as unknown) as IDatabase[T][];
    }

    public async getDataById(id: number): Promise<IDatabase[T][]> {
        return ((await db.selectFrom(this._type).where('id', '=', id).selectAll().execute()) as unknown) as IDatabase[T][];
    }

    public async updateDataById(id: number, password: string, dataUpdate: IShaderTable): Promise<bigint> {
        const result = await db.updateTable(this._type)
            .set({
                id: dataUpdate.id,
                title: dataUpdate.title,
                password: dataUpdate.password,
                image_url: dataUpdate.imageUrl,
                author: dataUpdate.author,
                created_at: dataUpdate.created_at,
                updated_at: dataUpdate.updated_at
            })
            .where('id', '=', id)
            .where('password', '=', password)
            .executeTakeFirst()

        return result.numUpdatedRows;
    }

    public async deleteDataById(id: number, password: string): Promise<bigint> {
        const result = await db.deleteFrom(this._type).where('id', '=', id).where('password', '=', password).executeTakeFirst()
        return result.numDeletedRows;
    }
}