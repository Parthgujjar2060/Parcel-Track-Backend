const { browsers } = require('../config/browser');

class LoginData {
    constructor(data) {
        this.browserName = data.browserName;
        this.browserVersion = data.browserVersion;
        this.os = data.os;
        this.screenresolution = data.screenresolution;
    }

    static validator(data) {
        if (!data) {
            return false;
        }
        if (!data.browserName) {
            return false;
        }
        if (!data.browserVersion) {
            return false;
        }
        if (!data.os) {
            return false;
        }
        if (!data.screenresolution) {
            return false;
        }
        return true;
    }

}

module.exports = { LoginData }