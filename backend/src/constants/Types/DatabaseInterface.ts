import { Generated } from "kysely";

export interface IShaderTable {
    id: Generated<number>;
    title: string;
    password: string;
    imageUrl: string;
    author: string;
    created_at: Date;
    updated_at: Date;
}

export interface ISettingTable {
    shader_id: number;
    s1: string;
    s2: string;
    s3: string;
}

export interface IDatabase {
    shader: IShaderTable;
    setting: ISettingTable;
}