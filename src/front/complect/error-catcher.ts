export const logFrontErrors = () => {
  const container = document.getElementById('error-log-list');

  if (container == null) return;

  const errorList = document.createElement('div');
  let timeout: TimeOut;
  let isInserted = false;

  window.onerror = function myErrorHandler(errorMessage, url, lineNumber, _, error) {
    const div = document.createElement('div');

    div.innerText = `${error?.stack || ''}\n${errorMessage}\n\n${url}\n\n${lineNumber}`;

    div.style.color = 'red';
    div.style.marginBottom = '20px';

    errorList.appendChild(div);

    if (!isInserted) {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        const root = document.querySelector('#root');

        if (!root?.innerHTML) container.appendChild(errorList);
      }, 1000);
    }

    return false;
  };
};
