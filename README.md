# BSALE 
Proyecto Postulación creado con API entregada por BSALE.
## Link del Proyecto:
http://lorebsale.s3.amazonaws.com/frontend/ecommerce.html

Vista previa:
![image](https://user-images.githubusercontent.com/97326355/178639311-39b8fbe4-03f9-4bd8-b145-bcc6cd6df141.png)


## Contenido
Proyecto realizado en VisualStudioCode en el cual se trabajo con NodeJs, Mysql, Express, Cors y en el Front end se trabajo con HTML , CSS , Vanilla JS y bootstrap.
Se ingresa un keep alive para que activara la base de datos cada 4,5 segundos. 

## Clonación del Proyecto:
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
Se crean 5 Apis:

- Api utilizada para obtener todos los productos de la base de datos
GET /api/bsale/products/

Parametros utilizados:
Sin parametros

Respuesta
Entrega arreglo con lista de productos, cada elemento de tipo producto contiene:
id: int(numero), identificador unico de producto 
name: string(texto), nombre del producto
url_image: string(texto), entrega la url de la imagen jpg asociada al producto.
price: int(numero), entrega el valor del producto
discount: int(numero), entrega el descuento del producto
category: int(numero), entrega la categoria asociada al producto

Ejemplo de respuesta:

![image](https://user-images.githubusercontent.com/97326355/178637922-55b54010-b0c2-4b5a-b259-9d09f438df2a.png)

- Api utilizada para obtener todas las categorias de la base de datos 
GET /api/bsale/category/

Parametros utilizados:

Sin parametros

Respuesta:
Entrega arreglo con lista de categorias, cada elemento de tipo categoria contiene:

id: int(numero) identificador unico de cada categoria
name: string(texto) nombre de cada categoria

Ejemplo de respuesta:

![image](https://user-images.githubusercontent.com/97326355/178638437-7aedb739-2353-489e-b5e1-07842c3e7eb2.png)


- Api utilizada para filtrar las categorias de productos existentes en la base de datos a traves del parametro ID
GET /api/bsale/category/:id

Parametros utilizados:

id : corresponde al id de cada categoría

Respuesta: 
id: int(numero) identificador unico de cada categoria

name: string(texto) nombre de cada categoria

Ejemplo de Respuesta:

![image](https://user-images.githubusercontent.com/97326355/178637342-6123be05-15f7-4869-b1c4-44f327e58c61.png)

- Api utilizada para filtrar el listado de los productos existente en la basde de datos a traves del parametro ID
GET api/bsale/products/:id

Parametros utlizados:

id: corresponde al id de cada producto

Respuesta:

id: int(numero), identificador unico de producto 
name: string(texto), nombre del producto
url_image: string(texto), entrega la url de la imagen jpg asociada al producto.
price: int(numero), entrega el valor del producto
discount: int(numero), entrega el descuento del producto
category: int(numero), entrega la categoria asociada al producto
Ejemplo de respuesta:

![image](https://user-images.githubusercontent.com/97326355/178637176-066ab321-8bb0-4b52-ab19-13dfde1bb035.png)

- Api utilizada para filtrar el listado de productos existente en la base de dato a traves del parametro name:
GET /api/bsale/products/name/:name  

Parametros utilizados:
name: string(texto), nombre del producto

Respuesta
Entrega arreglo con lista de productos, cada elemento de tipo producto contiene:

id: int(numero), identificador unico de producto 
name: string(texto), nombre del producto
url_image: string(texto), entrega la url de la imagen jpg asociada al producto.
price: int(numero), entrega el valor del producto
discount: int(numero), entrega el descuento del producto
category: int(numero), entrega la categoria asociada al producto

Ejemplo de respuesta:
![image](https://user-images.githubusercontent.com/97326355/178639181-f0823e02-dcc1-4ef2-8c03-1fcdc223c172.png)


## Deploy

Se subio el backend del proyecto a una instancia de EC2, en esta se descargo el git y se levanto a traves de node. Para mantener activo el proces se instalo PM2.
El frontend del proyecto se subio a un bucket de S3, se dejaron todos los archivos con acceso publico y se apunto a las apis instaladas en EC2.
El proyecto se puede consultar en http://lorebsale.s3.amazonaws.com/frontend/ecommerce.html

## Principales Funcionalidades

1. Se muestran todos los productos disponibles en la tienda.
2. Filtra según nombre y categoria.
3. Se muestra imagen no disponible si la imagen no esta en la base de datos.
