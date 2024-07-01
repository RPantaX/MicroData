const AWS = require('aws-sdk');
const dynamodb = new AWS.DynamoDB.DocumentClient();
exports.listProducts = async () => {
    try {
      const params = {
        TableName: 'productTable'
      };
      //we transform the callback to a promise.
      const result = await dynamodb.scan(params).promise();
  
      return {
        statusCode: 200,
        body: JSON.stringify(
           result.Items
        )
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
