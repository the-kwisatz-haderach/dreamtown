const nodemailer = require('nodemailer');

const options = {
    service: 'Gmail',
    port: process.env.GMAIL_PORT,
    host: process.env.GMAIL_HOST,
    auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASSWORD
    },
}

let transporter = nodemailer.createTransport(options);

transporter.verify((error, success) => {
    if (error) console.log(error);
    else (console.log('Success! Server is ready to take our messages.'))
});

module.exports = transporter;