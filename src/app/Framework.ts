export class Framework
{
    public get side(): string {
        return this._side;
    }
    public set side(value: string) {
        this._side = value;
    }
    public get an(): number {
        return this._an;
    }
    public set an(value: number) {
        this._an = value;
    }
    public get logo(): string {
        return this._logo;
    }
    public set logo(value: string) {
        this._logo = value;
    }
    public get nom(): string {
        return this._nom;
    }
    public set nom(value: string) {
        this._nom = value;
    }
    public get id(): string {
        return this._id;
    }
    public set id(value: string) {
        this._id = value;
    }
    

    constructor(private _id: string, private _nom: string,private _logo: string,private _an: number,private _side: string) {
        
    }
}