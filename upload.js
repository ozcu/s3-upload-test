
const AWS = require ('aws-sdk')
const fs = require('fs')

const KEY_ID = ''
const SECRET = ''
const BUCKET_NAME ='getirclone.s3bucket'


const s3 = new AWS.S3({
accessKeyId:KEY_ID,
secretAccessKey:SECRET

})


const params = {

    bucket:BUCKET_NAME,
    CreateBucketConfiguration:{
        LocationConstraint: 'eu-west-1'
    }
}
//uploads fine but gives Error [ReferenceError]: node is not defined
const uploadFile = ()=>{

    const fileContent = fs.readFileSync('./sensor.png')


    const params = {

        Bucket:BUCKET_NAME,
        Key:'sensor.png',
        Body:fileContent
    }

    s3.upload(params,function(err,data){
        if(err){
            throw new Error('File upload failed')
        }node 
        console.log(`File uploaded successfully. ${data.Location}`)

    })

}

uploadFile()