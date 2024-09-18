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
    const apiUrl = 'http://localhost:9090/xs2a/v1/appToken?clientId=PSDGB-OB-Unknown0015800001HQQrZAAX&redirect_uri=http://localhost:9090/xs2a/v1/callback&scopes=accounts openid';

    const token = await getAccAppToken();
    console.log("token", token);

    // const consentId = await doAccInitiation(token);
    // console.log(consentId);

    // const authUrl = await getAccAuthURL(consentId);
    // console.log("authUrl", authUrl);
    // window.location.replace(authUrl);

}

async function doPayment() {
    console.log("doPayment");
    const apiUrl = 'http://localhost:9090/xs2a/v1/appToken?clientId=PSDGB-OB-Unknown0015800001HQQrZAAX&redirect_uri=http://localhost:9090/xs2a/v1/callback&scopes=payments openid';

    const token = await getAccAppToken();
    console.log("token", token);

    const consentId = await doAccInitiation(token);
    console.log(consentId);

    const authUrl = await getAuthURL(consentId);
    console.log("authUrl", authUrl);
    window.location.replace(authUrl);

}

async function getAccAppToken(apiUrl) {

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
        localStorage.setItem("accConsentId", json.consentId);
        return json.consentId;
    } catch (error) {
        console.error(error.message);
    }
}

async function doPaymentInitiation(token) {
    console.log("doPaymentInitiation");

    const body = {
        instructedAmount: {
            currency: "EUR",
            amount: "123.50"
        },
        debtorAccount: {
            iban: "DE12345678901234567890",
            currency: "EUR"
        },
        creditorName: "Merchant123",
        creditorAccount: {
            iban: "DE98765432109876543210"
        },
        remittanceInformationUnstructured: "Ref Number Merchant"
    }
    console.log("doPaymentInitiation body ", body);

    try {
        const response = await fetch("http://localhost:9090/xs2a/v1/payments", {
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
        localStorage.setItem("accConsentId", json.consentId);
        return json.consentId;
    } catch (error) {
        console.error(error.message);
    }
}


async function getAccAuthURL(consentId) {
    console.log("getAuthURL");

    try {
        const response = await fetch("http://localhost:9090/xs2a/v1/authorize", {
            headers: {
                'consentID': consentId,
                'clientID': 'PSDGB-OB-Unknown0015800001HQQrZAAX',
                'redirectUrl': 'http://localhost:9090/xs2a/v1/callback',
                'scopes': 'ais:' + consentId,
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

async function getPaymentAuthURL(consentId) {
    console.log("getAuthURL");

    try {
        const response = await fetch("http://localhost:9090/xs2a/v1/authorize", {
            headers: {
                'consentID': consentId,
                'clientID': 'PSDGB-OB-Unknown0015800001HQQrZAAX',
                'redirectUrl': 'http://localhost:9090/xs2a/v1/callback',
                'scopes': 'pis:' + consentId,
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


async function retrieveAccDetails(url) {
    if (!url) url = window.location.href;
    var code = url.split("?")[1].split("&")[0].split("code")[1].substring(1);
    console.log("code", code);
    const token = await getAccUserToken();
    console.log("token", token);

    const acc = await getAccDetails(localStorage.getItem("accConsentId"), token);
    console.log("acc", acc);
    window.location.href = "dashboard.html?bank=1";

}

async function getAccUserToken(code) {

    const apiUrl = 'http://localhost:9090/xs2a/v1/userToken?clientId=PSDGB-OB-Unknown0015800001HQQrZAAX&' +
        'redirect_uri=http://localhost:9090/xs2a/v1/callback&scopes=accounts openid&code=' + code;

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

async function getPaymentUserToken(code) {

    const apiUrl = 'http://localhost:9090/xs2a/v1/userToken?clientId=PSDGB-OB-Unknown0015800001HQQrZAAX&' +
        'redirect_uri=http://localhost:9090/xs2a/v1/callback&scopes=payments openid&code=' + code;

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

async function getAccDetails(consentId, token) {
    console.log("getAccDetails");

    try {
        const response = await fetch("http://localhost:9090/xs2a/v1/accounts", {
            headers: {
                'consentId': consentId,
                'token': token
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

async function getPaymentDetails(consentId, token) {
    console.log("getPaymentDetails");

    try {
        const response = await fetch("http://localhost:9090/xs2a/v1/accounts", {
            headers: {
                'consentId': consentId,
                'token': token
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