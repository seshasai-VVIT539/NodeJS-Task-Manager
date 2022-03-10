const request = require('postman-request')

const verifyGoogleToken = (token, callback) => {
    const url = "https://oauth2.googleapis.com/tokeninfo?id_token=" + token
    request({ url: url, json: true }, (error, response) => {
        if (error) {
            callback(error, undefined)
        } else {
            response = response.body
            if (response.error) {
                callback(response.error, undefined)
            } else {
                callback(undefined, response)
            }
        }
    })
}

module.exports=verifyGoogleToken