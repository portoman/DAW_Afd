const vehiculos = [
  {
    marca: "Opel",
    modelo: "Corsa",
    precio: "12.900 €",
    km: "5000 km",
    img: "opelAstra.jpg",
    venta: true,
  },
  {
    marca: "Ford",
    modelo: "Mondeo",
    precio: "15.900 €",
    km: "8500 km",
    img: "fordMondeo.jpg",
    venta: true,
  },
  
  {
    marca: "Peugeot",
    modelo: "Partner",
    precio: "8.900 €",
    km: "2500 km",
    img: "peugeotPartner.jpg",
    venta: true,
  },
  {
    marca: "Peugeot",
    modelo: "Partner",
    precio: "8.900 €",
    km: "2500 km",
    img: "peugeotPartner.jpg",
    venta: false,
  },
  {
    marca: "Peugeot",
    modelo: "2008",
    precio: "8.900 €",
    km: "2500 km",
    img: "peugeotPartner.jpg",
    venta: false,
  },
  {
    marca: "Nissan",
    modelo: "Qashqai",
    precio: "10.900 €",
    km: "5500 km",
    img: "nissanQashqai.jpg",
    venta: true,
  },
];

//const marca = vehiculos.map((item, index) => (index = item.marca));

/*let vehiculosArray2 = [
  ...new Map(vehiculos.map((item) => [item["marca"], item])),
];

console.log(vehiculosArray2);*/

let groupBy = (key, arr) =>
  arr.reduce((cache, product) => {
    const property = product[key];
    if (property in cache) {
      return { ...cache, [property]: cache[property].concat(product) };
    }
    return { ...cache, [property]: [product] };
  }, {});

groupBy("marca", vehiculos);

let nuevoArray = groupBy("marca", vehiculos);

let arrayMarcas=[]
for (const property in nuevoArray) {
  console.log({ property });
  arrayMarcas=property;
  console.log(nuevoArray[property].length);
  for(let i=0;i<nuevoArray[property].length;i++){
  console.log(nuevoArray[property][i].modelo);
  }
  }
