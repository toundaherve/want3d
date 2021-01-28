// Initialize the Amazon Cognito credentials provider
AWS.config.region = "eu-west-2"; // Region
AWS.config.credentials = new AWS.CognitoIdentityCredentials({
  IdentityPoolId: "eu-west-2:a61e43b4-558d-4d89-9a60-e3d175c364c6",
});

var s3 = new AWS.S3({
  apiVersion: "2006-03-01",
  params: {
    Bucket: "wanted-images",
  },
});

const params = {
  Key: "Photo from Herve.jpg",
};

s3.getObject(params, (err, data) => {
  if (err) {
    console.log(err);
  }

  console.log(data);
});
