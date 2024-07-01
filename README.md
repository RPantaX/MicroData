# Backend de Gestión de Productos

Este es el backend de una aplicación de gestión de productos construida con Serverless Framework en AWS. Permite la creación, actualización y listado de productos utilizando AWS Lambda y DynamoDB.

## Estructura del Proyecto
/project-root
  /src
    /validations
      validationProduct.js
  createProduct.js
  updateProduct.js
  listProducts.js
  serverless.yml
  package.json

## Prerrequisitos

- Node.js v20.x o superior
- Serverless Framework CLI instalado globalmente:
  ```bash
  npm install -g serverless

- AWS CLI configurado con las credenciales adecuadas

## Configuración
1. Clona el repositorio:
  git clone https://github.com/tu-usuario/product-management-backend.git
  cd product-management-backend

2. Instala las dependencias:
  npm install

3. Configura tus credenciales de AWS en la CLI:
  aws configure

## Despliegue
Para desplegar el backend en AWS, utiliza Serverless Framework:
  serverless deploy
Esto desplegará las funciones Lambda y la tabla DynamoDB configuradas en serverless.yml.

# Estructura de Serverless.yml
## Provider
Configuración del proveedor AWS con detalles como la región, tamaño de memoria, tiempo de ejecución, etc.

## Funciones
- createProduct: Lambda para crear un nuevo producto.
- updateProductStock: Lambda para actualizar el stock de un producto.
- listProducts: Lambda para listar todos los productos.

## Recursos
- productTable: Definición de la tabla DynamoDB para almacenar los productos. Utiliza facturación bajo demanda (PAY_PER_REQUEST).

# Uso
## Crear un Producto
Envía una solicitud POST a https://l01ezc294j.execute-api.us-east-2.amazonaws.com/product con el cuerpo JSON que contiene los datos del producto.
Ej:
  {
    "nombreProducto": "gaseosa",
    "descripcion": "cocacola",
    "precio": 4.30,
    "stock": 3.5
  }

## Actualizar el Stock de un Producto
Envía una solicitud PUT a https://l01ezc294j.execute-api.us-east-2.amazonaws.com/product/ded6e6a3-0cde-4da5-8721-754513188ea9/stock con el cuerpo JSON que contiene el nuevo stock del producto.
Ej:
  {
    "stock": 6.90
  }
## Listar Todos los Productos
Envía una solicitud GET a https://l01ezc294j.execute-api.us-east-2.amazonaws.com/products para obtener una lista de todos los productos.

# Desarrollo Local
Para ejecutar el backend localmente:

1. Instala el plugin serverless-offline:
  npm install serverless-offline --save-dev
2. Agrega el plugin a serverless.yml:
  plugins:
  - serverless-offline
3. Ejecuta el backend localmente:
  serverless offline