export const logFrontErrors = () => {
  const container = document.getElementById('error-log-list');

  if (container == null) return;

  window.onerror = function myErrorHandler(errorMessage, url, lineNumber, _, error) {
    const div = document.createElement('div');

    div.innerText = `${error?.stack || ''}\n${errorMessage}\n\n${url}\n\n${lineNumber}`;

    div.style.color = 'red';
    div.style.marginBottom = '20px';

    container.appendChild(div);

    return false;
  };
};
