export default class Setting {
    private _s1: number;
    private _s2: number;
    private _s3: number;

    constructor(s1: number, s2: number, s3: number) {
        this._s1 = s1;
        this._s2 = s2;
        this._s3 = s3;
    }

    //#region getter setter
    //
    public get s1(): number { return this._s1; }
    public get s2(): number { return this._s2; }
    public get s3(): number { return this._s3; }
    //
    //#endregion
}