export class products {
    productid : Number;
    productName : String;
    productDescription : String;
    productPrice : String;
    productQuantity : Number;

    constructor(obj: any = null)
    {
        console.log(obj);
        if(obj != null)
        {
            Object.assign(this,obj);
        }
    }
}