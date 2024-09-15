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

async function doAccount() {
    console.log("doAccInitiation");
    const token = await getAccAppToken();
    console.log("token", token);

    const consentId = await doAccInitiation(token);
    console.log(consentId);

    const authUrl = await getAuthURL(consentId);
    console.log("authUrl", authUrl);
    window.location.replace(authUrl);

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
        console.log("token", json.access_token);
        return json.access_token;
    } catch (error) {
        console.error(error.message);
    }
}

async function doAccInitiation(token) {
    console.log("doAccInitiation");

    const body = {
        access: {
            accounts: [

            ],
            balances: [

            ],
            transactions: [

            ]
        },
        recurringIndicator: true,
        validUntil: "2024-12-03",
        frequencyPerDay: 4,
        combinedServiceIndicator: false
    }
    console.log("doAccInitiation body ", body);

    try {
        const response = await fetch("http://localhost:9090/xs2a/v1/consents", {
            method: "POST",
            body: JSON.stringify(body),
            headers: {
                'token': token,
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            // ...
        });
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

        const json = await response.json();
        console.log(json);
        console.log("consentId", json.consentId);
        return json.consentId;
    } catch (error) {
        console.error(error.message);
    }
}


async function getAuthURL(consentId) {
    console.log("getAuthURL");

    try {
        const response = await fetch("http://localhost:9090/xs2a/v1/authorize", {
            headers: {
                'consentID': consentId,
                'clientID': 'PSDGB-OB-Unknown0015800001HQQrZAAX',
                'redirectUrl': 'https://www.google.com'
            },
        });
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

        const json = await response.text();
        console.log(json);
        return json;
    } catch (error) {
        console.error(error.message);
    }
}