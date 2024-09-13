// import * as jose from 'jose'
// import axios from "axios";

function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

function doAccount() {
    console.log("doAccInitiation");
    const token = getAccAppToken();
    console.log("token", token);

    const result = doAccInitiation();
    console.log(result);

}

async function getAccAppToken() {

    const apiUrl = 'http://localhost:9090/xs2a/v1/appToken?clientId=PSDGB-OB-Unknown0015800001HQQrZAAX&redirect_uri=https://www.google.com&scopes=accounts openid';

    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

        const json = await response.json();
        console.log(json);
    } catch (error) {
        console.error(error.message);
    }
}

function doAccInitiation(token) {
    console.log("doAccInitiation");

    const body = {
        "access": {
            "accounts": [

            ],
            "balances": [

            ],
            "transactions": [

            ]
        },
        "recurringIndicator": true,
        "validUntil": "2024-12-03",
        "frequencyPerDay": 4,
        "combinedServiceIndicator": false
    }
    console.log("doAccInitiation body ", body);
    const requestOptions = {
        method: 'POST',
        headers: {
            'token': token
        },
        body: JSON.stringify(body)
    };

    fetch("http://localhost:9090/xs2a/v1/consents", requestOptions)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            console.log(response.json());
            return response.json();
        })
        .then(data => {
            outputElement.textContent = JSON.stringify(data, null, 2);
        })
        .catch(error => {
            console.log(error);
            return error;
        });
}