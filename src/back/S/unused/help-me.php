<?
require_once 'servant.php';

function help($appn, $id) {
  $parent = null;
  $parents = [];
  $track = [getPath(($appn === 'index' ? '../S/' : "../apps/$appn/") . "helper.json"), $id];
  $tracked = tracker($track, $parents, $parent);
  
  if ($tracked['ok'])
    return [
      ok => true,
      val => $tracked['target']
    ];
  else
    return $tracked;
}


echo json_encode(help($_GET['app'], $_GET['id']), JSON_UNESCAPED_UNICODE);














?>







