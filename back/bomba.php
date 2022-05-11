<?

$backendPath = './__tmp__backend__folder__';

$releasePaths = [
  './S/authorizator.php',
];

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

function updateEdited($path, &$updated, &$created, $prevFilepath = '', $topReleasePath = '')
{
  global $releasePaths;
  $isRelease = $_GET['isRelease'];

  foreach (scandir($path) as $fname) {
    if ($fname === '.' || $fname === '..') continue;

    $filepath = $path . '/' . $fname;

    if ($fname[0] === '+') continue;

    $prevFpath = (!$prevFilepath ? './' : $prevFilepath . '/') . $fname;
    $releasePath = (!$topReleasePath ? './release/' : $topReleasePath . '/') . $fname;
    $comparePath = $isRelease ? $releasePath : $prevFpath;

    if (is_dir($filepath)) {

      if (!is_dir($comparePath)) {
        mkdir($comparePath);
        $created[] = $comparePath . '/';
      }

      updateEdited($filepath, $updated, $created, $prevFpath, $releasePath);
    } elseif (is_file($filepath)) {
      $content = file_get_contents($filepath);

      if (!is_file($comparePath) || md5($content) !== md5(file_get_contents($comparePath))) {
        if ($isRelease && !in_array($prevFpath, $releasePaths)) continue;
        if (is_file($comparePath)) $updated[] = $comparePath;
        else $created[] = $comparePath;

        rename($filepath, $comparePath);
      }
    }
  }
}
