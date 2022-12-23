<?php

$JSONSeparator = '===JSON:separation===';

if ($_GET['pass'] !== 'zerou') echoJSONData(['ok' => false]);
else {
  $backendTmpDir = './_backend_tmp_dir_';
  $frontendTargetDir = './';
  $currentFileName = $_SERVER['PHP_SELF'];

  $error = false;
  $files = [];
  $roots = 0755;
  $isFront = $_GET['isFront'];
  $steps = [];

  foreach ($_FILES as $file) {
    $zipPath = './' . basename($file['name']);
    $steps[] = $file['tmp_name'];
    $steps[] = $file['size'];

    if (move_uploaded_file($file['tmp_name'], $zipPath)) {
      $steps[] = 'file uploaded';
      chmod($zipPath, $roots);
      $zip = new ZipArchive;
      $res = $zip->open($zipPath);

      if ($res === true) {
        $steps[] = 'zip opened';
        if ($isFront) {
          $zip->extractTo('./');
          $steps[] = 'front files extracted';

          echoJSONData(['ok' => true, 'steps' => $steps]);
        } else {
          $steps[] = 'back files extracted';
          if (!is_dir($backendTmpDir)) mkdir($backendTmpDir, $roots);
          $zip->extractTo($backendTmpDir);

          $updated = [];
          $created = [];

          updateEdited($updated, $created, $backendTmpDir);
          deleteForced($backendTmpDir);

          echoJSONData([
            'ok' => true,
            'count' => count($updated) + count($created),
            'created' => $created,
            'updated' => $updated,
          ]);
        }

        $files[] = $zipPath;
        unlink($zipPath);
        $zip->close();
        $steps[] = 'zip closed';

        return;
      } else $error = true;
    } else $error = true;
  }

  $steps[] = 'response printed';

  echoJSONData([
    'ok' => !$error,
    'count' => count($_FILES),
    'files_count' => sizeof($files),
    'files' => $files,
    'steps' => $steps,
  ]);
}

function updateEdited(&$updated, &$created, $tmpPath, $workPath = '.')
{
  foreach (scandir($tmpPath) as $tmpName) {
    if ($tmpName === '.' || $tmpName === '..' || $tmpName[0] === '+') continue;

    $tmpFilepath = $tmpPath . '/' . $tmpName;
    $workFilepath = $workPath . '/' . $tmpName;

    if (is_dir($tmpFilepath)) {
      if (!is_dir($workFilepath)) {
        mkdir($workFilepath);
        $created[] = $workFilepath . '/';
      }

      updateEdited($updated, $created, $tmpFilepath, $workFilepath);
    } elseif (is_file($tmpFilepath)) {
      if (!is_file($workFilepath) || md5(file_get_contents($tmpFilepath)) !== md5(file_get_contents($workFilepath))) {
        if (is_file($workFilepath)) $updated[] = $workFilepath;
        else $created[] = $workFilepath;

        rename($tmpFilepath, $workFilepath);
      }
    }
  }
}


function deleteForced($dir)
{
  if (!file_exists($dir)) return true;
  if (!is_dir($dir)) return unlink($dir);

  foreach (scandir($dir) as $item) {
    if ($item == '.' || $item == '..') continue;

    if (!deleteForced($dir . DIRECTORY_SEPARATOR . $item)) {
      return false;
    }
  }

  return rmdir($dir);
}

function echoJSONData($data)
{
  global $JSONSeparator;

  echo $JSONSeparator;
  echo json_encode($data, JSON_UNESCAPED_UNICODE);
}
