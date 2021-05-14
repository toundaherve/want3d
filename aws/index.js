import * as Promise from "bluebird"
import {v4 as uuidv4} from "uuid"

import {CognitoIdentityClient} from "@aws-sdk/client-cognito-identity"
import {fromCognitoIdentityPool} from "@aws-sdk/credential-provider-cognito-identity"
import {S3Client, PutObjectCommand}  from "@aws-sdk/client-s3"

const REGION = "eu-west-2"

const s3 = new S3Client({
	region: REGION,
	credentials: fromCognitoIdentityPool({
		client: new CognitoIdentityClient({region: REGION}),
		identityPoolId: "eu-west-2:e8fbb085-fa66-4e99-ac5c-5208d88d53e2"
	})
})

export async function uploadPhotos(files) {
	const folderURL = "https://bonvih.s3.eu-west-2.amazonaws.com/images/"
	const uploaledFiles = []
	try {
		await Promise.mapSeries(files, async (file, index) => {
			const fileExtension = file.type.split("/")[1]
			const objectName = uuidv4() + "." + fileExtension;
			const photoKey = "images/" + objectName 
			const uploadParams = {
				Bucket: "bonvih",
				Key: photoKey,
				Body: file
			}

			try {
				const data = await s3.send(new PutObjectCommand(uploadParams))
				uploaledFiles.push({
					objectURL: folderURL + objectName,
					file
				})
			} catch (error) {
				throw new Error("s3Client failed to send " + file.name + " : " + error.message)
			}			
		})
	} catch(error) {
		throw new Error("AWS: Failed to upload one or more photos : " + error.message);
	}

	return uploaledFiles
}


