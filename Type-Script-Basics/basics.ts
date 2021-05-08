let a:number=12.5;
function Display():String{
    console.log("Display the Details",typeof(a));
    return "Hello";
}
console.log(a);
console.log(Display());

class Product{
    name:String;
    price:number=3.5;
    constructor(name,price)
    {
        this.name=name;
        this.price=price;
        function show()
        {
            console.log(this.name);
            console.log(this.price);
        }
    }
    
    
}
let p:Product=new Product("hai",10);
console.log(p.price);
let prod:Array<Product>=[];
prod.push(new Product("Soap",25));
prod.push(new Product("SoapWater",325));
for(let pr of prod)
{
    console.log(pr);
}