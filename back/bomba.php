<?

  if ($_GET['pass'] !== 'zerou') {
    echo '{"ok":false, "msg":"incorrect passphrase"}';
  } else {
    $error = false;
    $files = [];
    $roots = 0755;
    
    if (0)
    switch ($_GET['env']) {
      case 'dev':
        $path = './pwa-dev/';
        break;
      case 'qa':
        $path = './pwa-qa/';
        break;
      case 'prod':
        $path = './pwa-release/';
        break;
    }
    $path = './';
    
    $uploaddir = trim($path);
    if (!is_dir($uploaddir)) mkdir($uploaddir, $roots);
    
    forEach ($_FILES as $file) {
      $filepath = $uploaddir . basename($file['name']);
      
      if (move_uploaded_file($file['tmp_name'], $filepath)) {
        chmod($filepath, $roots);
        $zip = new ZipArchive;
        $res = $zip->open($filepath);
        if ($res === true) {
          $zip->extractTo($path);
          $zip->close();
          unlink($filepath);
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


