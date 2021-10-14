require('dotenv').config();

const options = {
    host: process.env.FTP_HOST,
    port: process.env.FTP_PORT,
    user: process.env.FTP_USER,
    password: process.env.FTP_PASSWORD,
    secure: false
};

module.exports = options;