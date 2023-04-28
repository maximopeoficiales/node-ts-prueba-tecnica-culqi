# Tokenizador de Tarjetas de Credito 👋
![Version](https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000)
[![Documentation](https://img.shields.io/badge/documentation-yes-brightgreen.svg)](https://github.com/maximopeoficiales/node-ts-prueba-tecnica-culqi)
[![License: ISC](https://img.shields.io/badge/License-ISC-yellow.svg)](#)

> API con el proposito de tokenizar tarjeta de credito asi como validar la estructura de la misma

## Instalacion y Ejecucion con Docker Compose
Es necesario tener instalado
* Docker
* Docker Compose

```sh
docker-compose up
```

## Uso en modo desarrollo
Es necesario tener instalado
* MongoDB
* NodeJS

Por otro tambien debe duplicar el archivo **.env-template** y renombrarlo como **.env**
Luego debe modificar la variable **MONGODB_URI** con el valor de la url de conexion de su instalacion local de mongoDB 
```sh
npm run install
npm run dev
```

## Ejecutar Test

```sh
npm run test
```
## Demostracion
Si desea probar la aplicacion por postman de manera rapida puede importar el archivo **qulqi_postman.json** en su postman local.

Se le envia al endpoint POST **/api/v1/creditCard/sign** los siguientes datos en le body
```json
{
    "email": "maximopeoficiales@yahoo.es",
    "expiration_year": "2020",
    "expiration_month": "12",
    "cvv": "455",
    "card_number": "4111111111111111"
}
```
![Token de Tarjeta de Credito](https://github.com/maximopeoficiales/node-ts-prueba-tecnica-culqi/blob/master/imgs/sign.png?raw=true)

Ahora usamos el metodo POST **/api/v1/creditCard/verify**
y enviamos el token por el Header de tipo Bearer
![Verificacion de Token](https://github.com/maximopeoficiales/node-ts-prueba-tecnica-culqi/blob/master/imgs/verify.png?raw=true)


## Author

👤 **maximopeoficiales**

* Website: https://maximopeoficiales.github.io/chichoproyect/
* Github: [@maximopeoficiales](https://github.com/maximopeoficiales)
* LinkedIn: [@https:\/\/www.linkedin.com\/in\/maximo-apaza-5407971b7\/](https://linkedin.com/in/https:\/\/www.linkedin.com\/in\/maximo-apaza-5407971b7\/)

## Show your support

Give a ⭐️ if this project helped you!


***
_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_