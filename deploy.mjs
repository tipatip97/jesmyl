import file_system from 'fs';
import archiver from 'archiver';
import FormData from 'form-data';
import fetch from 'node-fetch';
import { exec } from 'child_process';

const filename = `tmp-build-archive.zip`;
const isDev = ~process.argv.indexOf('--dev');
const isProd = ~process.argv.indexOf('--prod');
const isQa = ~process.argv.indexOf('--qa');
const passphrase = (process.argv.find(param => param.startsWith('--pass=')) || '').split('=')[1] || 'default';

if (isDev || isProd || isQa) {
    console.log('Build is running...');
    exec('npm run build', (err) => {
        console.log('Build is finished.');
        if (err) {
            console.log('BUILD FAILURE!');
            return;
        }
        const output = file_system.createWriteStream(filename);
        const archive = archiver('zip');
        console.log(`Send created ${filename} file`);

        archive.on('error', (err) => {
            throw err;
        });

        archive.on('end', () => {
            const body = new FormData();
            body.append(0, file_system.createReadStream(filename));
            fetch(`https://jesmyl.space/bomba.php?pass=${passphrase}&env=${isProd ? 'prod' : isQa ? 'qa' : 'dev'}`, {
                method: 'POST',
                body
            }).then(r => r.json()).then(r => {
                console.log('Upload respond', r);
                file_system.unlinkSync(filename);
                console.log('DONE!');
            });
        });

        archive.pipe(output);
        archive.directory('build', false);
        archive.finalize();
    });
} else console.error('Plase put env flag!');