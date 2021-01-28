import * as AWS from "aws-sdk";

const S3 = new AWS.S3({ apiVersion: "2006-03-01" });

export function storeImage(Key, data) {
  console.log(typeof data);
  return S3.putObject({
    Bucket: "want3d-images",
    Body: data,
    Key,
  }).promise();
}
