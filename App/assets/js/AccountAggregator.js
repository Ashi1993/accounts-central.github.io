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

// const public_key = `-----BEGIN CERTIFICATE-----MIIFPTCCAyWgAwIBAgIJAIlBZ+gbD8BqMA0GCSqGSIb3DQEBBQUAMHMxCzAJBgNBAYTAkxLMQswCQYDVQQIDAJXUDEMMAoGA1UEBwwDQ09MMQ0wCwYDVQQKDARXU08yMQswCQYDVQQLDAJPQjELMAkGA1UEAwwCT0IxIDAeBgkqhkiG9w0BCQEWEW1hbHNoYW5pQHdzbzIuY29tMB4XDTIzMDMxMzExNDgwOVoXDTI4MDMxMTExNDgwOVowczELMAkGA1UEBhMCR0IxGjAYBgNVBAoMEVdTTzIgKFVLKSBMSU1JVEVEMSswKQYDVQRhDCJQU0RHQi1PQi1Vbmtub3duMDAxNTgwMDAwMUhRUXJaQUFYMRswGQYDVQQDDBIwMDE1ODAwMDAxSFFRclpBQVgwggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQDGYKfZLJAnA96lQ3AuCOl/wn0HzfnNUv01c43RIbaiQsS5VL8RChkryeCZHuOyDWYGkLfZzyZJQLnfeyBZ6hbzaoNzgBprmxzYmS2scG7+R1UzQnkJLxKn7eZToreldt91/UBARNhCZ2whM85Z5wcosAwv5vvSY+mDizBBujUbZ5J956OTxtED5kDgRerAaD6toOGSjpqlOB6qTBcHOPoY3vTanDcTJpeHgkGIIkCOIJZLopoeXrO7kU34qm9H0ZgOkOAak4Qwrth7GlHtVaN+PSy3xj+a8s89/2lQSdPez7uodGuoZbeMbzljZ5u9jPeT6Dm0tXRIa/iXMUIyuXv9AgMBAAGjgdMwgdAwDgYDVR0PAQH/BAQDAgbAMB0GA1UdDgQWBBQfCnzY4BVxYLd58PFpObzGSoCitjCBngYIKwYBBQUHAQMEgZEwgY4wEwYGBACORgEGMAkGBwQAjkYBBgIwdwYGBACBmCcCMG0wRjBEBgcEAIGYJwEBDAZQU1BfQVMGBwQAgZgnAQIMBlBTUF9QSQYHBACBmCcBAwwGUFNQX0FJBgcEAIGYJwEEDAZQU1BfSUMMG0ZpbmFuY2lhbCBDb25kdWN0IEF1dGhvcml0eQwGR0ItRkNBMA0GCSqGSIb3DQEBBQUAA4ICAQCbMjnB+o8IV0mYBu4iqaFkKBk+E6EnXEcJsRA7IrqGv8S2nWluaWbNYUGfbYaeTT6bfY4VcWsZMGG3TDNLj5VVFUg90zGmK4Balz+J0eIYrG5heialNlu4xjsTpqS4lIpK94SgWJCjuab4sMvif5kY4svY5z3tbM/uNHi69R9N8y4wO75cVhphftx1yWpNDscBSMHNS55m64O1a5D+Hng0umNbK1nkQbgBjkM5MTbcKrC3Twn4fQyTh8xkZp1d1xQbzUbCWy+VpoS0DYyCIlX9Ip9pQxIjOvhGS3toqgmHLBEztEaEm3Kq0+jX6gimzhqI/a+RbsJKB7Dyi9rc6Gu+dJqy2OxilwO4YWuN6SWDw1Oqhpjeku1o7ZJzeXDuqENHO56AboR9RSU1nt7SymYTOoswO8EP+gbEvoI34el+4C7fFObCHBOZqhvEWo4TXGN+9kiiFzyWacw85e+Kc+jy4ghnkS5pD1BKtaxoGiBxeZwJJ+hCEoDkU5WD2s46Dk7Zg9nPJE0sqdzLnvCcggvnugZZCgXmorSClfchPH8OJYKsmLCG4vGYXwPjz9KNfWWYUWOpOSD9KolKmEgF1pTgAP//gfBI1owP/epYbA6tuDJuedfIDPFaoaB4jj94lRQ83NWIabA1DAXGSIqltwesgf3IzM57dGeqBnHfJhN3Jg==-----END CERTIFICATE-----`

// const private_key = `-----BEGIN RSA PRIVATE KEY-----MIIEogIBAAKCAQEAxmCn2SyQJwPepUNwLgjpf8J9B835zVL9NXON0SG2okLEuVS/EQoZK8ngmR7jsg1mBpC32c8mSUC533sgWeoW82qDc4Aaa5sc2JktrHBu/kdVM0J5CS8Sp+3mU6K3pXbfdf1AQETYQmdsITPOWecHKLAML+b70mPpg4swQbo1G2eSfeejk8bRA+ZA4EXqwGg+raDhko6apTgeqkwXBzj6GN702pw3EyaXh4JBiCJAjiCWS6KaHl6zu5FN+KpvR9GYDpDgGpOEMK7YexpR7VWjfj0st8Y/mvLPPf9pUEnT3s+7qHRrqGW3jG85Y2ebvYz3k+g5tLV0SGv4lzFCMrl7/QIDAQABAoIBADXsE/POTyirvptBZ3674Wxe20mBzYLoKfebf1L3TQNyDrMpu/3PtuPWLfyxDsdZKQBj2fWUfx2uQFfkyfhmzvI/Y5fDnGrfcMnXaTjUHvdzQE98pBXA+9s1qUPWmQCa/Ua/HfXaQMZcAmJMCK0bRTDkGYvzx0N68QBWlzlmegUGeRDqnAzdWhJ5WWdUeFMyaPgYdowfD9QlbIvU7LM5gBK3rC3/R6UETeXdqMJPq/YckP7kS+PuZc3Q+E2CWFaf4Xoa3aZTdScPVkrHAPKJrw6aonbG4I6TXTkoamuFaZgbA2fJAGsgaOUKd1XyflV+PvfPYAJ7zp5Jzbq56VvAn0ECgYEA+B8sc5p5AARxj7XsYG2Cz7zJafh7ZweNL83LzoeFLrmvXmnrwzDWwbfm8yPQYiq3fbboixBzXwK7bhWqPqHztt07RYAWVXU7f5/zDU+otQpxMNiRSpBYR8TlZRBxR0gB3ccNh15bVEuMjHoCtVowAzP1NoQfGOv1xcn1m2Cd6vkCgYEAzK0ke218RyCwcn/UIKV1todIU1m6gZpQ0ZWh39ID0hgcqbOixuKSPldUgc+MRHPJGvIPd5VuVpZOTKqLEiOqM3rK5rjwYr8uD5BSIB7yCB1CwcPiGu41TgLsCU8NcjYb9thmZnUVVoAKIcwUkEdrCAEgVx3odJDopYent96GNiUCgYAltVckGo3ZGtPHa3aJERuYRrC1kjXu6o7ifPxEXwQ2nbGxP5e9CmcY+cH3obHBuYw5Ztrgh5eBEQE7Mb+11Rcc63JelaDPTAnG06A0na6eFQAu1DsAgf9oqNvUCDOvCZp/AglkUUq//NtXXhObTCGP2w2hQ2MWfoXTkWXqPzzAwQKBgB03XezMfR/+F5HQk2wxkjMC7p0PQuM7Luwr6tZzOR5lWLoUrVisgOmrN6HsCX6/9GYHRZPxXbW4cObatU1aj/IXRh1XKuE9nwqTtFVndW8ZFi1ok776X9uJ6T2O7kFuXeGHlF5tuiUF0+xtIEZUG4AiAQbOex8gjEUMrzE873WNAoGAT/x3aKf0YrFYPCjJQsDoMIfBBkv75nwjO/oWlJKaujpFbeBjCIj04vG8Ow32AP6QTp7b2WHt0LCmtXJFWNqekYVmyvJTnRbgJfB0FY7KGj0UtimbHOylx9j0pUPc3eOMRWx957Qi3UJIfX8pZb1r3RZRq6NUWc8KViymBt2WgkA=-----END RSA PRIVATE KEY-----`

const public_key = `MIIFPTCCAyWgAwIBAgIJAIlBZ+gbD8BqMA0GCSqGSIb3DQEBBQUAMHMxCzAJBgNBAYTAkxLMQswCQYDVQQIDAJXUDEMMAoGA1UEBwwDQ09MMQ0wCwYDVQQKDARXU08yMQswCQYDVQQLDAJPQjELMAkGA1UEAwwCT0IxIDAeBgkqhkiG9w0BCQEWEW1hbHNoYW5pQHdzbzIuY29tMB4XDTIzMDMxMzExNDgwOVoXDTI4MDMxMTExNDgwOVowczELMAkGA1UEBhMCR0IxGjAYBgNVBAoMEVdTTzIgKFVLKSBMSU1JVEVEMSswKQYDVQRhDCJQU0RHQi1PQi1Vbmtub3duMDAxNTgwMDAwMUhRUXJaQUFYMRswGQYDVQQDDBIwMDE1ODAwMDAxSFFRclpBQVgwggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQDGYKfZLJAnA96lQ3AuCOl/wn0HzfnNUv01c43RIbaiQsS5VL8RChkryeCZHuOyDWYGkLfZzyZJQLnfeyBZ6hbzaoNzgBprmxzYmS2scG7+R1UzQnkJLxKn7eZToreldt91/UBARNhCZ2whM85Z5wcosAwv5vvSY+mDizBBujUbZ5J956OTxtED5kDgRerAaD6toOGSjpqlOB6qTBcHOPoY3vTanDcTJpeHgkGIIkCOIJZLopoeXrO7kU34qm9H0ZgOkOAak4Qwrth7GlHtVaN+PSy3xj+a8s89/2lQSdPez7uodGuoZbeMbzljZ5u9jPeT6Dm0tXRIa/iXMUIyuXv9AgMBAAGjgdMwgdAwDgYDVR0PAQH/BAQDAgbAMB0GA1UdDgQWBBQfCnzY4BVxYLd58PFpObzGSoCitjCBngYIKwYBBQUHAQMEgZEwgY4wEwYGBACORgEGMAkGBwQAjkYBBgIwdwYGBACBmCcCMG0wRjBEBgcEAIGYJwEBDAZQU1BfQVMGBwQAgZgnAQIMBlBTUF9QSQYHBACBmCcBAwwGUFNQX0FJBgcEAIGYJwEEDAZQU1BfSUMMG0ZpbmFuY2lhbCBDb25kdWN0IEF1dGhvcml0eQwGR0ItRkNBMA0GCSqGSIb3DQEBBQUAA4ICAQCbMjnB+o8IV0mYBu4iqaFkKBk+E6EnXEcJsRA7IrqGv8S2nWluaWbNYUGfbYaeTT6bfY4VcWsZMGG3TDNLj5VVFUg90zGmK4Balz+J0eIYrG5heialNlu4xjsTpqS4lIpK94SgWJCjuab4sMvif5kY4svY5z3tbM/uNHi69R9N8y4wO75cVhphftx1yWpNDscBSMHNS55m64O1a5D+Hng0umNbK1nkQbgBjkM5MTbcKrC3Twn4fQyTh8xkZp1d1xQbzUbCWy+VpoS0DYyCIlX9Ip9pQxIjOvhGS3toqgmHLBEztEaEm3Kq0+jX6gimzhqI/a+RbsJKB7Dyi9rc6Gu+dJqy2OxilwO4YWuN6SWDw1Oqhpjeku1o7ZJzeXDuqENHO56AboR9RSU1nt7SymYTOoswO8EP+gbEvoI34el+4C7fFObCHBOZqhvEWo4TXGN+9kiiFzyWacw85e+Kc+jy4ghnkS5pD1BKtaxoGiBxeZwJJ+hCEoDkU5WD2s46Dk7Zg9nPJE0sqdzLnvCcggvnugZZCgXmorSClfchPH8OJYKsmLCG4vGYXwPjz9KNfWWYUWOpOSD9KolKmEgF1pTgAP//gfBI1owP/epYbA6tuDJuedfIDPFaoaB4jj94lRQ83NWIabA1DAXGSIqltwesgf3IzM57dGeqBnHfJhN3Jg==`

const private_key = `MIIEogIBAAKCAQEAxmCn2SyQJwPepUNwLgjpf8J9B835zVL9NXON0SG2okLEuVS/EQoZK8ngmR7jsg1mBpC32c8mSUC533sgWeoW82qDc4Aaa5sc2JktrHBu/kdVM0J5CS8Sp+3mU6K3pXbfdf1AQETYQmdsITPOWecHKLAML+b70mPpg4swQbo1G2eSfeejk8bRA+ZA4EXqwGg+raDhko6apTgeqkwXBzj6GN702pw3EyaXh4JBiCJAjiCWS6KaHl6zu5FN+KpvR9GYDpDgGpOEMK7YexpR7VWjfj0st8Y/mvLPPf9pUEnT3s+7qHRrqGW3jG85Y2ebvYz3k+g5tLV0SGv4lzFCMrl7/QIDAQABAoIBADXsE/POTyirvptBZ3674Wxe20mBzYLoKfebf1L3TQNyDrMpu/3PtuPWLfyxDsdZKQBj2fWUfx2uQFfkyfhmzvI/Y5fDnGrfcMnXaTjUHvdzQE98pBXA+9s1qUPWmQCa/Ua/HfXaQMZcAmJMCK0bRTDkGYvzx0N68QBWlzlmegUGeRDqnAzdWhJ5WWdUeFMyaPgYdowfD9QlbIvU7LM5gBK3rC3/R6UETeXdqMJPq/YckP7kS+PuZc3Q+E2CWFaf4Xoa3aZTdScPVkrHAPKJrw6aonbG4I6TXTkoamuFaZgbA2fJAGsgaOUKd1XyflV+PvfPYAJ7zp5Jzbq56VvAn0ECgYEA+B8sc5p5AARxj7XsYG2Cz7zJafh7ZweNL83LzoeFLrmvXmnrwzDWwbfm8yPQYiq3fbboixBzXwK7bhWqPqHztt07RYAWVXU7f5/zDU+otQpxMNiRSpBYR8TlZRBxR0gB3ccNh15bVEuMjHoCtVowAzP1NoQfGOv1xcn1m2Cd6vkCgYEAzK0ke218RyCwcn/UIKV1todIU1m6gZpQ0ZWh39ID0hgcqbOixuKSPldUgc+MRHPJGvIPd5VuVpZOTKqLEiOqM3rK5rjwYr8uD5BSIB7yCB1CwcPiGu41TgLsCU8NcjYb9thmZnUVVoAKIcwUkEdrCAEgVx3odJDopYent96GNiUCgYAltVckGo3ZGtPHa3aJERuYRrC1kjXu6o7ifPxEXwQ2nbGxP5e9CmcY+cH3obHBuYw5Ztrgh5eBEQE7Mb+11Rcc63JelaDPTAnG06A0na6eFQAu1DsAgf9oqNvUCDOvCZp/AglkUUq//NtXXhObTCGP2w2hQ2MWfoXTkWXqPzzAwQKBgB03XezMfR/+F5HQk2wxkjMC7p0PQuM7Luwr6tZzOR5lWLoUrVisgOmrN6HsCX6/9GYHRZPxXbW4cObatU1aj/IXRh1XKuE9nwqTtFVndW8ZFi1ok776X9uJ6T2O7kFuXeGHlF5tuiUF0+xtIEZUG4AiAQbOex8gjEUMrzE873WNAoGAT/x3aKf0YrFYPCjJQsDoMIfBBkv75nwjO/oWlJKaujpFbeBjCIj04vG8Ow32AP6QTp7b2WHt0LCmtXJFWNqekYVmyvJTnRbgJfB0FY7KGj0UtimbHOylx9j0pUPc3eOMRWx957Qi3UJIfX8pZb1r3RZRq6NUWc8KViymBt2WgkA=`

function doAccount() {
    // const appToken = getAccAppToken();
    console.log("doAccInitiation");
    const result = doAccInitiation();
    console.log(result);

}

function getAccAppToken() {

    const apiUrl = 'https://localhost:9446/oauth2/token';
    const assertion = createJsonWebToken();
    const data = "grant_type=client_credentials&scope=accounts openid&client_id=PSDGB-OB-Unknown0015800001HQQrZAAX&" +
        "redirect_uri=https://www.google.com&client_assertion_type=urn:ietf:params:oauth:client-assertion-type:jwt-bearer" +
        "client_assertion=" + assertion;

    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'x-wso2-mutual-auth-cert': public_key
        },
        body: JSON.stringify(data),
    };

    fetch(apiUrl, requestOptions)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            console.log(response.json());
        })
        .then(data => {
            outputElement.textContent = JSON.stringify(data, null, 2);
        })
        .catch(error => {
            console.error('Error:', error);
        });
}


async function createJsonWebToken() {

    const header = {
        alg: "HS256",// Token generation algorithm
        typ: "JWT"
    };

    const privateKey = await jose.importPKCS8(pkcs8, alg)
    const currentTimestamp = Math.floor(Date.now() / 1000)

    const client_assertion_payload = {
        "sub": "PSDGB-OB-Unknown0015800001HQQrZAAX",
        "aud": "https://localhost:9446/oauth2/token",
        "iss": "PSDGB-OB-Unknown0015800001HQQrZAAX",
        "exp": currentTimestamp + 3600,
        "iat": currentTimestamp,
        "jti": "jti" + currentTimestamp
    }

    return await new jose.SignJWT(payload)
        .setProtectedHeader(header)
        .sign(new TextEncoder().encode(private_key));
}

function doAccInitiation() {
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
        "validUntil": "2024-11-03",
        "frequencyPerDay": 4,
        "combinedServiceIndicator": false
    }
    console.log("doAccInitiation body ", body);
    const requestOptions = {
        method: 'POST',
        headers: {
            'X-Request-ID': 'ee2a8a25-2ecc-43b9-a392-b3506ac5d80c',
            'Date': 'Tue, 22 Mar 2022 18:34:09 IST',
            'PSU-IP-Address': '127.0.1.1',
            'PSU-ID': 'admin@wso2.com',
            'PSU-ID-Type': 'email',
            'Digest': 'SHA-256=Qx1NXf7pLLBhxmrlRiUCRW0d6B0my9WguOCKRAx21Q==',
            'Signature': 'keyId="SN=894167e81b0fc06a,CA=1.2.840.113549.1.9.1=#16116d616c7368616e694077736f322e636f6d,CN=OB,OU=OB,O=WSO2,L=COL,ST=WP,C=LK",algorithm="rsa-sha256", headers="digest x-request-id date psu-id",signature=ZG7CoNfTtZ4e7y7DeIR5+gkvMEXO4WqJRs+O8rLJp6QbnAF4Y9uGkIxLK8plp9rEE6CeF1FXmRtVpMVxy80UmrVV/c4Dtzw7xYnBqdGw0DTc8xl5kWENrdp9ZipRXW+JPS3sAeLRn9Fx2hxVK02raXy0E88yf3pHpEZaGl9/p/xNNkT6G7K1ImFrUBp6gSfYDMmO+rwxzIhaJF7AlO5gjTW1qlnErNfAAS9VxDH8gFUGLJPByHuEiySkQMUfwZ7ZxB8sPIxxCtf2mxEu9uf4QU59wSHq/jrU97qtzG1E9K9unIKB64h/UpG5dJrmIWs7tK4M7jvkyd7jTdBmfeaZRw==',
            'TPP-Signature-Certificate': 'MIIFPTCCAyWgAwIBAgIJAIlBZ+gbD8BqMA0GCSqGSIb3DQEBBQUAMHMxCzAJBgNVBAYTAkxLMQswCQYDVQQIDAJXUDEMMAoGA1UEBwwDQ09MMQ0wCwYDVQQKDARXU08yMQswCQYDVQQLDAJPQjELMAkGA1UEAwwCT0IxIDAeBgkqhkiG9w0BCQEWEW1hbHNoYW5pQHdzbzIuY29tMB4XDTIzMDMxMzExNDgwOVoXDTI4MDMxMTExNDgwOVowczELMAkGA1UEBhMCR0IxGjAYBgNVBAoMEVdTTzIgKFVLKSBMSU1JVEVEMSswKQYDVQRhDCJQU0RHQi1PQi1Vbmtub3duMDAxNTgwMDAwMUhRUXJaQUFYMRswGQYDVQQDDBIwMDE1ODAwMDAxSFFRclpBQVgwggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQDGYKfZLJAnA96lQ3AuCOl/wn0HzfnNUv01c43RIbaiQsS5VL8RChkryeCZHuOyDWYGkLfZzyZJQLnfeyBZ6hbzaoNzgBprmxzYmS2scG7+R1UzQnkJLxKn7eZToreldt91/UBARNhCZ2whM85Z5wcosAwv5vvSY+mDizBBujUbZ5J956OTxtED5kDgRerAaD6toOGSjpqlOB6qTBcHOPoY3vTanDcTJpeHgkGIIkCOIJZLopoeXrO7kU34qm9H0ZgOkOAak4Qwrth7GlHtVaN+PSy3xj+a8s89/2lQSdPez7uodGuoZbeMbzljZ5u9jPeT6Dm0tXRIa/iXMUIyuXv9AgMBAAGjgdMwgdAwDgYDVR0PAQH/BAQDAgbAMB0GA1UdDgQWBBQfCnzY4BVxYLd58PFpObzGSoCitjCBngYIKwYBBQUHAQMEgZEwgY4wEwYGBACORgEGMAkGBwQAjkYBBgIwdwYGBACBmCcCMG0wRjBEBgcEAIGYJwEBDAZQU1BfQVMGBwQAgZgnAQIMBlBTUF9QSQYHBACBmCcBAwwGUFNQX0FJBgcEAIGYJwEEDAZQU1BfSUMMG0ZpbmFuY2lhbCBDb25kdWN0IEF1dGhvcml0eQwGR0ItRkNBMA0GCSqGSIb3DQEBBQUAA4ICAQCbMjnB+o8IV0mYBu4iqaFkKBk+E6EnXEcJsRA7IrqGv8S2nWluaWbNYUGfbYaeTT6bfY4VcWsZMGG3TDNLj5VVFUg90zGmK4Balz+J0eIYrG5heialNlu4xjsTpqS4lIpK94SgWJCjuab4sMvif5kY4svY5z3tbM/uNHi69R9N8y4wO75cVhphftx1yWpNDscBSMHNS55m64O1a5D+Hng0umNbK1nkQbgBjkM5MTbcKrC3Twn4fQyTh8xkZp1d1xQbzUbCWy+VpoS0DYyCIlX9Ip9pQxIjOvhGS3toqgmHLBEztEaEm3Kq0+jX6gimzhqI/a+RbsJKB7Dyi9rc6Gu+dJqy2OxilwO4YWuN6SWDw1Oqhpjeku1o7ZJzeXDuqENHO56AboR9RSU1nt7SymYTOoswO8EP+gbEvoI34el+4C7fFObCHBOZqhvEWo4TXGN+9kiiFzyWacw85e+Kc+jy4ghnkS5pD1BKtaxoGiBxeZwJJ+hCEoDkU5WD2s46Dk7Zg9nPJE0sqdzLnvCcggvnugZZCgXmorSClfchPH8OJYKsmLCG4vGYXwPjz9KNfWWYUWOpOSD9KolKmEgF1pTgAP//gfBI1owP/epYbA6tuDJuedfIDPFaoaB4jj94lRQ83NWIabA1DAXGSIqltwesgf3IzM57dGeqBnHfJhN3Jg==',
            'Authorization': 'Bearer eyJ4NXQiOiJNbU0yWVRVMlpqVXpNMkZqWlRVMlpUUm1ZelZpT0RsbU5ERXhPR0ZsTkdReE16ZzNZMkU1T0Rkall6WTNZMkkwTVRFMk9UWXhNRFUzTlRBek5Ea3haUSIsImtpZCI6IjEyMyIsInR5cCI6ImF0K2p3dCIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiJ0ZXN0VHBwQHdzbzIuY29tQGNhcmJvbi5zdXBlciIsImF1dCI6IkFQUExJQ0FUSU9OIiwiYXVkIjoiUFNER0ItT0ItVW5rbm93bjAwMTU4MDAwMDFIUVFyWkFBWCIsIm5iZiI6MTcyNTg3NDk0MSwiYXpwIjoiUFNER0ItT0ItVW5rbm93bjAwMTU4MDAwMDFIUVFyWkFBWCIsInNjb3BlIjoiYWNjb3VudHMiLCJpc3MiOiJodHRwczpcL1wvbG9jYWxob3N0Ojk0NDZcL29hdXRoMlwvdG9rZW4iLCJjbmYiOnsieDV0I1MyNTYiOiJNTHpXZEJqOUlBYlJ6Q0xrcl9JOHFLMlpEYVNHZV9EQVp4WFd2aU81MUc0In0sImV4cCI6MTcyNTg3ODU0MSwiaWF0IjoxNzI1ODc0OTQxLCJqdGkiOiJhNzlmMjg1MS03YWFlLTQ3ZTktOWFhMC0yMGQ4OGM5YjY5YzYiLCJjbGllbnRfaWQiOiJQU0RHQi1PQi1Vbmtub3duMDAxNTgwMDAwMUhRUXJaQUFYIn0.Oln4YK01P2OMobruNWKaNJEZGWdvPc_A-14wFL0eu7jllFv6XKbfwYaMxQN8OFnb53EyXlVfUmQrhejvcfiBwXh4rkYuzDAos5S_g8nYeIOnLhCq8e_vztBn3qntX-ceUA4SkeYOcmGIoBN2vbogBH6o0MaybJrm1gnOlNdMVUF1_NAlT4Xw66YqJNv5HkwkVQJr1c7bZlQImG0dRdXjADS_3RVnqDoCK6F_qNy-RPygNGjos7A7bPrKPvY5yWHjFlXTBk2mCNKxcTkElDMKT-sq8LklbYIPTAozTodSZLKhIr9VUdKUi-XTNQA8Qf9ha6bNKKOYGCMOwYqsuoTLYA',
            'Content-Type': 'application/json; charset=UTF-8',
            'Access-Control-Allow-Origin': '*',
            'Refeerer-Policy': 'no-referrer',
            'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT, DELETE',
            'Access-Control-Allow-Credentials': 'true',
            'Access-Control-Max-Age': '86400',
            'Access-Control-Allow-Headers': '*'
        },
        agent: {
            rejectUnauthorized: false,
            cert: public_key,
            key: private_key,
            ca: 'MIIFYjCCA0oCCQCy9fZwlYSqmDANBgkqhkiG9w0BAQsFADBzMQswCQYDVQQGEwJMSzELMAkGA1UECAwCV1AxDDAKBgNVBAcMA0NPTDENMAsGA1UECgwEV1NPMjELMAkGA1UECwwCT0IxCzAJBgNVBAMMAk9CMSAwHgYJKoZIhvcNAQkBFhFtYWxzaGFuaUB3c28yLmNvbTAeFw0yMzAzMTMxMTQ1MDlaFw0yODAzMTExMTQ1MDlaMHMxCzAJBgNVBAYTAkxLMQswCQYDVQQIDAJXUDEMMAoGA1UEBwwDQ09MMQ0wCwYDVQQKDARXU08yMQswCQYDVQQLDAJPQjELMAkGA1UEAwwCT0IxIDAeBgkqhkiG9w0BCQEWEW1hbHNoYW5pQHdzbzIuY29tMIICIjANBgkqhkiG9w0BAQEFAAOCAg8AMIICCgKCAgEAta0Rs2xrnmGoVN9rP5W0O6tZby9Cx2bm1Cj5nJCvRlw4AYqguCqFgCvr1jxAx6YOvL2V77CnHL/vxdXu+G/+hfCnqMfC2UkocPBI2R4L9jNl2KNIcmYDt4sbkJzlGsuL+5sIbnPp5iAwsj6H21bdHrcAxvN6Xj8xvEnSVsnrKpXdi9CZ98sie6YGWOWQNutOYp3cSSb32Hda1a5qHiP62IMDmEF4Y1DLzrChRYt1de5XL76PMLykSyMguZd389JaKEqGFZ8F3KC5uYQoxSr+ES++QNcsHYFHXRb089Vn8/wMAwEOFeXcUo2Fi8YK228TPkHUSj7l2+9lwuT4Yg3LKdv7GF8Lo5HLzRIRk1jnnfhKB5adV9VQwPV6wwsx0vyt8jVDmS6cwWbc692bovmKomeo/cRmqVptKO81mSLa0uheV311Iw1BBXmAnKWrPh86AZMsBd3cDvXAWepWXhrSAXww9M78jvLbXulWN9kef7vTztIL7d8y5/2P+UpWG4j/9/C8+7dt2oBvWzsvg7HWRdX35VbW1GbqmHjjLpQOSgsnzHc+ZHVP+X2J1TtqFYXa/XYU4BBZvcEePNxRiVK01Y0Ne387+W9RtnpYJuDW/r5PvsD/uUZPJTXowret93pqH/OqAuUqPi1Dj0IQaJnOK4e/l7nkiOwzjL5x6S36KG0CAwEAATANBgkqhkiG9w0BAQsFAAOCAgEAQD2nMkcJCUFMBPsbyaFmNEGt2qYNoxz6kXWGbIr98CSSIK47/1JpnZYkt1RKZczzA5tlps+ro7n/HZ57LPlPOXeJIk3PzDxxvXcfh4EvP1z/Hx7klx46R0OF14LUZVT1JRE1xPZmZ38OHY/vWvXX1tWCu7jES/NT4UZJtub220Tv4I/zdiiuYpqcQeRXeztuChiH334VcnzZRjoP/z7Z4BD/vEWmdLHrmfMmqhE4RPLOIu5Myos7k62Uy0aOGyO+IsPZ0Ie2ridPs1zdad0wAFASstjChNNrSq+y3qqbnkLwV4r4phQFUIhLruQK0KtADfwNkNf676d/Nat2bvqK5Gu5Hkm2vZm2NLwIDVgm/KXe5EadAufqoD2xhBUk/8jHi7bfJUhW6CAgFQnpq64v8Vtdu7bcYpeB2IwpcmWWvoy8KdCoSBtvbWBqkrf4Y+FJonhhwlFo8xD5AJ/70rd3RHXhFzSxxiG+T/WACDPXlXaFixBnWOuGpmm+kolaLJ9JvbRPw4nt6MA557W0znKgwRyeVjgyp16EiELV3LvcqGSL5Vc9jz5uKl2FbROsOYyz/4QCIfPLptsHhpbbsTvY6O49pu+qNcaHNltee3xOoidtoyH6V8HGyk3XKTir+JryG7FqvtxaraSJPZTJFRDWoekfPaaPFrO9pf3LNcKlzbU='
        },
        body: JSON.stringify(body),
    };
    console.log("doAccInitiation requestOptions ", requestOptions);

    fetch("http://localhost:8280/xs2a/v1/consents", requestOptions)
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

// async function doAccInitiation1() {
//     const body = {
//         "access": {
//             "accounts": [

//             ],
//             "balances": [

//             ],
//             "transactions": [

//             ]
//         },
//         "recurringIndicator": true,
//         "validUntil": "2024-11-03",
//         "frequencyPerDay": 4,
//         "combinedServiceIndicator": false
//     }
//     const headers = {
//         'X-Request-ID': 'ee2a8a25-2ecc-43b9-a392-b3506ac5d80c',
//         'Date': 'Tue, 22 Mar 2022 18:34:09 IST',
//         'PSU-IP-Address': '127.0.1.1',
//         'PSU-ID': 'admin@wso2.com',
//         'PSU-ID-Type': 'email',
//         'Digest': 'SHA-256=Qx1NXf7pLLBhxmrlRiUCRW0d6B0my9WguOCKRAx21Q==',
//         'Signature': 'keyId="SN=894167e81b0fc06a,CA=1.2.840.113549.1.9.1=#16116d616c7368616e694077736f322e636f6d,CN=OB,OU=OB,O=WSO2,L=COL,ST=WP,C=LK",algorithm="rsa-sha256", headers="digest x-request-id date psu-id",signature=ZG7CoNfTtZ4e7y7DeIR5+gkvMEXO4WqJRs+O8rLJp6QbnAF4Y9uGkIxLK8plp9rEE6CeF1FXmRtVpMVxy80UmrVV/c4Dtzw7xYnBqdGw0DTc8xl5kWENrdp9ZipRXW+JPS3sAeLRn9Fx2hxVK02raXy0E88yf3pHpEZaGl9/p/xNNkT6G7K1ImFrUBp6gSfYDMmO+rwxzIhaJF7AlO5gjTW1qlnErNfAAS9VxDH8gFUGLJPByHuEiySkQMUfwZ7ZxB8sPIxxCtf2mxEu9uf4QU59wSHq/jrU97qtzG1E9K9unIKB64h/UpG5dJrmIWs7tK4M7jvkyd7jTdBmfeaZRw==',
//         'TPP-Signature-Certificate': 'MIIFPTCCAyWgAwIBAgIJAIlBZ+gbD8BqMA0GCSqGSIb3DQEBBQUAMHMxCzAJBgNVBAYTAkxLMQswCQYDVQQIDAJXUDEMMAoGA1UEBwwDQ09MMQ0wCwYDVQQKDARXU08yMQswCQYDVQQLDAJPQjELMAkGA1UEAwwCT0IxIDAeBgkqhkiG9w0BCQEWEW1hbHNoYW5pQHdzbzIuY29tMB4XDTIzMDMxMzExNDgwOVoXDTI4MDMxMTExNDgwOVowczELMAkGA1UEBhMCR0IxGjAYBgNVBAoMEVdTTzIgKFVLKSBMSU1JVEVEMSswKQYDVQRhDCJQU0RHQi1PQi1Vbmtub3duMDAxNTgwMDAwMUhRUXJaQUFYMRswGQYDVQQDDBIwMDE1ODAwMDAxSFFRclpBQVgwggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQDGYKfZLJAnA96lQ3AuCOl/wn0HzfnNUv01c43RIbaiQsS5VL8RChkryeCZHuOyDWYGkLfZzyZJQLnfeyBZ6hbzaoNzgBprmxzYmS2scG7+R1UzQnkJLxKn7eZToreldt91/UBARNhCZ2whM85Z5wcosAwv5vvSY+mDizBBujUbZ5J956OTxtED5kDgRerAaD6toOGSjpqlOB6qTBcHOPoY3vTanDcTJpeHgkGIIkCOIJZLopoeXrO7kU34qm9H0ZgOkOAak4Qwrth7GlHtVaN+PSy3xj+a8s89/2lQSdPez7uodGuoZbeMbzljZ5u9jPeT6Dm0tXRIa/iXMUIyuXv9AgMBAAGjgdMwgdAwDgYDVR0PAQH/BAQDAgbAMB0GA1UdDgQWBBQfCnzY4BVxYLd58PFpObzGSoCitjCBngYIKwYBBQUHAQMEgZEwgY4wEwYGBACORgEGMAkGBwQAjkYBBgIwdwYGBACBmCcCMG0wRjBEBgcEAIGYJwEBDAZQU1BfQVMGBwQAgZgnAQIMBlBTUF9QSQYHBACBmCcBAwwGUFNQX0FJBgcEAIGYJwEEDAZQU1BfSUMMG0ZpbmFuY2lhbCBDb25kdWN0IEF1dGhvcml0eQwGR0ItRkNBMA0GCSqGSIb3DQEBBQUAA4ICAQCbMjnB+o8IV0mYBu4iqaFkKBk+E6EnXEcJsRA7IrqGv8S2nWluaWbNYUGfbYaeTT6bfY4VcWsZMGG3TDNLj5VVFUg90zGmK4Balz+J0eIYrG5heialNlu4xjsTpqS4lIpK94SgWJCjuab4sMvif5kY4svY5z3tbM/uNHi69R9N8y4wO75cVhphftx1yWpNDscBSMHNS55m64O1a5D+Hng0umNbK1nkQbgBjkM5MTbcKrC3Twn4fQyTh8xkZp1d1xQbzUbCWy+VpoS0DYyCIlX9Ip9pQxIjOvhGS3toqgmHLBEztEaEm3Kq0+jX6gimzhqI/a+RbsJKB7Dyi9rc6Gu+dJqy2OxilwO4YWuN6SWDw1Oqhpjeku1o7ZJzeXDuqENHO56AboR9RSU1nt7SymYTOoswO8EP+gbEvoI34el+4C7fFObCHBOZqhvEWo4TXGN+9kiiFzyWacw85e+Kc+jy4ghnkS5pD1BKtaxoGiBxeZwJJ+hCEoDkU5WD2s46Dk7Zg9nPJE0sqdzLnvCcggvnugZZCgXmorSClfchPH8OJYKsmLCG4vGYXwPjz9KNfWWYUWOpOSD9KolKmEgF1pTgAP//gfBI1owP/epYbA6tuDJuedfIDPFaoaB4jj94lRQ83NWIabA1DAXGSIqltwesgf3IzM57dGeqBnHfJhN3Jg==',
//         'Authorization': 'Bearer eyJ4NXQiOiJNbU0yWVRVMlpqVXpNMkZqWlRVMlpUUm1ZelZpT0RsbU5ERXhPR0ZsTkdReE16ZzNZMkU1T0Rkall6WTNZMkkwTVRFMk9UWXhNRFUzTlRBek5Ea3haUSIsImtpZCI6IjEyMyIsInR5cCI6ImF0K2p3dCIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiJ0ZXN0VHBwQHdzbzIuY29tQGNhcmJvbi5zdXBlciIsImF1dCI6IkFQUExJQ0FUSU9OIiwiYXVkIjoiUFNER0ItT0ItVW5rbm93bjAwMTU4MDAwMDFIUVFyWkFBWCIsIm5iZiI6MTcyNTg3NDk0MSwiYXpwIjoiUFNER0ItT0ItVW5rbm93bjAwMTU4MDAwMDFIUVFyWkFBWCIsInNjb3BlIjoiYWNjb3VudHMiLCJpc3MiOiJodHRwczpcL1wvbG9jYWxob3N0Ojk0NDZcL29hdXRoMlwvdG9rZW4iLCJjbmYiOnsieDV0I1MyNTYiOiJNTHpXZEJqOUlBYlJ6Q0xrcl9JOHFLMlpEYVNHZV9EQVp4WFd2aU81MUc0In0sImV4cCI6MTcyNTg3ODU0MSwiaWF0IjoxNzI1ODc0OTQxLCJqdGkiOiJhNzlmMjg1MS03YWFlLTQ3ZTktOWFhMC0yMGQ4OGM5YjY5YzYiLCJjbGllbnRfaWQiOiJQU0RHQi1PQi1Vbmtub3duMDAxNTgwMDAwMUhRUXJaQUFYIn0.Oln4YK01P2OMobruNWKaNJEZGWdvPc_A-14wFL0eu7jllFv6XKbfwYaMxQN8OFnb53EyXlVfUmQrhejvcfiBwXh4rkYuzDAos5S_g8nYeIOnLhCq8e_vztBn3qntX-ceUA4SkeYOcmGIoBN2vbogBH6o0MaybJrm1gnOlNdMVUF1_NAlT4Xw66YqJNv5HkwkVQJr1c7bZlQImG0dRdXjADS_3RVnqDoCK6F_qNy-RPygNGjos7A7bPrKPvY5yWHjFlXTBk2mCNKxcTkElDMKT-sq8LklbYIPTAozTodSZLKhIr9VUdKUi-XTNQA8Qf9ha6bNKKOYGCMOwYqsuoTLYA',
//         'Content-Type': 'application/json; charset=UTF-8',
//         'Access-Control-Allow-Origin': '*',
//         'Refeerer-Policy': 'no-referrer',
//         'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT, DELETE',
//         'Access-Control-Allow-Credentials': 'true',
//         'Access-Control-Max-Age': '86400',
//         'Access-Control-Allow-Headers': '*'
//     }

//     const requestOptions = {
//         method: 'POST',
//         headers: {
//             'X-Request-ID': 'ee2a8a25-2ecc-43b9-a392-b3506ac5d80c',
//             'Date': 'Tue, 22 Mar 2022 18:34:09 IST',
//             'PSU-IP-Address': '127.0.1.1',
//             'PSU-ID': 'admin@wso2.com',
//             'PSU-ID-Type': 'email',
//             'Digest': 'SHA-256=Qx1NXf7pLLBhxmrlRiUCRW0d6B0my9WguOCKRAx21Q==',
//             'Signature': 'keyId="SN=894167e81b0fc06a,CA=1.2.840.113549.1.9.1=#16116d616c7368616e694077736f322e636f6d,CN=OB,OU=OB,O=WSO2,L=COL,ST=WP,C=LK",algorithm="rsa-sha256", headers="digest x-request-id date psu-id",signature=ZG7CoNfTtZ4e7y7DeIR5+gkvMEXO4WqJRs+O8rLJp6QbnAF4Y9uGkIxLK8plp9rEE6CeF1FXmRtVpMVxy80UmrVV/c4Dtzw7xYnBqdGw0DTc8xl5kWENrdp9ZipRXW+JPS3sAeLRn9Fx2hxVK02raXy0E88yf3pHpEZaGl9/p/xNNkT6G7K1ImFrUBp6gSfYDMmO+rwxzIhaJF7AlO5gjTW1qlnErNfAAS9VxDH8gFUGLJPByHuEiySkQMUfwZ7ZxB8sPIxxCtf2mxEu9uf4QU59wSHq/jrU97qtzG1E9K9unIKB64h/UpG5dJrmIWs7tK4M7jvkyd7jTdBmfeaZRw==',
//             'TPP-Signature-Certificate': 'MIIFPTCCAyWgAwIBAgIJAIlBZ+gbD8BqMA0GCSqGSIb3DQEBBQUAMHMxCzAJBgNVBAYTAkxLMQswCQYDVQQIDAJXUDEMMAoGA1UEBwwDQ09MMQ0wCwYDVQQKDARXU08yMQswCQYDVQQLDAJPQjELMAkGA1UEAwwCT0IxIDAeBgkqhkiG9w0BCQEWEW1hbHNoYW5pQHdzbzIuY29tMB4XDTIzMDMxMzExNDgwOVoXDTI4MDMxMTExNDgwOVowczELMAkGA1UEBhMCR0IxGjAYBgNVBAoMEVdTTzIgKFVLKSBMSU1JVEVEMSswKQYDVQRhDCJQU0RHQi1PQi1Vbmtub3duMDAxNTgwMDAwMUhRUXJaQUFYMRswGQYDVQQDDBIwMDE1ODAwMDAxSFFRclpBQVgwggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQDGYKfZLJAnA96lQ3AuCOl/wn0HzfnNUv01c43RIbaiQsS5VL8RChkryeCZHuOyDWYGkLfZzyZJQLnfeyBZ6hbzaoNzgBprmxzYmS2scG7+R1UzQnkJLxKn7eZToreldt91/UBARNhCZ2whM85Z5wcosAwv5vvSY+mDizBBujUbZ5J956OTxtED5kDgRerAaD6toOGSjpqlOB6qTBcHOPoY3vTanDcTJpeHgkGIIkCOIJZLopoeXrO7kU34qm9H0ZgOkOAak4Qwrth7GlHtVaN+PSy3xj+a8s89/2lQSdPez7uodGuoZbeMbzljZ5u9jPeT6Dm0tXRIa/iXMUIyuXv9AgMBAAGjgdMwgdAwDgYDVR0PAQH/BAQDAgbAMB0GA1UdDgQWBBQfCnzY4BVxYLd58PFpObzGSoCitjCBngYIKwYBBQUHAQMEgZEwgY4wEwYGBACORgEGMAkGBwQAjkYBBgIwdwYGBACBmCcCMG0wRjBEBgcEAIGYJwEBDAZQU1BfQVMGBwQAgZgnAQIMBlBTUF9QSQYHBACBmCcBAwwGUFNQX0FJBgcEAIGYJwEEDAZQU1BfSUMMG0ZpbmFuY2lhbCBDb25kdWN0IEF1dGhvcml0eQwGR0ItRkNBMA0GCSqGSIb3DQEBBQUAA4ICAQCbMjnB+o8IV0mYBu4iqaFkKBk+E6EnXEcJsRA7IrqGv8S2nWluaWbNYUGfbYaeTT6bfY4VcWsZMGG3TDNLj5VVFUg90zGmK4Balz+J0eIYrG5heialNlu4xjsTpqS4lIpK94SgWJCjuab4sMvif5kY4svY5z3tbM/uNHi69R9N8y4wO75cVhphftx1yWpNDscBSMHNS55m64O1a5D+Hng0umNbK1nkQbgBjkM5MTbcKrC3Twn4fQyTh8xkZp1d1xQbzUbCWy+VpoS0DYyCIlX9Ip9pQxIjOvhGS3toqgmHLBEztEaEm3Kq0+jX6gimzhqI/a+RbsJKB7Dyi9rc6Gu+dJqy2OxilwO4YWuN6SWDw1Oqhpjeku1o7ZJzeXDuqENHO56AboR9RSU1nt7SymYTOoswO8EP+gbEvoI34el+4C7fFObCHBOZqhvEWo4TXGN+9kiiFzyWacw85e+Kc+jy4ghnkS5pD1BKtaxoGiBxeZwJJ+hCEoDkU5WD2s46Dk7Zg9nPJE0sqdzLnvCcggvnugZZCgXmorSClfchPH8OJYKsmLCG4vGYXwPjz9KNfWWYUWOpOSD9KolKmEgF1pTgAP//gfBI1owP/epYbA6tuDJuedfIDPFaoaB4jj94lRQ83NWIabA1DAXGSIqltwesgf3IzM57dGeqBnHfJhN3Jg==',
//             'Authorization': 'Bearer eyJ4NXQiOiJNbU0yWVRVMlpqVXpNMkZqWlRVMlpUUm1ZelZpT0RsbU5ERXhPR0ZsTkdReE16ZzNZMkU1T0Rkall6WTNZMkkwTVRFMk9UWXhNRFUzTlRBek5Ea3haUSIsImtpZCI6IjEyMyIsInR5cCI6ImF0K2p3dCIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiJ0ZXN0VHBwQHdzbzIuY29tQGNhcmJvbi5zdXBlciIsImF1dCI6IkFQUExJQ0FUSU9OIiwiYXVkIjoiUFNER0ItT0ItVW5rbm93bjAwMTU4MDAwMDFIUVFyWkFBWCIsIm5iZiI6MTcyNTg3NDk0MSwiYXpwIjoiUFNER0ItT0ItVW5rbm93bjAwMTU4MDAwMDFIUVFyWkFBWCIsInNjb3BlIjoiYWNjb3VudHMiLCJpc3MiOiJodHRwczpcL1wvbG9jYWxob3N0Ojk0NDZcL29hdXRoMlwvdG9rZW4iLCJjbmYiOnsieDV0I1MyNTYiOiJNTHpXZEJqOUlBYlJ6Q0xrcl9JOHFLMlpEYVNHZV9EQVp4WFd2aU81MUc0In0sImV4cCI6MTcyNTg3ODU0MSwiaWF0IjoxNzI1ODc0OTQxLCJqdGkiOiJhNzlmMjg1MS03YWFlLTQ3ZTktOWFhMC0yMGQ4OGM5YjY5YzYiLCJjbGllbnRfaWQiOiJQU0RHQi1PQi1Vbmtub3duMDAxNTgwMDAwMUhRUXJaQUFYIn0.Oln4YK01P2OMobruNWKaNJEZGWdvPc_A-14wFL0eu7jllFv6XKbfwYaMxQN8OFnb53EyXlVfUmQrhejvcfiBwXh4rkYuzDAos5S_g8nYeIOnLhCq8e_vztBn3qntX-ceUA4SkeYOcmGIoBN2vbogBH6o0MaybJrm1gnOlNdMVUF1_NAlT4Xw66YqJNv5HkwkVQJr1c7bZlQImG0dRdXjADS_3RVnqDoCK6F_qNy-RPygNGjos7A7bPrKPvY5yWHjFlXTBk2mCNKxcTkElDMKT-sq8LklbYIPTAozTodSZLKhIr9VUdKUi-XTNQA8Qf9ha6bNKKOYGCMOwYqsuoTLYA',
//             'Content-Type': 'application/json; charset=UTF-8',
//             'Access-Control-Allow-Origin': '*',
//             'Refeerer-Policy': 'no-referrer',
//             'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT, DELETE',
//             'Access-Control-Allow-Credentials': 'true',
//             'Access-Control-Max-Age': '86400',
//             'Access-Control-Allow-Headers': '*'
//         },
//         agent: {
//             rejectUnauthorized: false,
//             cert: public_key,
//             key: private_key
//         },
//         body: JSON.stringify(body),
//     };

//     // axios.post('https://localhost:8243/xs2a/v1/consents', JSON.stringify(body), {
//     //     headers: headers
//     // })
//     //     .then((response) => {
//     //         console.log(response);
//     //     }, (error) => {
//     //         console.log(error);
//     //     });

//     // ...
//     const httpsAgent = new https.Agent({
//         // cert: fs.readFileSync('qseal.pem'),
//         // key: fs.readFileSync('qseal.key'),
//         cert: public_key,
//         key: private_key
//     });

//     const result = await axios.get('https://localhost:8243/xs2a/v1/consents/1234', { httpsAgent });
//     console.log(result.data);
// }