const options = require('./config');
const ftp = require('basic-ftp');

const downloadCatalog = async (
    ftpClient, paths, options) => {
    try {
        await ftpClient.access(options);
        await ftpClient.cd('/htdocs');
        await ftpClient.downloadTo(paths.localFilePath, paths.remoteFilePath);
    } catch(err) {
        console.log(err);
    } finally {
        ftpClient.close();
    }
} 



const ftpClient = new ftp.Client();
ftpClient.ftp.verbose = true;
const paths = {
    localFilePath: './catalog-local.csv',
    remoteFilePath: 'catalog-remote.csv',
};


downloadCatalog(ftpClient, paths, options);