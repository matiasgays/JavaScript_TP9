class Producto{
    constructor(sku, vehicle, brand, motorpart, name, img, stock, price){
        this.sku = sku;
        this.vehicle = vehicle;
        this.brand = brand;
        this.motorpart = motorpart;
        this.name = name;
        this.img = img;
        this.stock = stock;
        this.price = price;
    }
}

const productoA = new Producto(1,"Auto", "Mercedes Benz", "Asiento de valvula", "AV 4317", "img/AV4317.jpg", 100, 1500);
const productoB = new Producto(2,"Auto", "Mercedes Benz", "Guia de valvula", "GB 1593", "img/GB1593.jpg", 100, 1000);
const productoC = new Producto(3,"Auto", "Mercedes Benz", "Valvula", "V 1005", "img/V1005.jpg", 100, 2500);
const productoD = new Producto(4,"Auto", "BMW", "Asiento de valvula", "AV 4319", "img/AV4319.jpg", 100, 1800);
const productoE = new Producto(5,"Auto", "BMW", "Guia de valvula", "GB 1621", "img/GB1621.jpg", 100, 900);
const productoF = new Producto(6,"Auto", "BMW", "Valvula", "V 1007", "img/V1007.jpg", 100, 2000);
const productoG = new Producto(7,"Moto", "Yamaha", "Asiento de valvula", "AV 4320", "img/AV4320.jpg",  100, 600);
const productoH = new Producto(8,"Moto", "Yamaha", "Guia de valvula", "GB 1639", "img/GB1639.jpg", 100, 500);
const productoI = new Producto(9,"Moto", "Yamaha", "Valvula", "V 1008", "img/V1008.jpg", 100, 800);
const productoJ = new Producto(10,"Moto", "Kawasaki", "Asiento de valvula", "AV 4321", "img/AV4321.jpg", 100, 700);
const productoK = new Producto(11,"Moto", "Kawasaki", "Guia de valvula", "GB 1642", "img/GB1642.jpg", 100, 600);
const productoL = new Producto(12,"Moto", "Kawasaki", "Valvula", "V 1109", "img/V1109.jpg", 100, 900);

const productsList = [productoA,productoB,productoC,productoD,productoE,productoF,productoG,productoH,productoI,productoJ,productoK,productoL];
const cart = [];
