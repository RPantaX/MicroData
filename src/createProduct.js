const { v4 } = require("uuid");
const AWS = require('aws-sdk');
const dynamodb = new AWS.DynamoDB.DocumentClient();
exports.createProduct = async (event) => {
  //recibimos los atributos de parte del usuario de tal manera que sean solo los atributos específicos que necesitamos.
  const { nombreProducto, descripcion, precio, stock } = JSON.parse(event.body);
  //registros que mandaremos a nuestra tabla.
  const id = v4();
  const params = {
    TableName: 'productTable',
    Item: {
        id,
        nombreProducto,
        descripcion,
        precio,
        stock
    }
  };
  //enviamos los datos.
  try {
        //transformamos el callback a una promesa.
        await dynamodb.put(params).promise();
        return {
            statusCode: 200,
            body: JSON.stringify({ message: 'Product created successfully' })
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'Could not create product' })
        };
    }
};
