<?

require_once 'apps-servant.php';
require_once 'servant.php';
require_once 'authorizator.php';

$initTime = time();
function isTimeout($time) {
  global $initTime;
  return time() > ($initTime + ($time / 1000));
}

function observeRequirements ($topProps, $waits = 0) {
  global $globs, $bags;
  
  $lockForDebug = 0;
  $names = [
    'appName',
    'isCheck:#Bool',
    'isMob:#Bool',
    'prevs:#List',
    'regApps:#List',
    'indexLm:#Number',
    'appLm:#Number',
    'windowName',
    'indexLiveTm:#Number',
    'appLiveTm:#Number',
    'appParams:#List',
    'isLiveMode:#Bool',
    'isFirstRequest:#Bool',
    'isPwa:#Bool',
  ];
  
  $params = associateParams(jsonDecode($topProps['json']), $names);
  
  if (!is_array($params) || !count($params))
    $params = decodeParams($topProps['params'], $names);
  
  $appName = $params['appName'];
  $isCheck = $params['isCheck'];
  $isMob = $params['isMob'];
  $prevs = $params['prevs'];
  $regApps = $params['regApps'];
  $windowName = $params['windowName'];
  $indexLm = $params['indexLm'];
  $appLm = $params['appLm'];
  $indexLiveTm = $params['indexLiveTm'];
  $appLiveTm = $params['appLiveTm'];
  $appParams = $params['appParams'];
  $isLiveMode = $params['isLiveMode'];
  $isFirstRequest = $params['isFirstRequest'];
  $isPwa = $params['isPwa'];
  
  setGlob('isPwa', $isPwa);
  
  $preText = $topProps['preText'];
  
  $frequency = 0;
  
  $tools = tracker(['~S/tools.json'])['target'];
  $lock = $tools['lock'];
  $timeLimit = $tools['timeLimit'];
  
  if ($lock && !isTimeout($timeLimit)) {
    usleep($tools['lockSleep'] * 1000);
    
    return observeRequirements($topProps, $waits + 1);
  } else {
    if ($isCheck) $frequency = $tools['frequency'];
    else if (!$isPwa) echo $preText ? $preText : "window.$windowName = ";
  }
  
  if ($lock) return [
    'ok' => true,
    'locked' => true,
    '$waits' => $waits,
  ];
  
  $auth = $topProps['auth'];
  $user = authorize($auth ? jsonDecode($auth) : []);
  
  setGlob('isMobile', $isMob);
  setGlob('isCheckMode', $isCheck);
  setGlob('isFirstRequest', $isFirstRequest);
  
  $reqs = tracker(['requirements.json'])['target'];
  $apps = tracker(['apps.json'])['target'];
  
  return observeRequirementList($frequency, [
    'isCheck' => $isCheck,
    'indexLm' => $indexLm,
    'indexLiveTm' => $indexLiveTm,
    'appName' => $appName,
    'appLm' => $appLm,
    'appLiveTm' => $appLiveTm,
    'appParams' => $appParams,
    'isLiveMode' => $isLiveMode,
    'parents' => & $parents,
    'regApps' => $regApps,
    'tops' => $params,
    'prevs' => $prevs,
    'reqs' => $reqs,
    'apps' => $apps,
    'timeLimit' => $timeLimit,
    'isPwa' => $isPwa,
  ], [
    //'json' => $jsons,
    //'tools' => $tools,
    //'$waits' => $waits,
  ]);
}

function observeRequirementList($frequency, $params, $topRets) {
  global $globs, $bags;
  
  $isCheck = $params['isCheck'];
  $indexLm = $params['indexLm'];
  $indexLiveTm = $params['indexLiveTm'];
  $appName = $params['appName'];
  $appLm = $params['appLm'];
  $appLiveTm = $params['appLiveTm'];
  $appParams = $params['appParams'];
  $parents = & $params['parents'];
  $isLiveMode = $params['isLiveMode'];
  $regApps = $params['regApps'];
  $prevs = $params['prevs'];
  $apps = $params['apps'];
  $reqs = $params['reqs'];
  $timeLimit = $params['timeLimit'];
  $isPwa = $params['isPwa'];
  
  $val = [];
  $isLive = false;
  $isReady = false;
  $retAppName = null;
  $maxIndexLive = 0;
  $maxAppLive = 0;
  $maxIndexLm = 0;
  $maxAppLm = 0;
  $allComponents = [];
  $parents = [];
  $observe = false;
  
  forEach ($reqs as $req) {
    if ($isPwa && $req['ext'] !== 'json') continue;
    
    if (isExpected($req, [['?comp', '*R']])) {
      $req['app'] = 'index';
      $allComponents[] = $req;
    }
      
    if (!isExpected($req, ['*R'])) continue;
    //if ($isCheck && ($req['live'] ? $isLive : $isReady)) continue;
    
    $mtime = getAttribute($req['--path'] ? $req['--path'] : $req['path'], '.maxmtime');
    
    
    if (($req['live']
        ? ($indexLiveTm ? ($mtime > $indexLiveTm) : true)
        : ($isLiveMode ? false : ($indexLm ? $mtime > $indexLm : true)))
        || isExpected($req, ['name', 'in', $prevs])) {
      
      if ($isCheck) {
        if ($req['live']) $isLive = true;
        else $isReady = true;
        
        if ($isLive && $isReady) break;
      } else {
        if ($req['live']) {
          if ($mtime > $maxIndexLive) $maxIndexLive = $mtime;
        } else {
          if ($mtime > $maxIndexLm) $maxIndexLm = $mtime;
        }
        $req['app'] = 'index';
        $val[] = $req;
      }
    }
  }
  $rrr = [];
  
  forEach ($apps as & $app) {
    $appReqs = $app['requirements'];
    
    if (!isList($appReqs)) continue;
    if (!isExpected($app, ['*R'])) continue;
    
    if (isExpected($app, ['name', 'in', $regApps])) {
      forEach ($appReqs as $req)
        if (isExpected($req, [['?comp', '*R']])) {
          $req['app'] = $app['name'];
          $allComponents[] = $req;
        }
    }
    
    if (!isExpected($app, ['name', '===', $appName])) continue;
    
    setBagPropsIfNo($appName, $app['params'], $appParams, [
      '_liveTm' => $appLiveTm,
      '_lastTm' => $appLm
    ]);
    
    forEach ($appReqs as & $req) {
      if ($isPwa && $req['ext'] !== 'json') continue;
      
      //$req['_is.live'] = $isLiveMode && !$req['live'];
      //if ($isLiveMode && !$req['live']) continue;
      //if ($isCheck && ($req['live'] ? $isLive : $isReady)) continue;
      
      if (isExpected($req, ['?F']) && $req['frequency']) {
        $frequency = $req['frequency'];
        $observe = true;
      }
      
      if (!isExpected($req, ['*R'])) continue;
      
      $pathmtime = getAttribute($req['path'], '.maxmtime');
      $lm = $pathmtime ? $pathmtime : getBagProp($appName, 'lm');
      $mtime = $lm ? $lm : getGlob('timeNextDay');
      
      $Base = (($req['live']
        ? ($appLiveTm ? $mtime > $appLiveTm : true)
        : ($isLiveMode ? false : ($appLm ? $mtime > $appLm : true)))
        || isExpected($req, ['name', 'in', $prevs]));
        
      if ($Base) {
        $retAppName = $appName;
        
        if ($req['live']) {
          if ($isCheck) $isLive = true;
          if ($lm > $maxAppLive) $maxAppLive = $mtime;
        } else {
          if ($isCheck) $isReady = true;
          if ($lm > $maxAppLm) $maxAppLm = $mtime;
        }
          
        if (!$isCheck) {
          $req['app'] = $appName;
          
          $val[] = $req;
        } else if ($isLive && ($isReady || $isLiveMode)) break;
      }
    }
    
    if ($isLive && ($isReady || $isLiveMode)) break;
  }
  
  if ($isCheck && !$isLive && !$isReady && !count($val) && !isTimeout($timeLimit)) {
    usleep($frequency * 1000);
    
    return observeRequirementList($frequency, $params, $topRets);
  }
  
  if ($isCheck) {
    $leadRets = [
      'isReady' => $isReady,
      'isLive' => $isLive,
      'isDebug' => isDebug() ? 1 : '',
      'observe' => $observe,
      'isLiveMode' => $isLiveMode,
      '::isPwa' => $isPwa,
    ];
  } else {
    $rets = ['name', 'ext', 'main', 'app', 'live'];
    $components = [];
    
    forEach ($allComponents as $req) {
      $compReq = [];
      
      forEach ($rets as $field)
        if (isset($req[$field]))
          $compReq[$field] = $req[$field];
        
      $components[] = $compReq;
    }
    
    $news = [];
    
    forEach ($val as $req) {
      $newVal = [];
      
      if (!isset($newVal['content'])) {
        $content = '';
        if (is_array($req['track'])) {
          $json = tracker($req['track'], $parents)['target'];
          //debugLine([$req, $req['track']]);
          $content = jsonEncode($json);
        } elseif (isset($req['path'])) {
          $path = $req['path'];
          $content = getContent(getPath($path));
        }
        $newVal['content'] = $content ? $content : null;
      }
      
      foreach ($rets as $fieldName) {
        if (isset($req[$fieldName])) $newVal[$fieldName] = $req[$fieldName];
      }
      $news[] = $newVal;
    }
    
    $leadRets = [
      'val' => $news,
      'indexLive' => $maxIndexLive ? $maxIndexLive : null,
      'indexLm' => $maxIndexLm ? $maxIndexLm : null,
      'appLive' => $maxAppLive ? $maxAppLive : null,
      'appLm' => $maxAppLm ? $maxAppLm : null,
      'appName' => $retAppName,
      'props' => $retAppName ? getBagProps($retAppName) : null,
      'components' => $components,
    ];
  }
  
  $rets = [
    'ok' => true,
  ];
  
  forEach ($leadRets as $retKey => $retVal)
    $rets[$retKey] = $retVal;
  
  if (isDebug()) {
    $debRets = [
      'regApps' => $regApps,
      'deb' => debugLine(),
      'isPwa' => $isPwa,
      'glob.isPwa' => getGlob('isPwa'),
      //'isCheck' => $isCheck,
      //'val' => $val,
      //'all' => $reqs,
      //'apps' => $apps,
      'globs' => $globs,
      //'bag' => getBagProps($appName),
      //'appParams' => $appParams,
      //'frequency' => $frequency,
      'params' => $params,
      //'all_comps' => $allComponents,
      
      //'rrr' => $rrr,
      //'bags' => $bags,
    ];
    
    forEach ($debRets as $retKey => $retVal)
      $rets[debugPrefix() . $retKey] = $retVal;
    
    forEach ($topRets as $retKey => $retVal)
      $rets['+' . $retKey] = $retVal;
  }
  
  return $rets;
}

echo jsonEncode(observeRequirements($_GET));












