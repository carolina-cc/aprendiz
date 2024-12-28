//PRODUCTOS
const productos=[
//Libros de Ciencias y Matematicas

{
	id: "cima-01",
	titulo: "Cima 01",
	imagen: "img/algebra_venturini.jpg",
	categoria:{
		nombre:"Cima"
		id:"cima"
	},
	precio:32500
},

{
	id:"cima-02",
	titulo:"Cima 02",
	imagen: "img/logica_matematica.jpg",
	categoria:{
		nombre:"Cima",
		id:"cima"
	},
	precio:16292
},

{
	id:"cima-03"
	titulo:"Cima 03",
	imagen:"img/matematicas.jpg",
	categoria:{
		nombre:"Cima",
		id:"cima"
	},
	precio:25199
}

{
	id:"cima-04"
	titulo:"Cima 04",
	imagen:"img/magia_matematicas.jpg",
	categoria:{
		nombre:"Cima",
		id:"cima"
	},
	precio:35900
},

//Tecnologia
{
	id: "tecnologia-01",
	titulo: "Tecnologia 01",
	imagen: "img/users_programacion.jpg",
	categoria:{
		nombre:"Tecnologia"
		id:"tecnologia"
	},
	precio:14490
},
//Ficcion
{
	id: "ficcion-01",
	titulo: "Ficcion 01",
	imagen: "img/dolores_susann.jpg",
	categoria:{
		nombre:"Ficcion"
		id:"ficcion"
	},
	precio:12665
},
//Desarrollo personal
{
	id: "desarrollo-01",
	titulo: "Desarrollo 01",
	imagen: "img/sutil_manson.jpg",
	categoria:{
		nombre:"Desarrollo"
		id:"desarrollo"
	},
	precio:23500
},
//Sociedad y Ciencias Sociales
{
	id: "sociedad-01",
	titulo: "Sociedad 01",
	imagen: "img/repensar_dubet.jpg",
	categoria:{
		nombre:"Sociedad"
		id:"sociedad"
	},
	precio:18090
},
//No categorizado
{
	id: "noca-01",
	titulo: "Noca 01",
	imagen: "img/sustituir_velasco.jpg",
	categoria:{
		nombre:"Noca"
		id:"noca"
	},
	precio:23400
},
];

//


/*
 const ProductoArray=[

{
	id:"libro-01",
	titulo:"libro 01",
	imagen:"img/algebra_venturini.jpg",
	categoria:{
		nombre:"libro01" 
		}
	precio:32500
},

]
 
*/

const ContenedorProducto=document.querySelector("#contenedor-producto");
const botonesCategorias=document.querySelectorAll(".botones-categorias");

function CargarProductos(){
	productos.forEach(producto=>{ 
		const div=document.createElement("div");
		div.classList.add("producto");
		div.InnerHTML=`
		<li><img class= "producto-imagen" src="$(producto.imagen)"alt="$(producto.titulo)"></li>
			<div class="producto-detalles">
			<h4 class="producto-titulo">$(producto.titulo)</h4> 
             <p class="producto-precio">$(producto.precio) <br></p>
             <button class="producto-agregado" id="$(producto.id)">Agregar</button>
         </div>
         `;
         
       contenedorProductos.append(div);
		
		
})

}

cargarProductos();
botonesCategorias.forEach(boton->{})
