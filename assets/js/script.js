const propiedades_alquiler = [
  {
    img: "imagen01.avif",
    titulo: "Alquilo Casa en la playa",
    descripcion:
      "Esta casa se encuentra en la costa norte, cercano a servicios y comercio.",
    direccion: "123 Main Street, Anytown, CA 91234",
    habitaciones: 3,
    bathroom: 2,
    precio: "2.500",
    fumar: true,
    mascotas: false,
  },
  {
    img: "imagen02.avif",
    titulo: "Apartamento en el centro de la ciudad",
    descripcion:
      "Este apartamento de 2 habitaciones está ubicado en el corazón de la ciudad, cerca de todo.",
    direccion: "567 Skyline Avenue, Skyview City, CA 56789",
    habitaciones: 2,
    bathroom: 2,
    precio: "1.500",
    fumar: false,
    mascotas: true,
  },
  {
    img: "imagen03.avif",
    titulo: "Apartamento en condominio",
    descripcion:
      "Este apartamento de 3 habitaciones está ubicado sector residecial afuera de la ciudad.",
    direccion: "123 Main Street, Anytown, CA 91234",
    habitaciones: 3,
    bathroom: 2,
    precio: "3.500",
    fumar: false,
    mascotas: true,
  },
  {
    img: "imagen04.avif",
    titulo: "Alquiler de  casa en las afueras",
    descripcion:
      "Esta casa de 2 habitaciones está ubicado 15 minutos de la ciudad, cerca de todo.",
    direccion: "123 Main Street, Anytown, CA 91234",
    habitaciones: 3,
    bathroom: 2,
    precio: "",
    fumar: false,
    mascotas: false,
  },
  {
    img: "imagen05.avif",
    titulo: "Alquiler de casa con piscina",
    descripcion: "Casa con amplia piscina de bajo mantenimiento.",
    direccion: "567 Skyline Avenue, Skyview City, CA 56789",
    habitaciones: 3,
    bathroom: 2,
    precio: "2.890",
    fumar: true,
    mascotas: true,
  },
  {
    img: "imagen06.avif",
    titulo: "Alquilo la casa de tus sueños",
    descripcion: "Esta casa tiene capacidad para 4 personas",
    direccion: "123 Main Street, Anytown, CA 91234",
    habitaciones: 3,
    bathroom: 2,
    precio: "2.500",
    fumar: false,
    mascotas: true,
  },
];

const body = document.querySelector("#card");
let template = "";

const paginaActual = window.location.pathname; // Obtiene la ruta de la página actual

let propiedadesAiterate = propiedades_alquiler;

// Verificar la página actual y ajustar la cantidad de propiedades a iterar
if (paginaActual.includes("index.html")) {
  // Si la página es index.html, iterar solo sobre las primeras 3 propiedades
  propiedadesAiterate = propiedades_alquiler.slice(0, 3);
}

// Iterar sobre las propiedades seleccionadas
for (let i = 0; i < propiedadesAiterate.length; i++) {
  const arrendar = propiedadesAiterate[i];

  template += `
        <div class="col-md-4 mb-4">
            <div class="card">
                <img
                    src="./assets/img/${arrendar.img || "default-image.jpg"}"
                    class="card-img-top"
                    alt="Imagen del departamento"
                />
                <div class="card-body">
                    <h5 class="card-title">
                        ${arrendar.titulo || "Titulo Propiedad"}
                    </h5>
                    <p class="card-text">
                        ${
                          arrendar.descripcion ||
                          "Lorem ipsum dolor sit amet consectetur adipisicing elit."
                        }
                    </p>
                    <p>
                        <i class="fas fa-map-marker-alt"></i>
                        ${
                          arrendar.direccion ||
                          "No hay una dirección ingresada aún"
                        }
                    </p>
                    <p>
                        <i class="fas fa-bed"></i> ${
                          arrendar.habitaciones
                        } + Habitaciones |
                        <i class="fas fa-bath"></i> ${arrendar.bathroom} + Baños
                    </p>
                   
                    ${
                      arrendar.precio
                        ? `<p><i class="fas fa-dollar-sign"></i> ${arrendar.precio}</p>`
                        : `<p>No se informa precio</p>`
                    }
                   
                    
                    ${
                      arrendar.fumar
                        ? `<p class="text-success"><i class="fas fa-smoking"></i> Permitido fumar</p>`
                        : `<p class="text-danger"><i class="fas fa-smoking-ban"></i> No se permite fumar</p>`
                    }
                    
                    ${
                      arrendar.mascotas
                        ? `<p class="text-success"><i class="fas fa-paw"></i> Mascotas permitidas</p>`
                        : `<p class="text-danger"><i class="fas fa-paw"></i> No se permiten mascotas</p>`
                    }
                </div>
            </div>
        </div>
    `;
}

body.innerHTML = template;

const propiedades_venta = [
  {
    img: "propiedadesVenta01.jpg",
    titulo: "Apartamento de lujo en zona exclusiva",
    descripcion:
      "Este apartamento de lujo está ubicado en una exclusiva zona residencial",
    direccion: "123 Luxury Lane, Prestige Suburb, CA 45678",
    habitaciones: 4,
    bathroom: 4,
    precio: "5.000",
    fumar: false,
    mascotas: false,
  },
  {
    img: "propiedadesVenta02.avif",
    titulo: "Apartamento acogedor en la montaña",
    descripcion:
      "Este apartamento acogedor está situado en lo alto de una montaña con impresionantes vistas",
    direccion: "789 Mountain Road, Summit Peaks, CA 23456",
    habitaciones: 2,
    bathroom: 1,
    precio: "1.200",
    fumar: true,
    mascotas: true,
  },
  {
    img: "propiedadesVenta03.avif",
    titulo: "Penthouse de lujo con terraza panorámica",
    descripcion:
      "Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares.",
    direccion: "567 Skyline Avenue, Skyview City, CA 56789",
    habitaciones: 3,
    bathroom: 3,
    precio: "4.500",
    fumar: false,
    mascotas: true,
  },
  {
    img: "propiedadesVenta04.avif",
    titulo: "Lujosa casa estilo moderno con ventanales",
    descripcion: "Esta casa tiene unas vistas espectaculares.",
    direccion: "123 Main Street, Anytown, CA 91234",
    habitaciones: 3,
    bathroom: 3,
    precio: "4.500",
    fumar: false,
    mascotas: true,
  },
  {
    img: "propiedadesVenta05.avif",
    titulo: "Espectacula Casa de Madera Importada",
    descripcion:
      "Esta casa cuenta con los mejores materiales y terminaciones de lujo.",
    direccion: "567 Skyline Avenue, Skyview City, CA 56789",
    habitaciones: 3,
    bathroom: 2,
    precio: "6.500",
    fumar: false,
    mascotas: false,
  },
  {
    img: "propiedadesVenta06.avif",
    titulo: "Casa con 3 pisos en sector lleno de árboles",
    descripcion: "Increible casa con  tres plantas y jardín interior.",
    direccion: "123 Main Street, Anytown, CA 91234",
    habitaciones: 8,
    bathroom: 3,
    precio: "12.500",
    fumar: true,
    mascotas: true,
  },
];

const cuerpo = document.querySelector("#ventas");
let theme = "";

const currentPage = window.location.pathname; // Obtiene la ruta de la página actual

let propiedadesToIterate = propiedades_venta;

// Verificar la página actual y ajustar la cantidad de propiedades a iterar
if (currentPage.includes("index.html")) {
  // Si la página es index.html, iterar solo sobre las primeras 3 propiedades
  propiedadesToIterate = propiedades_venta.slice(0, 3);
}

// Iterar sobre las propiedades seleccionadas
for (let i = 0; i < propiedadesToIterate.length; i++) {
  const vender = propiedadesToIterate[i];

  theme += `
        <div class="col-md-4 mb-4">
            <div class="card">
                <img
                    src="./assets/img/${vender.img || "default-image.jpg"}"
                    class="card-img-top"
                    alt="Imagen del departamento"
                />
                <div class="card-body">
                    <h5 class="card-title">
                        ${vender.titulo || "Titulo Propiedad"}
                    </h5>
                    <p class="card-text">
                        ${
                          vender.descripcion ||
                          "Lorem ipsum dolor sit amet consectetur adipisicing elit."
                        }
                    </p>
                    <p>
                        <i class="fas fa-map-marker-alt"></i>
                        ${
                          vender.direccion ||
                          "No hay una dirección ingresada aún"
                        }
                    </p>
                    <p>
                        <i class="fas fa-bed"></i> ${
                          vender.habitaciones
                        } + Habitaciones |
                        <i class="fas fa-bath"></i> ${vender.bathroom} + Baños
                    </p>
                    <p><i class="fas fa-dollar-sign"></i> ${vender.precio}</p>
                    
                    ${
                      vender.fumar
                        ? `<p class="text-success"><i class="fas fa-smoking"></i> Permitido fumar</p>`
                        : `<p class="text-danger"><i class="fas fa-smoking-ban"></i> No se permite fumar</p>`
                    }
                    
                    ${
                      vender.mascotas
                        ? `<p class="text-success"><i class="fas fa-paw"></i> Mascotas permitidas</p>`
                        : `<p class="text-danger"><i class="fas fa-paw"></i> No se permiten mascotas</p>`
                    }
                </div>
            </div>
        </div>
    `;
}

cuerpo.innerHTML = theme;
