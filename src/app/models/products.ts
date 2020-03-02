export class products {
    id : Number;
    name : String;
    price : String;
    quantity : Number;
    description : String;

    constructor(obj: any = null)
    {
        console.log(obj);
        if(obj != null)
        {
            Object.assign(this,obj);
        }
    }
}