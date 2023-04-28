# Tokenizador de Tarjetas de Credito 👋
![Version](https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000)
[![Documentation](https://img.shields.io/badge/documentation-yes-brightgreen.svg)](https://github.com/maximopeoficiales/node-ts-prueba-tecnica-culqi)
[![License: ISC](https://img.shields.io/badge/License-ISC-yellow.svg)](#)

> API con el proposito de tokenizar tarjeta de credito asi como validar la estructura de la misma

## Install

```sh
yarn install
```

## Usage

```sh
yarn run dev
```

## Run tests

```sh
yarn run test
```
## Demo

Se le envia al endpoint POST **/api/v1/creditCard/sign** los siguientes datos 
```json
{
    "email": "maximopeoficiales@yahoo.es",
    "expiration_year": "2020",
    "expiration_month": "12",
    "cvv": "455",
    "card_number": "4111111111111111"
}
```


Ahora usamos el metodo POST **/api/v1/creditCard/verify**
y enviamos el token por el Header de tipo Bearer


## Author

👤 **maximopeoficiales**

* Website: https://maximopeoficiales.github.io/chichoproyect/
* Github: [@maximopeoficiales](https://github.com/maximopeoficiales)
* LinkedIn: [@https:\/\/www.linkedin.com\/in\/maximo-apaza-5407971b7\/](https://linkedin.com/in/https:\/\/www.linkedin.com\/in\/maximo-apaza-5407971b7\/)

## Show your support

Give a ⭐️ if this project helped you!


***
_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_