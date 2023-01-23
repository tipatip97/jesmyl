import file_system from 'fs';
import archiver from 'archiver';
import FormData from 'form-data';
import fetch from 'node-fetch';
import { exec } from 'child_process';

const filename = `tmp-build-archive.zip`;
const passphrase = (process.argv.find(param => param.startsWith('--pass=')) || '').split('=')[1] || 'default';
const isRelease = process.argv.find(param => param === '--release');

const archive = (isFront, onError) => {
    const archive = archiver('zip');
    console.info(`Send created ${filename} file`);

    archive.on('error', (err) => {
        onError?.();
        throw err;
    });

    archive.on('end', () => {
        const body = new FormData();
        body.append(0, file_system.createReadStream(filename));
        fetch(`https://jesmyl.ru/bomba.php?pass=${passphrase}&isFront=${isFront ? '1' : ''}&isRelease=${isRelease ? 1 : ''}`, {
            method: 'POST',
            body
        })
            .then(r => r.text())
            .then(r => {
                const [firstPart, secondPart] = r.split('===JSON:separation===');

                try {
                    if (firstPart) {
                        console.info('Upload respond with errors:', JSON.parse(secondPart));
                        console.error(firstPart);
                        onError?.();
                    } else
                        console.info('Upload respond:', JSON.parse(secondPart));
                } catch (e) {
                    console.error(e, r);
                    onError?.();
                }
                file_system.unlinkSync(filename);
                console.info('DONE!');
            }).catch((error) => {
                console.error('upload error:', error);
                file_system.unlinkSync(filename);
                onError?.();
            });
    });

    archive.pipe(file_system.createWriteStream(filename));
    archive.directory(isFront ? 'build' : 'src/back', false);
    archive.finalize();
};


if (~process.argv.indexOf('--push-front')) {
    const riseVersion = (version, cb) =>
        file_system.writeFile('src/front/version.json', version, () => cb?.());

    file_system.readFile('src/front/version.json', 'utf8', (err, versionStr) => {
        if (err) {
            console.error('version not inkremented', err);
            return;
        }
        let { num } = JSON.parse(versionStr);
        const prevNum = JSON.stringify({ num });
        num++;
        const newNum = JSON.stringify({ num });

        riseVersion(newNum, () => {
            console.info(`Build ${num} is running...`);
            exec('npm run build', (err) => {
                console.info('Build is finished.');
                if (err)
                    riseVersion(prevNum, () => console.error('BUILD FAILURE!', err));
                else archive(true, () => riseVersion(prevNum));
            });
        });
    });
}

if (~process.argv.indexOf('--push-back')) archive(false);
