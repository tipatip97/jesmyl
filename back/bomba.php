<?

$backendPath = './__tmp__backend__folder__';

if ($_GET['pass'] !== 'zerou') {
  echo '{"ok":false, "msg":"incorrect passphrase"}';
} else {
  $error = false;
  $files = [];
  $roots = 0755;
  $isFront = $_GET['isFront'];

  $path = $isFront ? './' : $backendPath;

  $uploaddir = trim($path);
  if (!is_dir($uploaddir)) mkdir($uploaddir, $roots);

  foreach ($_FILES as $file) {
    $filepath = $uploaddir . basename($file['name']);

    if (move_uploaded_file($file['tmp_name'], $filepath)) {
      chmod($filepath, $roots);
      $zip = new ZipArchive;
      $res = $zip->open($filepath);
      if ($res === true) {
        $zip->extractTo($path);
        $zip->close();

        unlink($filepath);
        if (!$isFront) {
          $updated = [];
          $created = [];

          updateEdited($path, $updated, $created);

          echo json_encode([
            'ok' => true,
            'count' => count($updated) + count($created),
            'created' => $created,
            'updated' => $updated,
          ], JSON_UNESCAPED_UNICODE);

          return;
        }
      }
      $files[] = $filepath;
    } else {
      $error = true;
      break;
    }
  }

  echo json_encode([
    'ok' => !$error,
    'count' => count($_FILES),
    'files_count' => sizeof($files),
    'files' => $files,
  ], JSON_UNESCAPED_UNICODE);
}

function updateEdited($path, &$updated, &$created, $prevFilepath = '')
{
  foreach (scandir($path) as $fname) {
    if ($fname === '.' || $fname === '..') continue;

    $filepath = $path . '/' . $fname;

    if ($fname[0] === '+') continue;

    $prevFpath = (!$prevFilepath ? './' : $prevFilepath . '/') . $fname;

    if (is_dir($filepath)) {

      if (!is_dir($prevFpath)) {
        mkdir($prevFpath);
        $created[] = $prevFpath . '/';
      }
      updateEdited($filepath, $updated, $created, $prevFpath);
    } elseif (is_file($filepath)) {
      $content = file_get_contents($filepath);

      if (!is_file($prevFpath) || md5($content) !== md5(file_get_contents($prevFpath))) {
        if (is_file($prevFpath)) $updated[] = $prevFpath;
        else $created[] = $prevFpath;

        rename($filepath, $prevFpath);
      }
    }
  }
}
