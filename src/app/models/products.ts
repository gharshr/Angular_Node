export class products {
    Product_ID : Number;
    Product_Name : String;
    Product_Price : String;
    product_Quantity : Number;
    Product_Description : String;

    constructor(obj: any = null)
    {
        console.log(obj);
        if(obj != null)
        {
            Object.assign(this,obj);
        }
    }
}