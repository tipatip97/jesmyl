<?
$filename = 'the-code.js.txt';
$code = file_get_contents($filename);
$code = $code ? $code : '';
 
if ($_POST['code']) {
  file_put_contents($filename, $_POST['code']);
}
 
include 'coder.php';
coder($code,
  'try {
      write(``);
      eval(the_code_Window.value);
    } catch (err) {
      write(err.stack, 0);
    }',
    
  'const body = new FormData();
  body.append(`code`, the_code_Window.value);
  fetch(`code.php`, {method: `POST`, body})
    .catch((err) => write(err, 0));'
);

?>








