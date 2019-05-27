const { DynamoDB } = require(`aws-sdk`);

const DocClient = new DynamoDB.DocumentClient();

const createId = () => Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
const BASE_PARAMS = { TableName: `comments-thibmaek.com` };

exports.handler = async (event, ctx, cb) => {
  const body = JSON.parse(event.body).payload;

  try {
    const response = await DocClient.put({
      ...BASE_PARAMS,
      Item: { id: createId(), ...body },
    }).promise();
    return {
      statusCode: 200,
      body: JSON.stringify({
        data: response.$response.data,
      }),
    };
  } catch (error) {
    console.log(error.toString());
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.toString() }),
    };
  }

};
