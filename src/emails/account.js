const nodemailer = require('nodemailer')

const from = 'otf.serviceteam@gmail.com'

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: from,
        pass: process.env.EMAIL_PASSWORD
    }
});

const sendWelcomeEmail = (email, name, cb) => {

    var mailOptions = {
        from: from,
        to: email,
        subject: 'Welcome to the Task Manager Application',
        text: `Welcome to the app, ${name}. Let me know how you get along with the app. `
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            cb(error);
        } else {
            cb(undefined, info)
        }
    });
}

const sendCancellationEmail = (email, name) => {
    var mailOptions = {
        from: from,
        to: email,
        subject: 'Sorry to see you go!',
        text: `Goodbye, ${name}. I hope to see you back sometime soon. `
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            cb(error);
        } else {
            cb(undefined, info)
        }
    });
}

module.exports = {
    sendWelcomeEmail,
    sendCancellationEmail
}