import { Generated } from "kysely";

export interface IShaderTable {
    id: Generated<number>;
    title: string;
    password: string;
    image_url: string;
    author: string;
    created_at: Date;
    updated_at: Date;
}

export interface ISettingTable {
    shader_id: number;
    s1: number;
    s2: number;
    s3: number;
}

export interface IDatabase {
    shader: IShaderTable;
    setting: ISettingTable;
}