import https from 'https';

export default function cmService(key: string, value: any) {
    return new Promise((resolve, reject) => {
        if (key === 'getResourceData') {
            https.get(value, {
                headers: {
                    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36'
                }
            }, (res: any) => {
                let data: string[] = [];

                res.on('data', (chunk: string) => data.push(chunk));
                res.on('end', () => {
                    resolve(Buffer.concat(data as never).toString());
                });
            }).on('error', (err: any) => {
                reject(err.message);
            });
            return;
        }

        reject();
    });
}
