import { db } from "../configs/databases/database.config.ts";
import { TableName } from "../constants/TableName.ts";
import { IDatabase, IShaderTable } from "../constants/Types/DatabaseInterface.ts";

export default class ShaderRepository<T extends keyof IDatabase> {
    private _type = TableName.SHADER;

    public async getPasswordById(id: number): Promise<{ password: string }[]> {
        const result = await db.selectFrom(this._type)
            .select('password')
            .where('id', '=', id)
            .execute()
        return result;
    }

    public async selectData(): Promise<IDatabase[T][]> {
        return await (db.selectFrom(this._type).selectAll().execute() as unknown) as IDatabase[T][];
    }

    public async getDataById(id: number): Promise<IDatabase[T][]> {
        return ((await db.selectFrom(this._type).where('id', '=', id).selectAll().execute()) as unknown) as IDatabase[T][];
    }

    public async createData(createdData: IShaderTable): Promise<number> {
        const result = await db.insertInto(this._type)
            .values({
                title: createdData.title,
                password: createdData.password,
                image_url: createdData.image_url,
                author: createdData.author,
            })
            .returning('id')
            .executeTakeFirstOrThrow()

        return result.id;
    }

    //
    public async updateDataById(id: number, updatedData: IShaderTable): Promise<bigint> {
        const result = await db.updateTable(this._type)
            .set({
                id: updatedData.id,
                title: updatedData.title,
                password: updatedData.password,
                image_url: updatedData.image_url,
                author: updatedData.author,
                created_at: updatedData.created_at,
                updated_at: updatedData.updated_at
            })
            .where('id', '=', id)
            .executeTakeFirst();

        return result.numUpdatedRows;
    }

    public async deleteDataById(id: number): Promise<bigint> {
        const result = await db.deleteFrom(this._type)
            .where('id', '=', id)
            .executeTakeFirst()
        return result.numDeletedRows;
    }

    public async deleteDataByIdForce(id: number): Promise<bigint> {
        const result = await db.deleteFrom(this._type).where('id', '=', id).executeTakeFirst()
        return result.numDeletedRows;
    }
}