<?
require_once 'servant.php';
require_once 'apps-servant.php';
require_once 'authorizator.php';

function executeTracks() {
  $postExecs = jsonDecode($_POST['execs']);
  $appName = jsonDecode($_POST['appName']);
  $appName = $appName ? $appName : $_POST['appName'];
  $auth = jsonDecode($_POST['auth']);
  $isRootApp = $appName === 'index' || $appName === 'adm';
  $execs = [];
  $executes = [];
  $execs = $postExecs;
  
  if (!$auth) {
    return [
      'ok' => false,
      'errors' => ['Нет данных авторизации!']
    ];
  }
  $user = authorize(['login' => $auth['login'], 'at' => $auth['at']]);
  $level = $user['level'];
  
  if (!$user['ok']) {
    return [
      'ok' => false,
      'errors' => ['Ошибка авторизации'],
      'auth' => $auth,
      'user' => $user
    ];
  }
  
  if (!$appName) {
    return [
      'ok' => false,
      'errors' => ['there is not app name!']
    ];
  }
  
  $actions = tracker(["@prepareActions()::$appName:1"]);
  
  if (!$actions['ok']) return $actions;
  
  $executes = accesser($actions['target'], $user, $postExecs);
  
  if(0)
  return [
    'ok' => 1,
    'val' => $executes,
  ];
  $execs = $executes['resolved'];
  $executed;
  
  if ($execs && count($execs)) {
    $executed = executer($execs, $isRootApp ? '~S/%s.json' : "~apps/$appName/%s.json", 1, $appName);
    
    if (count(debugLine())) return [
      'ok' => false,
      'deb' => debugLine(),
      'execs' => $executed
    ];
    
    $execsPath = getPath("~apps/$appName/$appName-execs.json");
    if (!is_file($execsPath)) file_put_contents($execsPath, '[]');
    
    if (is_file($execsPath)) {
      $exs = [];
      $someUnmuted = false;
      
      forEach (['resolved', 'rejected'] as $status) {
        forEach ($executes[$status] as $exec) {
          if (!$exec['muted'] && !$exec['exec']['muted']) {
            $someUnmuted = true;
            break;
          }
        }
        if ($someUnmuted) break;
      }
      
      if ($someUnmuted) {
        $prevExs = jsonDecode(file_get_contents($execsPath));
        
        if ($prevExs) {
          $exs = $prevExs;
        }
        
        $mini = 0;
        $saveExecs = false;
        $pulls = ['action', 'args'];
        
        forEach (['resolved', 'rejected'] as $status) {
          forEach ($executes[$status] as $exec) {
            if ($exec['method'] !== 'func' && !$exec['muted'] && !$exec['exec']['muted']) {
              $ex = [];
              $ex['author'] = $user['fio'];
              $ex['status'] = $status;
              $ex['ts'] = time() + $mini;
              
              forEach ($pulls as $key)
                if (isset($exec[$key])) $ex[$key] = $exec[$key];
                
              $mini += 0.001;
              $exs[] = $ex;
              $saveExecs = true;
            }
          }
        }
        
        if ($saveExecs) {
          file_put_contents($execsPath, jsonEncode($exs));
        }
      }
    }
  }
  
  global $bags;
  $ret = [
    'ok' => $executed['ok'],
    'executed' => $executed,
    //'execs' => $execs,
    'resolved' => $executes['resolved'],
    'rejected' => $executes['rejected'],
    'results' => $executed['results'],
    'errors' => $executed['errors'],
    '::deb' => debugLine(),
    //'accessesPath' => $accessesPath,
    //'exs' => $exs,
    // 'month' => getGlob('timePrevMonth'),
    'bags' => $bags,
  ];
  
  if (!$ret['ok'] && $executes['rejected'][0]) {
    $ret['errors'] = $executes['rejected'][0]['errors'];
    $ret['action'] = $executes['rejected'][0]['exec']['action'];
  }
  
  return $ret;
}

echo jsonEncode(executeTracks());

























