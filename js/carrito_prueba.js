// Catálogo de productos
const productos = [
    { id: 1, nombre: 'Producto 1', precio: 10.99, imagen: 'producto1.jpg' },
    { id: 2, nombre: 'Producto 2', precio: 9.99, imagen: 'producto2.jpg' },
    { id: 3, nombre: 'Producto 3', precio: 12.99, imagen: 'producto3.jpg' },
    // Agrega más productos aquí...
];

// Carrito de compras
let carrito = [];

// Función para agregar productos al carrito
function agregarAlCarrito(id) {
    const producto = productos.find(p => (link unavailable) === id);
    if (producto) {
        carrito.push(producto);
        actualizarCarrito();
    }
}

// Función para eliminar productos del carrito
function eliminarDelCarrito(id) {
    carrito = carrito.filter(p => (link unavailable) !== id);
    actualizarCarrito();
}

// Función para actualizar el carrito
function actualizarCarrito() {
    const carritoHTML = document.getElementById('carrito');
    carritoHTML.innerHTML = '';
    carrito.forEach(producto => {
        const productoHTML = document.createElement('div');
        productoHTML.classList.add('producto-carrito');
        productoHTML.innerHTML = `
            <h3>${producto.nombre}</h3>
            <p>Precio: $${producto.precio}</p>
            <button onclick="eliminarDelCarrito(${(link unavailable)})">Eliminar</button>
        `;
        carritoHTML.appendChild(productoHTML);
    });
}

// Función para renderizar el catálogo de productos
function renderizarCatalogo() {
    const catalogoHTML = document.getElementById('productos');
    catalogoHTML.innerHTML = '';
    productos.forEach(producto => {
        const productoHTML = document.createElement('div');
        productoHTML.classList.add('producto');
        productoHTML.innerHTML = `
            <h3>${producto.nombre}</h3>
            <p>Precio: $${producto.precio}</p>
            <button onclick="agregarAlCarrito(${(link unavailable)})">Agregar al carrito</button>
        `;
        catalogoHTML.appendChild(productoHTML);
    });
}

// Inicializa el catálogo de productos y el carrito
renderizarCatalogo();
actualizarCarrito();
