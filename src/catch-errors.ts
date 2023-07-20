
export const catchAllErrors = () => {
    const errors: ErrorEvent[] = [];
    let clicks = 0;
    let clickTimeout: TimeOut;

    window.addEventListener('error', (event) => errors.push(event));

    window.addEventListener('click', () => {
        clearTimeout(clickTimeout);
        if (clicks++ > 9) {
            clicks = 0;
            if (errors.length === 0) alert('Ошибок нет');
            errors.some((error) => {
                // eslint-disable-next-line no-restricted-globals
                return !confirm([
                    error.filename,
                    error.lineno,
                    error.message,
                    error.error.stack,
                ].join('\n\n'));
            });
            return;
        }
        clickTimeout = setTimeout(() => clicks = 0, 300);
    });
};
