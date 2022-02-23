const request = require('request');

var URL = 'https://praccustomvisionryutaro-prediction.cognitiveservices.azure.com/customvision/v3.0/Prediction/ddf1b811-6328-4d08-b51b-c7e0e1da27d0/classify/iterations/Iteration1/image';

request.post({
    uri: URL,
    headers: { 
        "Prediction-Key": "103c3c4ff51340eeade8e614f0aed4bf",
        "Content-type": "application/json"
    },
    body: {
        "Url": "https://stgphotostorage.blob.core.windows.net/mocks/candidate-list.png"
    },
}, (err, res, data) => {
    console.log(data);
});

// 参考：https://qiita.com/yuta0801/items/ff7f314f45c4f8dc8a48