<?

require_once 'authorizator.php';



function checkUserAuths($appName)
{
  global $authPath;
  $logins = tracker([$authPath, '--named'])['target'];
  $props = getBagProps($appName);
  $count = 0;

  foreach ($logins as $login) {
    $count += count(tracker(["$authPath/$login", '--named'])['target']);
  }

  return $props['appProps']['userVisitTokensCount'] !== $count;
}

function getUserAuths($appName)
{
  global $authDir, $authPath, $userOrganizeOrder;
  $logins = tracker([$authPath, '--named'])['target'];

  $count = 0;

  foreach ($logins as $login) {
    $count += count(tracker(["$authPath/$login", '--named'])['target']);
  }

  setBagProp($appName, 'userVisitTokensCount', $count);
  $users = [];

  foreach ($logins as $login) {
    $user = [];
    $_passw = get_passw($login);
    $loginPath = $authDir . '/' . $login;
    $passw_path = $loginPath . '/' . $_passw;
    $passw = getContent($passw_path);
    $user = organizeUp(file_get_contents($loginPath . '/' . $passw), $userOrganizeOrder);

    $user['login'] = $login;
    $user['passw'] = $passw;
    $user['_passw'] = $_passw;
    $user['fio'] = implode(' ', $user['fio']);
    $user['level'] = floatval($user['level']['general']);

    if ($user['level'] < 100) $users[] = $user;
  }

  return $users;
}

$logins = tracker([$authPath, '--named'])['target'];

function checkUserVisits($appName)
{
  if (!getBagProps('admin')['appProps']['userVisitTokensCount']) return true;

  global $authPath, $logins;
  $time = time();

  foreach ($logins as $login) {
    $path = $authPath . '/' . $login . '/' . get_passw($login);
    $mtime = getAttribute(['.mtime' => $path], '.mtime');

    if (($time - $mtime) < 55) {
      setBagProp($appName, 'lm', $mtime);
      return true;
    }
  }

  return false;
}

function getUserVisits()
{
  global $authPath;
  // $time = time();
  $logins = tracker([$authPath, '--named'])['target'];
  $visits = [];

  foreach ($logins as $login) {
    $path = $authPath . '/' . $login . '/' . get_passw($login);
    $mtime = getAttribute(['.mtime' => $path], '.mtime');

    //if ($time - $mtime < 55)
    $visits[$login] = $mtime * 1000;
  }
  return $visits;
}


/////// cm

function observeStreamChanges($isCheck, $appName)
{
  $props = getBagProps($appName);
  $streamName = $props['joinedStream'];
  $path = getPath("~apps/$appName/streams/$streamName.json");

  if ($isCheck) {
    $mtime = getmtime($path);
    setBagProp($appName, 'lm', $mtime);

    //debugLine([$isCheck, $appName, $props, $path, $mtime, $props['_liveTm'] < $mtime, $props['_lastTm'] < $mtime]);

    return $props['_liveTm'] < $mtime;
  } else {
    $stream = tracker([$path])['target'];

    return $stream;
  }
}


function prepareActions($isCheck, $appName, $asIs = '')
{
  $props = getBagProps($appName);
  $path = ($appName === 'index' ? getPath('~S/actions') : "../apps/$appName/actions") . '.json';

  if ($isCheck) {
    $mtime = getmtime($path);
    setBagProp($appName, 'lm', $mtime);
    return $props['_liveTm'] < $mtime;
  } else {
    $actions = tracker([$path])['target'];
    return ($asIs)
      ? $actions
      : inlineActions($actions);
  }
}


function inlineActions($actions, $args = [], $line = [], $topCloneArgs = [])
{
  foreach ($actions as $action) {
    if (is_array($action['rule'])) {
      $errors = [];
      $rule = replaceArgs($action['rule'], $action['args'], $errors);

      $line[] = [
        'role' => 'rule',
        'name' => $rule['name'],
        'value' => $rule['value'],
        'errors' => $errors
      ];
    }
    $inlineAction = [];
    $inlineArgs = $args;

    if (isDict($action['cloneArgs']))
      $topCloneArgs = array_merge($topCloneArgs, $action['cloneArgs']);

    foreach (['action', 'level', 'title', 'valueAs'] as $fieldn)
      if (!is_null($action[$fieldn]))
        $inlineAction[$fieldn] = $action[$fieldn];

    if ($topCloneArgs && $action['action']) $inlineAction['cloneArgs'] = $topCloneArgs;

    if (is_array($action['args'])) $inlineArgs = array_merge($args, $action['args']);

    if (count($inlineAction)) {
      if (count($inlineArgs)) $inlineAction['args'] = $inlineArgs;
      $line[] = $inlineAction;
    }

    if (is_array($action['next'])) {
      $line = inlineActions($action['next'], $inlineArgs, $line, $topCloneArgs);
    }
  }

  return $line;
}


////// admn

function setUserLevel()
{
  $props = getBagProps('admin')['execArgs'];

  return updateUserLevel($props['login'], $props['at'], $props['level'], $props['passphrase']);
}
