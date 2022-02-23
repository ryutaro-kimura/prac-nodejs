const fetch = require('node-fetch');

const cogUrl = 'https://praccustomvisionryutaro-prediction.cognitiveservices.azure.com/customvision/v3.0/Prediction/ddf1b811-6328-4d08-b51b-c7e0e1da27d0/classify/iterations/Iteration1/image';
const options = {
    method: 'GET',
    headers: { 
        "Prediction-Key": "103c3c4ff51340eeade8e614f0aed4bf",
        "Content-type": "application/json"
    },
};

const res = fetch(cogUrl, options)
.then(data => {
    // console.log(data); // `data.json()` の呼び出しで解釈された JSON データ
  })
console.log(res);