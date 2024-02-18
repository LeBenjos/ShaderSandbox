import { db } from "../configs/databases/database.config.ts";
import { TableName } from "../constants/TableName.ts";
import { IDatabase } from "../constants/Types/DatabaseInterface.ts";

export default class ShaderRepository<T extends keyof IDatabase> {
    private _type = TableName.SHADER;

    public async selectData(): Promise<IDatabase[T][]> {
        return await (db.selectFrom(this._type).selectAll().execute() as unknown) as IDatabase[T][];
    }

    public async getDataById(id: number): Promise<IDatabase[T][]> {
        return ((await db.selectFrom(this._type).where('id', '=', id).selectAll().execute()) as unknown) as IDatabase[T][];
    }

    public async deleteDataById(id: number, password: string): Promise<bigint> {
        const result = await db.deleteFrom(this._type).where('id', '=', id).where('password', '=', password).executeTakeFirst()
        return result.numDeletedRows;
    }
}