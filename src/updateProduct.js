const AWS = require('aws-sdk');
const { validateOnlyStock } = require('./validations/validationProduct');
const dynamodb = new AWS.DynamoDB.DocumentClient();
exports.updateProduct = async (event) => {
    //update data.
    try {
      const {id} = event.pathParameters;
      const { stock } = JSON.parse(event.body);
      // Validations
      const validationError = validateOnlyStock(stock);
      if (validationError) {
        return {
          statusCode: 400,
          body: JSON.stringify({ error: validationError })
        };
      }
      const params = {
        TableName: 'productTable',
        Key: {id},
        UpdateExpression: 'SET stock = :newStock',
        ExpressionAttributeValues: {
          ':newStock': stock
        },
        ReturnValues: 'UPDATED_NEW'
      };
    //we transform the callback to a promise.
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