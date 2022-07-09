window.onload = function () {
    fetch('http://localhost:8080/api/bsale/category')
        .then(response => response.json())
        .then(data => mostrarMenu(data));
    fetch('http://localhost:8080/api/bsale/products')
        .then(response => response.json())
        .then(data => mostrarProductos(data));
}

function cargarProductos(category){
    if (category===0){
        fetch('http://localhost:8080/api/bsale/products')
        .then(response => response.json())
        .then(data => mostrarProductos(data));
    }else{
        fetch('http://localhost:8080/api/bsale/products/category/'+category)
        .then(response => response.json())
        .then(data => mostrarProductos(data));
    }
}

function mostrarMenu(data) {
    var elementul=document.getElementById('ulMenu');
    data.forEach(element => {
        let elementLi=document.createElement('li');
        let elementa=document.createElement('a');
        elementa.href='#';
        elementa.classList.add('menu');
        elementa.onclick=function(){cargarProductos(element.id)};
        elementa.textContent=element.name;
        elementLi.appendChild(elementa);
        elementul.appendChild(elementLi)
    });
}

function mostrarProductos(data) {
    console.log(data);
    var temp=document.getElementsByTagName('template')[0];
    var elementContenedor=temp.content.querySelector('div');
    var elementProductos=document.getElementById('productos');
    elementProductos.replaceChildren();
    data.forEach(element =>{
        let elementImg=temp.content.querySelector('img');
        if (element.url_image!=null&&element.url_image!=''){
            elementImg.src=element.url_image;
        }else {
            elementImg.src="./assests/producto-sin-imagen.png"
        }

       

        let elementName=temp.content.querySelector('#nombre_producto');
        elementName.textContent=element.name;

        let elementPrice=temp.content.querySelector('#precio_producto');
        elementPrice.textContent=element.price;

        let importedNode=document.importNode(elementContenedor,true);
        elementProductos.appendChild(importedNode);
    })
}

function buscarporNombre() {
    fetch('http://localhost:8080/api/bsale/products/name/'+document.getElementById('busqueda').value)
        .then(response => response.json())
        .then(data => mostrarProductos(data));
}

function validarenter(event) {
    if ( event.key=="Enter"){
        buscarporNombre();
    }
}

