import file_system from 'fs';
import fetch from 'node-fetch';

[
    ['apps/cm', 'cols'],
    ['apps/cm', 'e-e-rules'],
    // ['apps/cm', 'meetings'],
    // ['apps/cm', 'settings'],
    // ['apps/cm', 'cm-execs'],
    ['apps/cm', 'chords'],
    // ['S', 'apps'],
    // ['S', 'main', 'css'],
].forEach(([path, name, ext = 'json']) => {
    fetch(`https://jesmyl.space/${path}/${name}.${ext}`)
        .then(r => ext === 'json' ? r.json() : r.text())
        .then(content =>
            file_system.writeFile(`./back/${path}/+case/${name}.json`,
                ext === 'json'
                    ? JSON.stringify(content, null, 2)
                    : content,
                () => console.info(`File ${path}/${name}.${ext} checked!`)
            )
        )
        .catch(err => console.info(err));
});
