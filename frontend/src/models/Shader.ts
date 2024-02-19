import Setting from "./Setting.ts";

export default class Shader {
    private readonly _id: number;
    private _title: string;
    private _imageUrl: string | null;
    private _author: string;
    private _setting: Setting | null;

    constructor(id: number, title: string, imageUrl: string, author: string, setting: Setting | null = null) {
        this._id = id;
        this._title = title;
        this._imageUrl = imageUrl;
        this._author = author;
        this._setting = setting;
    }

    //#region getter setter
    //
    public get id(): number { return this._id; }
    public get title(): string { return this._title; }
    public get imageUrl(): string { return this._imageUrl!; }
    public get author(): string { return this._author; }
    public get setting(): Setting | null { return this._setting; }

    public set title(title: string) { this._title = title; }
    public set imageUrl(imageUrl: string) { this._imageUrl! = imageUrl; }
    public set author(author: string) { this._author = author; }
    public set setting(setting: Setting | null) { this._setting = setting; }
    //
    //#endregion
}