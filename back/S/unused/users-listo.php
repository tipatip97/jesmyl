<?

require_once 'authorizator.php';

function getUsersList($get, $post) {
  global $authDir, $userOrganizeOrder;
  
  $auth = json_decode($post['auth'], true);
  $requester = authorize($auth);
  $users = $post['users'] ? explode(',', $ppst['users']) : [];
  
  
  /*if ($requester['level'] < 100)
    return [
      ok => false,
      errorMessage => 'have no permission',
      auth => $auth,
      post => $requester
    ];*/
  
  $users = [];
  
  foreach(scandir($authDir) as $dirName) {
    if ($dirName !== '.' && $dirName !== '..') {
      if ($requester['level'] < 100 && array_search($dirName, $users) === false) continue;
      $_passw = get_passw($dirName);
      $passw = file_get_contents("$authDir/$dirName/$_passw");
      
      if ($passw !== false) {
        $content = file_get_contents("$authDir/$dirName/$passw");
        $user = organizeUp($content, $userOrganizeOrder);
        $lastSeen = filemtime("$authDir/$dirName/$_passw");
        
        $users[] = [
          fio => implode(' ', $user['fio']),
          login => $dirName,
          passw => $passw,
          level => intval($user['level']['general']),
          lastSeen => $lastSeen * 1000,
          online => $lastSeen + 60 > time(),
          time => time(),
        ];
      }
    }
  }
  
  return [
    ok => true,
    users => $users,
  ];
  
}




echo json_encode(getUsersList($_GET, $_POST));
























