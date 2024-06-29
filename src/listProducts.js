const AWS = require('aws-sdk');
const dynamodb = new AWS.DynamoDB.DocumentClient();
exports.listProducts = async () => {
    try {
      const params = {
        TableName: 'ProductInventory'
      };
      //transformamos el callback a una promesa.
      const result = await dynamodb.scan(params).promise();
  
      return {
        statusCode: 200,
        body: JSON.stringify({
          products: result.Items
        })
      };
    } catch (error) {
      return {
        statusCode: 500,
        body: JSON.stringify({
          message: 'Error listing products',
          error: error.message
        })
      };
    }
  };
