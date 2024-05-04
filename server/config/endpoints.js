require("dotenv").config();

const pingEndpoint = process.env.PING_ENDPOINT;
const loginEP = process.env.LOGIN_ENDPOINT;
const signupEP = process.env.SIGNUP_ENDPOINT;

const loginEndpoint = versionEP + authEP + loginEP;
const signupEndpoint = versionEP + authEP + signupEP; 
const logoutEndpoint = versionEP + authEP + logoutEP;

module.exports = {
    pingEndpoint,
    loginEndpoint,
    signupEndpoint,
    logoutEndpoint
};
