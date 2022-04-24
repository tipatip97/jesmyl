<?
$filename = 'the-eval.php.txt';
$eval = $_POST['eval'];

function input($isSave = 0) {
  return 'const body = new FormData();
body.append(`eval`, the_code_Window.value);
fetch(`eval.php?&auth=${encodeURIComponent(localStorage.auth)}' . ($isSave ? '&save' : '') . '`, {
  method: `POST`,
  body
})
  .then(resp => resp.text())
  ' . ($isSave ? '' : '.then(txt => {
    const isHtml = /^HTML:/.test(txt);
    const text = isHtml ? txt.replace(/^html:/i, ``) : txt;
    let inner = text;
    
    try {
      inner = JSON.stringify(JSON.parse(text), null, ` `);
    } catch (error) {    }
    
    if (isHtml) write(null, 1, text);
    else write(text);
    
  })') . '
  .catch(err => write(err, 0));';
}

if ($eval)
  if ($_GET['auth'] === 'zerou') {
    if (isset($_GET['save'])) file_put_contents($filename, $eval);
    else eval($eval);
  } else echo 'ok!';

else {
 include 'coder.php';
 coder(file_get_contents($filename), input(), input(1));

}
?>




