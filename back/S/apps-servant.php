<?




function checkPeopleAuths($appName)
{
  global $authPath;
  $logins = tracker([$authPath, '--named'])['target'];
  $props = getBagProps($appName);
  $count = 0;

  foreach ($logins as $login) {
    $count += count(tracker(["$authPath/$login", '--named'])['target']);
  }

  //debugLine(['people count', $props, $count, $logins]);

  return $props['regPeopleCount'] !== $count;
}

function getPeopleAuths($appName)
{
  global $authDir, $authPath, $userOrganizeOrder;
  $logins = tracker([$authPath, '--named'])['target'];

  $count = 0;

  foreach ($logins as $login) {
    $count += count(tracker(["$authPath/$login", '--named'])['target']);
  }

  setBagProp($appName, 'regPeopleCount', $count);
  $people = [];

  foreach ($logins as $login) {
    $human = [];
    $_passw = get_passw($login);
    $loginPath = $authDir . '/' . $login;
    $passw_path = $loginPath . '/' . $_passw;
    $passw = getContent($passw_path);
    $user = organizeUp(file_get_contents($loginPath . '/' . $passw), $userOrganizeOrder);
    $mtime = getAttribute(['.mtime' => $passw_path], '.mtime');

    $human['login'] = $login;
    $human['passw'] = $passw;
    $human['_passw'] = $_passw;
    $human['fio'] = implode(' ', $user['fio']);
    $human['level'] = floatval($user['level']['general']);

    if ($human['level'] < 100)
      $people[] = $human;
  }

  return $people;
}

function checkPeopleVisits($appName)
{
  //if (getGlob('isFirstRequest')) return true;

  global $authPath;
  $time = time();
  $logins = tracker([$authPath, '--named'])['target'];

  foreach ($logins as $login) {
    $path = $authPath . '/' . $login . '/' . get_passw($login);
    $mtime = getAttribute(['.mtime' => $path], '.mtime');

    if ($time - $mtime < 55) {
      setBagProp($appName, 'lm', $mtime);
      return true;
    }
  }
  return false;
}

function getPeopleVisits()
{
  global $authPath;
  $time = time();
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


function getComsExecutions()
{
  $props = getBagProps('cm');
  $coms = explode(',', $props['observedComs']);
}


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
  $path = ($appName === 'index' || $appName === 'adm' ? getPath('~S/actions') : "../apps/$appName/$appName-actions") . '.json';

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


function inlineActions($actions, $args = [], $line = [])
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

    foreach (['action', 'level', 'title'] as $fieldn)
      if (!is_null($action[$fieldn]))
        $inlineAction[$fieldn] = $action[$fieldn];

    if (!is_null($action['args'])) $inlineArgs = array_merge($args, $action['args']);

    if (count($inlineAction)) {
      if (count($inlineArgs)) $inlineAction['args'] = $inlineArgs;
      $line[] = $inlineAction;
    }

    if (is_array($action['next'])) {
      $line = inlineActions($action['next'], $inlineArgs, $line);
    }
  }
  return $line;
}
