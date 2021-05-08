var a = 12.5;
function Display() {
    console.log("Display the Details", typeof (a));
    return "Hello";
}
console.log(a);
console.log(Display());
var Product = /** @class */ (function () {
    function Product(name, price) {
        this.price = 3.5;
        this.name = name;
        this.price = price;
        function show() {
            console.log(this.name);
            console.log(this.price);
        }
    }
    return Product;
}());
var p = new Product("hai", 10);
console.log(p.price);
var prod = [];
prod.push(new Product("Soap", 25));
prod.push(new Product("SoapWater", 325));
for (var _i = 0, prod_1 = prod; _i < prod_1.length; _i++) {
    var pr = prod_1[_i];
    console.log(pr);
}
