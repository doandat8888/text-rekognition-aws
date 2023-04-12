import AWS from 'aws-sdk';
import fs from 'fs';
import sharp from 'sharp';
import axios from 'axios';

AWS.config.update({
  region: 'ap-southeast-2',
  accessKeyId: 'AKIAQPXGFREBUO4S7FGI',
  secretAccessKey: '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'
});

const rekognition = new AWS.Rekognition();

const url = 'https://scontent.fsgn2-9.fna.fbcdn.net/v/t1.15752-9/338659695_754273869427544_1180745545248354534_n.png?_nc_cat=105&ccb=1-7&_nc_sid=ae9488&_nc_ohc=RPENcb0VkQEAX9jiXJW&_nc_ht=scontent.fsgn2-9.fna&oh=03_AdRjCJ03dgkAOMgtg2PUTaiJzn20GSDDB-i5pU0-OT2pXQ&oe=6458F45D';


axios.get(url, { responseType: 'arraybuffer' }).then(response => {
    const imageData = response.data;
    const params = {
      Image: {
        Bytes: imageData
      },
    };
  
    rekognition.detectText(params, (err, data) => {
      if (err) console.log(err, err.stack); // An error occurred
      else console.log(data); // Successful response
    });
  }).catch(error => {
    console.log(error);
  });






