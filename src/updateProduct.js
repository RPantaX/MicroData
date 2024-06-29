const AWS = require('aws-sdk');
const dynamodb = new AWS.DynamoDB.DocumentClient();
exports.updateProduct = async (event) => {
    //También podríamos haber transformado el callback a una promesa.
    //Actualizar los datos.
    try {
      const {id} = event.pathParameters;
      const { stock } = JSON.parse(event.body);
  
      const params = {
        TableName: 'ProductInventory',
        Key: {id},
        UpdateExpression: 'SET stock = :newStock',
        ExpressionAttributeValues: {
          ':newStock': stock
        },
        ReturnValues: 'UPDATED_NEW'
      };
    //transformamos el callback a una promesa.
      const result = await dynamodb.update(params).promise();
  
      return {
        statusCode: 200,
        body: JSON.stringify({
          message: 'Stock updated successfully',
          newStock: result.Attributes.stock
        })
      };
    } catch (error) {
      return {
        statusCode: 500,
        body: JSON.stringify({
          message: 'Error updating stock',
          error: error.message
        })
      };
    }
  };