import file_system from 'fs';
import fetch from 'node-fetch';

[
    ['apps/cm', 'cols'],
    ['apps/cm', 'e-e-rules'],
    ['apps/cm', 'meetings'],
    ['apps/cm', 'settings'],
    // ['apps/cm', 'cm-execs'],
    ['apps/cm', 'chords'],
].forEach(([path, name]) => {
    fetch(`https://jesmyl.space/${path}/${name}.json`)
        .then(r => r.json())
        .then(content => file_system.writeFile(`./back/${path}/+case/${name}.json`, JSON.stringify(content, null, 2), () => console.log(`File ${path}/${name}.json rewrited!`)))
        .catch(err => console.log(err));
});
