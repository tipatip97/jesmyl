<?
require_once 'servant.php';

//$authDir = '~S/bonjour';
$authPath = '~S/auths';
$authDir = getPath($authPath);

function get_passw($login) {
  return md5('passw:' . $login);
}

function get_messanger($login) {
  return md5('messanger:' . $login);
}

if (!is_dir($authDir)) mkdir($authDir);

function authorize($auth) {
  global $authDir, $userOrganizeOrder, $tsOrganizeOrder;
  
  if (!$auth) $auth = [];
  
  $fio = $auth['fio'];
  $login = $auth['login'];
  $passw = $auth['passw'];
  $rpassw = $auth['rpassw'];
  $at = $auth['at'];
  
  if (!$login) {
    setGlob('userLogin', null);
    setGlob('userLevel', 0);
    setGlob('userAt', null);
    setGlob('userFio', null);
    
    return [
      'ok' => false,
      'mode' => 'check',
      'level' => 0,
      'login' => null
    ];
  }
  
  $isRegister = isset($auth['fio']) && isset($auth['rpassw']);
  setGlob('userLogin', $login);
  
  if (!is_dir($authDir))
    mkdir($authDir);
  
  if ($isRegister && $rpassw !== $passw)
    return [
      'ok' => false,
      'mode' => 'register',
      'errors' => ['Пароли не совпадают.'],
      'errorId' => 'passw'
    ];
  
  $loginDir = $authDir . '/' . $login;
  $passwFile = $loginDir . '/' . $passw;
  $rpasswFile = $loginDir . '/' . $rpassw;
  $atFile = $loginDir . '/' . $at;
  $isLoginExists = is_dir($loginDir);
  
  if ($isRegister) {
    if ($isLoginExists) {
      return [
        'ok' => false,
        'mode' => 'register',
        'errors' => ['Этот логин занят('], // )
        'errorId' => 'login'
      ];
    } else {
      mkdir($loginDir);
      $initialLevel = 3;
      $blank = organizeUp('', $userOrganizeOrder);
      $blank['fio'] = explode(' ', $fio);
      $blank['level']['general'] = $initialLevel;
      
      $_passw = get_passw($login);
      $signinAt = getAt($authDir, $login, $passw);
      
      file_put_contents("$loginDir/$_passw", $passw);
      file_put_contents($passwFile, organizeDown($blank, $userOrganizeOrder));
      registerAT("$loginDir/$signinAt", ['level' => $initialLevel, 'fio' => '']);
      
      setGlob('userLevel', $initialLevel);
      setGlob('userFio', $fio);
      setGlob('userAt', $at);
      
      return [
        'ok' => true,
        'mode' => 'register',
        'at' => $signinAt,
        'fio' => $fio,
        'level' => $initialLevel,
        'login' => $login
      ];
      
    }
  } else {
    if ($passw && is_file($passwFile)) {
      $auth = organizeUp(file_get_contents($passwFile), $userOrganizeOrder);
      $loginAt = getAt($authDir, $login, $passw);
      $level = $auth['level']['general'];
      $fio = implode(' ', $auth['fio']);
      registerAT("$loginDir/$loginAt", ['level' => $level, 'fio' => $fio]);
      
      $_passw = get_passw($login);
      file_put_contents("$loginDir/$_passw", $passw);
      
      setGlob('userLevel', $level);
      setGlob('userFio', $fio);
      setGlob('userAt', $loginAt);
      
      return [
        'ok' => true,
        'mode' => 'login',
        'at' => $loginAt,
        'level' => $level,
        'fio' => $fio,
        'login' => $login
      ];
      
    } else if ($rpassw && is_file($rpasswFile)) {
      $auth = organizeUp(file_get_contents($rpasswFile), $userOrganizeOrder);
      $level = $auth['level']['general'];
      $fio = implode(' ', $auth['fio']);
      
      setGlob('userLevel', $level);
      setGlob('userFio', $fio);
      setGlob('userAt', $loginAt);
      
      return [
        'ok' => true,
        'mode' => 'check_passw',
        'level' => $level,
        'fio' => $fio,
      ];
      
    } else if ($at && is_file($atFile)) {
      $atFileContent = file_get_contents($atFile);
      $checks = organizeUp($atFileContent, $tsOrganizeOrder);
      $level = $checks['level'][0];
      
      if ($level < 100 && $level > 3) {
        file_put_contents($atFile, $atFileContent);
        $passwPath = $loginDir . '/' . get_passw($login);
        file_put_contents($passwPath, file_get_contents($passwPath));
        //debugLine([$level, $level < 100]);
      }
      
      setGlob('userLevel', $level);
      setGlob('userAt', $at);
      
      return [
        'ok' => true,
        'mode' => 'check',
        'loginedAt' => $checks['ts'][0] * 1000,
        'level' => $level,
        'fio' => implode(' ', $checks['fio'])
      ];
    } else {
      return [
        'ok' => false,
        'mode' => 'check',
        'errors' => ['Неверные данные авторизации!'],
        'errorId' => 'general'
      ];
    }
  }
}

function registerAT($filepath, $user) {
  global $tsOrganizeOrder;
  $atCheck = [
    'ts' => [time()],
    'level' => [$user['level']],
    'fio' => explode(' ', $user['fio'])
  ];
  
  file_put_contents($filepath, organizeDown($atCheck, $tsOrganizeOrder));
}

function getAt($authDir, $login, $passw) {
  $newAt = null;
  $_passw = get_passw($login);
  
  while (!$newAt || $newAt === $_passw || $newAt === $passw || is_file("$authDir/$login/$newAt"))
    $newAt = md5(rand());
  
  return $newAt;
}

$userOrganizeOrder = ['fio', ['level', 'general']];
$tsOrganizeOrder = ['ts', 'level', 'fio'];

function organizeUp($content, $orders = []) {
  $lines = explode("\n", $content);
  $dict = [];
  
  foreach ($orders as $orderi => $order) {
    $line = $lines[$orderi];
    $items = explode(' ', $line);
    if (is_array($order)) {
      $orderName = $order[0];
      $dict[$orderName] = [];
      foreach ($order as $pti => $ptName) {
        $currPt = $items[$pti - 1];
        if ($pti == 0 || !$currPt) continue;
        if ($ptName == null)
          $dict[$orderName][] = $currPt;
        else
          $dict[$orderName][$ptName] = $currPt;
      }
    } else {
      $dict[$order] = [];
      foreach ($items as $it)
        if ($it)
          $dict[$order][] = $it;
    }
  }
  
  return $dict;
}

function organizeDown($dict, $orders) {
  $str = '';
  $isFirst = 1;
  
  foreach ($orders as $order) {
    if (!$isFirst)
      $str .= "\n";
    $isFirst = 0;
    $field = is_array($order) ? $order[0] : $order;
    $str .= implode(' ', $dict[$field]);
  }
  
  return $str;
}


function updateUserLevel($login, $at, $newLevel = 0, $password) {
  global $authDir, $userOrganizeOrder, $tsOrganizeOrder;
  
  if (!$login) return ['ok' => false, 'errors' => ['no login.']];
  if (!$at) return ['ok' => false, 'errors' => ['no at.']];
  if ($password !== 'zerou') return ['ok' => true, 'new_level' => $newLevel];
  
  $_passw = get_passw($login);
  $_passwPath = "$authDir/$login/$_passw";
  
  if (!is_file($_passwPath))
    return [
      'ok' => false,
      'errors' => ['there is no _passw']
    ];
  else {
    $passw = file_get_contents($_passwPath);
    $passwPath = "$authDir/$login/$passw";
    if (!is_file($passwPath))
      return [
        'ok' => false,
        'errors' => ['incorrect passwPath'],
      ];
    else {
      $tsPath = "$authDir/$login/$at";
      if (!is_file($tsPath))
        return [
          'ok' => false,
          'errors' => ['incorrect at..']
        ];
      
      $authContent = file_get_contents($passwPath);
      $tsContent = file_get_contents($tsPath);
      $auth = organizeUp($authContent, $userOrganizeOrder);
      $ts = organizeUp($tsContent, $tsOrganizeOrder);
      $ts['level'] = array_merge([$newLevel], $ts['level']);
      $prevLevel = $auth['level']['general'];
      $auth['level']['general'] = $newLevel;
      $authOrganizes = organizeDown($auth, $userOrganizeOrder);
      $tsOrganizes = organizeDown($ts, $tsOrganizeOrder);
      
      if (file_put_contents($passwPath, $authOrganizes)) {
        $isPut = file_put_contents($tsPath, $tsOrganizes);
        
        $ret = [
          'ok' => $isPut ? true : false,
          'prevLevel' => $prevLevel,
          'newLevel' => $newLevel,
          'login' => $login,
          'fio' => implode(' ', $auth['fio']),
        ];
        if (!$isPut) $ret['errors'] = ['ts file is doesn`t updated!'];
        return $ret;
      } else
        return [
          'ok' => false,
          'errors' => ['can`t write in file'],
        ];
    }
  }
}





















?>