const options = require('./config');
const ftp = require('basic-ftp');

const listFiles = async (ftpClient, options) => {
    try {
        await ftpClient.access(options);
        const files = await ftpClient.list('/htdocs');
        console.log(files);
    } catch(err) {
        console.log(err);
    } finally {
        ftpClient.close();
    }
} 



const ftpClient = new ftp.Client();
ftpClient.ftp.verbose = true;

listFiles(ftpClient, options);