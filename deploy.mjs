import file_system from 'fs';
import archiver from 'archiver';
import FormData from 'form-data';
import fetch from 'node-fetch';
import { exec } from 'child_process';

const filename = `tmp-build-archive.zip`;
const passphrase = (process.argv.find(param => param.startsWith('--pass=')) || '').split('=')[1] || 'default';
const isRelease = process.argv.find(param => param === '--release');

const archive = (isFront) => {
    const archive = archiver('zip');
    console.info(`Send created ${filename} file`);

    archive.on('error', (err) => {
        throw err;
    });

    archive.on('end', () => {
        const body = new FormData();
        body.append(0, file_system.createReadStream(filename));
        fetch(`https://jesmyl.space/bomba.php?pass=${passphrase}&isFront=${isFront ? '1' : ''}&isRelease=${isRelease ? 1 : ''}`, {
            method: 'POST',
            body
        }).then(r => r.json()).then(r => {
            console.info('Upload respond', r);
            file_system.unlinkSync(filename);
            console.info('DONE!');
        }).catch((error) => {
            console.error('upload error:', error);
            file_system.unlinkSync(filename);
        });
    });

    archive.pipe(file_system.createWriteStream(filename));
    archive.directory(isFront ? 'build' : 'back', false);
    archive.finalize();
};

if (~process.argv.indexOf('--push-front')) {
    console.info('Build is running...');
    exec('npm run build', (err) => {
        console.info('Build is finished.');
        if (err) console.error('BUILD FAILURE!');
        else archive(true);
    });
}

if (~process.argv.indexOf('--push-back')) archive(false);
