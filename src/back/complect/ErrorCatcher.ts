import fs from 'fs';
import environment from '../environments/environment';

process.listeners('uncaughtException').forEach((func) => { process.off('uncaughtException', func) });

interface ProcessError {
    time: string;
    repeats?: number;
    message: string[];
}

export class ErrorCatcher {
    static logAllErrors() {
        process.on('uncaughtException', (err) => {
            console.error(err);
            const dir = `/var/www/${environment.host}/restart_outputs/`;

            const write = () => {
                fs.readdir(dir, { withFileTypes: true }, (error, files) => {
                    if (error || err.stack == null) return;
                    const maxes = { path: '', ts: 0 };
                    files.forEach((file) => {
                        const path = `${dir}${file.name}`;
                        const stat = fs.statSync(path);
                        const time = new Date(stat.mtime).getTime();
                        if (time > maxes.ts) {
                            maxes.ts = time;
                            maxes.path = path;
                        }
                    });

                    const date = new Date();
                    const currentTimeFormatted = `${date.getFullYear()
                        }-${`${date.getMonth() + 1}`.padStart(2, '0')
                        }-${`${date.getDate()}`.padStart(2, '0')
                        }_${`${date.getHours()}`.padStart(2, '0')
                        }:${`${date.getMinutes()}`.padStart(2, '0')
                        }:${`${date.getSeconds()}`.padStart(2, '0')
                        }.${`${date.getMilliseconds()}`.padStart(3, '0')
                        }`;

                    const errorText = err.stack;
                    const errorDict = {
                        time: currentTimeFormatted,
                        message: errorText.split('\n')
                    };

                    if (date.getTime() - maxes.ts < 1000 * 60 * 60 * 24) {
                        try {
                            const errors: ProcessError[] = JSON.parse('' + fs.readFileSync(maxes.path) || '[]');
                            const repeated = errors.some((error) => {
                                if (error.message.join('\n') === errorText) {
                                    error.repeats = (error.repeats || 1) + 1;
                                    error.time = currentTimeFormatted;
                                    return true;
                                }
                                return false;
                            });

                            if (!repeated) errors.push(errorDict);

                            fs.writeFile(maxes.path, JSON.stringify(errors, null, ' '), () => { });
                        } catch (e) { }
                    } else {
                        fs.writeFile(`${dir}${currentTimeFormatted}.json`, JSON.stringify([errorDict], null, ' '), () => { });
                    }
                });
            };

            if (!fs.existsSync(dir)) fs.mkdir(dir, () => write());
            else write();
        });
    }
}
