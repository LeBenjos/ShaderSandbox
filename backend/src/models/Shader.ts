import Setting from "./Setting";

export default class Shader {
    private readonly _id: number;
    private _title: string;
    private _password: string | null = null;
    private _image_url: string | null;
    private _author: string;
    private _setting: Setting | null;

    constructor(id: number, title: string, image_url: string, author: string, setting: Setting | null = null) {
        this._id = id;
        this._title = title;
        this._image_url = image_url;
        this._author = author;
        this._setting = setting;
    }

    //#region getter setter
    //
    public get id(): number { return this._id; }
    public get title(): string { return this._title; }
    public get password(): string { return this._password!; }
    public get image_url(): string { return this._image_url!; }
    public get author(): string { return this._author; }
    public get setting(): Setting { return this._setting!; }

    public set title(title: string) { this._title = title; }
    public set password(password: string) { this._password = password; }
    public set image_url(image_url: string) { this._image_url! = image_url; }
    public set author(author: string) { this._author = author; }
    public set setting(setting: Setting | null) { this._setting = setting; }
    //
    //#endregion
}