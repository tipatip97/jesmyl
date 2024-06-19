import fs from 'fs';

const dir = `./src/back/apps/cm/+case/`;

const cols = JSON.parse('' + fs.readFileSync(`${dir}cols.json`));

const refs = {};

cols.coms.forEach(com => {
  if (com.r == null) return;

  Object.entries(com.r).forEach(([key, val]) => {
    if (!val) return;
    if (refs[key] == null) refs[key] = {};

    refs[key][com.w] = val;
  });

  delete com.r;
});

cols.cats.forEach(cat => {
  if (cat.k !== 'dict' || refs[cat.w] == null) return;

  cat.d = refs[cat.w];
  delete refs[cat.w];
});

console.log(refs);

fs.writeFileSync(`${dir}cols1.json`, JSON.stringify(cols, null, '  '));
