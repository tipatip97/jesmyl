import file_system from 'fs';
import fetch from 'node-fetch';

[
    ['', 'package'],
    ['apps/index', 'schedules'],
    ['', 'bonjour', null],
    ['apps/cm', 'cols'],
    ['apps/cm', 'eeStorage'],
    ['apps/cm', 'meetings'],
    ['apps/cm', 'mp3Rules'],
    ['apps/cm', 'chords'],
    ['apps/cm', 'chordTracks'],
    ['apps/leader', 'people'],
    ['apps/leader', 'contexts'],
].forEach(([path, name, ext = 'json']) => {
    const fileExt = ext === null ? '' : `.${ext}`;
    const filePath = `${path}/${name}${fileExt}`;

    fetch(`https://jesmyl.ru/${filePath}`)
        .then(r => r.text())
        .then(contentStr => {
            const caseDir = `./src/back/${path ? `${path}/` : ''}+case`;

            if (!file_system.existsSync(caseDir))
                file_system.mkdirSync(caseDir);

            let content = contentStr;
            try {
                content = JSON.stringify(JSON.parse(contentStr), null, 2);
            } catch (e) { }

            file_system.writeFile(`${caseDir}/${name}${fileExt}`,
                content,
                () => console.info(`File ${path}/${name}${fileExt} checked!`)
            );
        }
        )
        .catch(err => console.info(err));
});
