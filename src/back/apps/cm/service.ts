import https from 'https';
import { filer } from '../../complect/filer/Filer';
import { CmMp3Rule } from './CmBackend.model';

const fetch = (url: string) => {
    return new Promise<string>((resolve, reject) => {
        https.get(url, {
            headers: {
                'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36'
            }
        }, (res: any) => {
            let data: string[] = [];

            res.on('data', (chunk: string) => data.push(chunk));
            res.on('end', () => {
                resolve(Buffer.concat(data as never).toString());
            });
        }).on('error', (error) => {
            reject(`Ошибка 512535123\n${error}`);
        });
    });
};

export default function cmService(key: string, value: any) {
    return new Promise((resolve, reject) => {
        if (key === 'getResourceData') {
            const rules: CmMp3Rule[] = filer.contents.cm?.mp3Rules?.data ?? [];
            const rule = rules.find(({ url }) => value.startsWith(url));
            if (rule)
                fetch(value).then((html) => resolve({ rule, html })).catch((error) => reject(`Ошибка 97377213\n${error}`));
            else reject('Ошибка. Этот ресурс неизвестен');
            return;
        }

        reject('Ошибка 6712535');
    });
}
