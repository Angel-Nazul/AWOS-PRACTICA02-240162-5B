//para su uso despues
//const { use } = require("react");

// Estilización de la barra zona de pruebas en el DevTools en el navegador
console.log("%cEjercicio 04: Objetos ", style_minimal);

console.warn("1. Propiedades de un Objeto");

// Esto no es un objeto son variables independientes que no se encuentran asociadas
let propertyID = 1;
let propertyName = "Departamento en el Centro de Ciudad de México";
let propertyDescription = "Hermoso departamento de 3 recámaras , 1 baño y 1 cajón de estacionamiento ubicado en el Centro de Ciudad de México, Ubicado en un tercer piso.";
let propertyType = "D";     // H: House  D: Deparment T: Terrain L: Locale  W: Warehouse  C: Cabain
let propertyIsSaleable = false;   
let propertyIsRentable = true;    
let propertyPrice = 7500.00;
let propertyLat = 19.4283813;
let propertyLong = -99.1020177;
let propertyToken = Symbol("D-12558-CDMX-MX-S");
let propertyIncludedServices = ["Agua", "Luz", "Gas"];
let propertyImage = null;
let propertyOwnerID = 32412;
let propertyStatus = "Good";

console.log(`Datos de la propiedad en RENTA:
    Nombre: ${propertyName}
    Descripción:  ${propertyDescription}
    Tipo: ${propertyType}
    Precio: ${propertyPrice}
    Ubicación:  Latitud: ${propertyLat}  Longitud: ${propertyLong} 
    Servicios incluidos: ${propertyIncludedServices}
    En renta:  ${propertyIsRentable}
    En venta: ${propertyIsSaleable}
    Token:  ${propertyToken.description}
    Dueño: ${propertyOwnerID}
    Imagen: ${propertyImage}`);

// 2. Declaración de un objeto 
/* Para declarar un objeto en JS es necesario asignarle un nombre y todas sus propiedades irán entre {} y separadas por coma en el order clave : valor */
console.warn("2. Declaración del objeto property1");

let property1 = {
    id: 1,
    name: "Departamento en el Centro de Ciudad de México", 
    description: "Hermoso departamento de 3 recámaras , 1 baño y 1 cajón de estacionamiento ubicado en el Centro de Ciudad de México, Ubicado en un tercer piso.", 
    type: "D", 
    price: 7500.00, 
    isRentable: true,
    isSaleable: false,
    includedServices: ["Agua", "Luz", "Gas"],
    lat: 19.4283813,
    long: -99.1020177,
    status: Symbol("D-12558-CDMX-MX-S"), 
    token: Symbol("D-12558-CDMX-MX-S"),
    ownerID: 32412
};

// Impresión del objeto en formato tabla
console.table(property1);

// 3. Leyendo las propiedades de un objeto 
/* Un objeto es un conjunto de variables que abstraen una entidad física o conceptual de la que es significativo almacenar infomación para el  programa o sistema que estemos desarrollando.
Para acceder a las propiedades individules basta con poner el nombre del objeto un "." y el nombre de la propiedad*/

console.warn("3. Lectura de Propiedades de un Objeto");
console.log(`La propiedad: ${property1.name}(${property1.id}) descrita como: 
    ${property1.description} se encuentra actualmente a la ${property1.isSaleable?"venta":property1.isRentable?"renta":
        "no disponible"} por un precio de: ${property1.price} con los servicios de: ${property1.includedServices}`);

// 4. Modificación de los valores de las propiedades de un objeto 
/* Para modificar los datos de una variable basta con acceder a la propiedad deseada a modifica y asignarle su nuevo a través del signo = */


property1.price= 8200.00
property1.isSaleable= true;
property1.includedServices= ["Agua", "Luz", "Gas", "Internet", "Serguridad Privada"];


console.warn("4. Modificación de Propiedades de un Objeto");

console.log(`El usuario con id: ${property1.ownerID} esta rentando un: ${property1.name}
     el cual se describe cómo: ${property1.description} por un precio de: ${property1.price} 
     con los servicios incluidos de: ${property1.includedServices}  ${property1.isSaleable?", actualmente esta a la venta":
         "que por el momento no esta a la venta"}.` ); 


// 5. Destructuración de Objetos (OBJECT DESTRUCTURING)
/* JavaScript es un lenguaje dinámico que permite que un objeto previamente definido pueda ser descompuesto
   en pequeñas nuevas partes (variables) para que estas puedan ser manipuladas según sea la necesidad */


   // Usuario 1 - Vendedor (el original)
const user1 = {
  userID: 32412,
  name: "John Doe",
  email: "john.doe@gmail.com",
  createdAt: new Date("2015-01-30T23:15:52"),
  lastLogin: new Date("2026-01-20T08:00:05"),
  userRole: "Vendedor",
  totalProperties: 12,
  rating: 9.4
};

// Usuario 2 - Comprador
const user2 = {
  userID: 54321,
  name: "María García López",
  email: "maria.gl@outlook.com",
  createdAt: new Date("2018-03-15T10:30:00"),
  lastLogin: new Date("2026-01-21T09:15:30"),
  userRole: "Comprador",
  totalProperties: 0,  // No tiene propiedades, busca comprar
  rating: 8.7
};

// Usuario 3 - Agente Inmobiliario
const user3 = {
  userID: 78901,
  name: "Carlos Rodríguez",
  email: "c.rodriguez@inmobiliaria.com",
  createdAt: new Date("2010-08-22T14:20:10"),
  lastLogin: new Date("2026-01-21T11:45:22"),
  userRole: "Agente Inmobiliario",
  totalProperties: 47,  // Maneja muchas propiedades
  rating: 9.8
};

// Usuario 4 - Inversor
const user4 = {
  userID: 45678,
  name: "Ana Martínez Torres",
  email: "ana.mtz@yahoo.com",
  createdAt: new Date("2020-11-05T09:00:00"),
  lastLogin: new Date("2026-01-20T18:30:15"),
  userRole: "Inversor",
  totalProperties: 8,  // Varias propiedades como inversión
  rating: 9.1
};

console.warn("5. Desestructuración de Objetos");

const formatDatosMX = (Date)  => {
    const day = String(Date.getDate()).padStart(2, "0");
    const month = String(Date.getMonth() + 1).padStart(2, "0");
    const year = Date.getFullYear();
    
    const hours = String(Date.getHours()).padStart(2, "0");
    const minutes = String(Date.getMinutes()).padStart(2, "0");
    const seconds = String(Date.getSeconds()).padStart(2, "0");
    
    return `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
}

const buyerBid = (selier, buyer, property, price_bidded) => {
    const { userID: selierID, email: selierEmail } = selier;
    const { userID: buyerID, email: buyerEmail } = buyer;
    const { price, id } = property;

    const fecha_oferta = new Date();

    console.log(`
        El usuario: ${buyerID} (${buyerEmail}) esta realizando una oferta ak usuario: ${selierID}
        (${selierEmail}) por la cantidad ofertada de: ${price_bidded}  por la propiedad con id: ${id}
        precio original: ${price}  con la fecha: ${formatDatosMX(fecha_oferta)}`);

    // 🔹 Cálculo de exactitud ajustado
    const bid_accuracy_raw = (price_bidded / price) * 100;

    let bid_accuracy = "";

    if (bid_accuracy_raw <= 100) {
        bid_accuracy = bid_accuracy_raw.toFixed(2) + "%";
    } else {
        const extra = bid_accuracy_raw - 100;
        bid_accuracy = `100% cumplido + ${extra.toFixed(2)}% extra`;
    }

    return {
        buyerID,
        selierID,
        propertyID: id,
        propertyPrice: price,
        date_bidded: fecha_oferta,
        bid_accurate: bid_accuracy
    };
};


//test 1. El usuario 2 realiza una oferta de 2500
let bid1 = buyerBid(user1,user2,property1,2500);
console.log(`La oferta tiene una exactitud del: ${bid1.bid_accurate}`);

//test 2. El usuario 3 realiza una oferta de 7500
let bid2 = buyerBid(user1,user3,property1,7500);
console.log(`La oferta tiene una exactitud del: ${bid2.bid_accurate}`);


//test 3. El usuario 4 realiza una oferta de 10500
let bid3 = buyerBid(user1,user4,property1,10500);
console.log(`La oferta tiene una exactitud del: ${bid3.bid_accurate}`);
