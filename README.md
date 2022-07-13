# BSALE 
Proyecto Postulación creado con API entregada por BSALE.
## Link del Proyecto:
http://lorebsale.s3.amazonaws.com/frontend/ecommerce.html
## Contenido
Proyecto realizado en VisualStudioCode en el cual se trabajo con NodeJs, Mysql, Express, Cors y en el Front end se trabajo con HTML , CSS , Vanilla JS y bootstrap.
Se ingresa un keep alive para que activara la base de datos cada 4,5 segundos. 

## Clonación del Producto
Pasos a seguir :
1. Primero utilizar el comando `git clone` y pogar el siguiente link https://github.com/Lorena-Concha/BSALE
2. Luego ingresar a la carpeta donde se clono el proyecto y utilizar el comando `npm i` para descargar las dependencias del proyecto

## FrondEnd
https://github.com/Lorena-Concha/BSALE/tree/master/frontend
Se realiza el frondend utilizando html y uniendolo a un css. Se trabaja con clases y js para crear los elementos, además de algunas funcionalidades de bootstrap. 

## BackEnd
https://github.com/Lorena-Concha/BSALE/tree/master/server
Se realiza el back trabajando con Mysql. 
Todas fueron probadas por postman. 
Se crean 4 Apis:

- Api utilizada para obtener todos los productos de la base de datos
/api/bsale/products/

- Api utilizada para obtener todas las categorias de la base de datos 
/api/bsale/category/

- Api utilizada para filtrar las categorias de productos existentes en la base de datos a traves del parametro ID
/api/bsale/category/:id

- Api utilizada para filtrar el listado de los productos existente en la basde de datos a traves del parametro ID
api/bsale/products/:id

- Api utilizada para filtrar el listado de productos existente en la base de dato a traves del parametro name:
/api/bsale/products/name/:name  

## Deploy

Se subio el backend del proyecto a una instancia de EC2, en esta se descargo el git y se levanto a traves de node. Para mantener activo el proces se instalo PM2.
El frontend del proyecto se subio a un bucket de S3, se dejaron todos los archivos con acceso publico y se apunto a las apis instaladas en EC2.
El proyecto se puede consultar en http://lorebsale.s3.amazonaws.com/frontend/ecommerce.html

## Principales Funcionalidades

1. Se muestran todos los productos disponibles en la tienda.
2. Filtra según nombre y categoria.
3. Se muestra imagen no disponible si la imagen no esta en la base de datos.
