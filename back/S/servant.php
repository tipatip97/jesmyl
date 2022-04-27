<?

require_once 'authorizator.php';

$globs = [];
$debugLine = [];

$isDebug = strpos(__FILE__, '/release') === false;

function getPath ($path) {
  if (!$path) return $path;
  if ($path[0] === '~') return $_SERVER['DOCUMENT_ROOT'] . '/' . substr($path, 1);
  else return $path;
}

function debugPrefix() {
  return '::';
}

function startsWith($haystack, $needle) {
  return substr($haystack, 0, strlen($needle)) === $needle;
}

function endsWith($haystack, $needle) {
  $len = strlen($needle);
  if (!$len) return false;
  return substr($haystack, -$len) === $needle;
}

function isDebug() {
  global $isDebug;
  return $isDebug;
}

function setGlob($name, $value) {
  global $globs;
  //debugLine(['setGlob', isset($globs[$name]), $name, $value]);
  
  $isNew = !isset($globs[$name]);
  $globs[$name] = $value;
  return $isNew;
}

function getGlob($globName) {
  global $globs;
  
  if ($globName[0] === '@') $globName = substr($globName, 1);
  
  $track = explode(':', $globName, 2);
  $traces = explode('.', $track[0]);
  $name = $traces[0];
  
  if (isset($globs[$name])) {
    
    if (count($traces) < 2) {
      $glob = $globs[$name];
      $result = $glob;
      
      if (is_callable($glob)) {
        
        if ($track[1]) {
          $args = explode(':', $track[1]);
          $result = call_user_func_array($glob, $args);
        } else $result = $glob();
        
        //debugLine([$glob, is_callable($glob), $result, $track]);
      }
      
      return $result;
    } else {
      $parents = [];
      $parent = tracker($traces, $parents, $globs)['target'];
      
      if (count($track) > 1) {
        $track[1] = jsonDecode($track[1]);
        return tracker($track, $parents, $parent)['target'];
      } else return $parent;
    }
  } else return func_get_args()[1];
}

function getIfGlob($field) {
  $asDef = func_get_args()[1];
  $def = isset($asDef) ? $asDef : $field;
  
  if (!is_string($field) || $field[0] !== '@') {
    return $def;
  } else {
    //debugLine([$field, explode(':', substr($field, 1))]);
    return getGlob(substr($field, 1), $def);
  }
}

function takeGlobs($target, $parent, $deep = 0) {
  if (is_array($target)) {
    foreach ($target as $key => $value) {
      if ($key === '@:') {
        if (is_array($value)) {
          foreach ($value as $valKey => $valItem) {
            $globs[$valKey] = getAttribute($parent, $valItem);
          }
        } else {
          $globs[$key] = getAttribute($parent, $value);
        }
      } else if (($deep > 0 || $deep === -1) && is_array($value)) {
        foreach ($value as $valItem)
          takeGlobs($valItem, $parent, $deep - 1);
      }
    }
  }
  
  return $target;
}

function dirTrackerItem () {
  return '_system_directory_tracker_unique_name';
}

$bags = [];

function setBagProp($bagName, $propName, $propVal) {
  global $bags;
  if (is_null($bags[$bagName])) $bags[$bagName] = [];
  $bags[$bagName][$propName] = $propVal;
}

function getBagProps($bagName) {
  global $bags;
  
  if (!is_array($bags[$bagName])) return null;
  return $bags[$bagName];
}

function getBagProp($bagName, $propName) {
  
  if (is_null($propName)) {
    $expls = explode(':', $bagName);
    $propName = $expls[0];
    $bagName = $expls[1];
  }
  $bag = getBagProps($bagName);
  return $bag[$propName];
}

function setBagProps($bagName, $names, $values, $add) {
  if (is_array($names)) {
    forEach ($names as $i => $propName) {
      $attrs = explodeAttrs($propName);
      $propVal = parseType($values[$i], $attrs['type']);
      setBagProp($bagName, $attrs['name'], $propVal);
    }
  }
  
  if (is_array($add)) {
    forEach ($add as $key => $val) {
      setBagProp($bagName, $key, $val);
    }
  }
}

function setBagPropsIfNo($bagName, $names, $values, $add) {
  //if (is_null(getBagProps($bagName)))
    setBagProps($bagName, $names, $values, $add);
}

$now = time();

$minute = 60;
$hour = $minute * 60;
$day = $hour * 24;
$week = $day * 7;
$month = $day * 30;
$year = $day * 365;

setGlob('timeNow', $now);
setGlob('timeNowMs', $now * 1000);
setGlob('timePrevMinute', $now - $minute);
setGlob('timePrevHour', $now - $hour);
setGlob('timePrevDay', $now - $day);
setGlob('timePrevMonth', $now - $month);
setGlob('timePrevWeek', $now - $week);
setGlob('timePrevYear', $now - $year);

setGlob('timeNextDay', $now + $day);

setGlob('bossLevel', 100);
setGlob('sAdminLevel', 80);
setGlob('adminLevel', 50);
setGlob('sModeratorLevel', 40);
setGlob('moderatorLevel', 30);
setGlob('simpleLevel', 3);

setGlob('checkPeopleAuths()', 'checkPeopleAuths');
setGlob('checkPeopleVisits()', 'checkPeopleVisits');
setGlob('getPeopleAuths()', 'getPeopleAuths');
setGlob('getPeopleVisits()', 'getPeopleVisits');
setGlob('observeStreamChanges()', 'observeStreamChanges');
setGlob('prepareActions()', 'prepareActions');

function & tracker ($track, & $parents = null, & $topParent = null, $createByPath = 0) {
  try {
    if (!is_array($track)) {
      return [
        'ok' => true,
        'target' => $track
      ];
    }
    $parent = null;
    
    $mainTrace = $track[0];
    $isMainTraceList = is_array($mainTrace);
    $mTraceScalar = null;
    if ($isMainTraceList)
      $mTraceScalar = & $track[0][0];
    else
      $mTraceScalar = $track[0];
      
    
    if (!$topParent) {
      $isOldParent = false;
      
      if (is_string($mTraceScalar)) {
        if ($mTraceScalar[0] === '@') {
          
          $parent = getIfGlob($mTraceScalar);
          
          //debugLine([$parent]);
        } else {
          $parentPath = getPath($mTraceScalar);
          if ($parents) {
            $oldParent = & $parents[$parentPath];
            if (isset($oldParent)) {
              $parent = & $oldParent;
              $isOldParent = true;
            }
          }
          
          if (!$isOldParent) {
            if (is_dir($parentPath)) {
              $dirList = scandir($parentPath);
              $namedList = array_slice($dirList, 2);
              $files = [];
              $dirs = array_filter($namedList, function($item) {
                if (is_dir("$parentPath/$item")) return true;
                
                $files[] = $item;
                return false;
              });
              
              $trackerSpec = dirTrackerItem();
              
              $parent = [
                $trackerSpec => true,
                '--path' => $parentPath,
                '--whole' => $dirList,
                '--named' => $namedList,
                '--files' => $files,
                '--dirs' => $dirs
              ];
            } else if (file_exists($parentPath)) $parent = jsonDecode(getContent($parentPath));
            else if ($createByPath) {
              file_put_contents($parentPath, $isParentList ? '[]' : '{}');
              $parent = [];
              //debugLine(['($createByPath tracker)', $target, $ctrace]);
            } else return [
              'ok' => false,
              'errors' => ['file not exists'],
              'root' => $_SERVER['DOCUMENT_ROOT'],
              'value' => $parent,
              'filename' => $parentPath
            ];
            
            $parents[$parentPath] = & $parent;
          }
        }
      } else $parent = & $mTraceScalar;
    } else {
      if (is_string($mTraceScalar) && $mTraceScalar[0] === '$') {
        if (!is_null($topParent[substr($mTraceScalar, 1)]))
          $parent = & $topParent[substr($mTraceScalar, 1)];
        
        if (is_null($parent)) return [
          'ok' => false,
          'errors' => ['unexpected field ' . $mTraceScalar]
        ];
      } else
        $parent = & $topParent;
    }
    
    //debugLine(['tracker', $track, $topParent, $parent]);
    
    $targets = [& $parent];
    
    forEach ($track as $i => $ctrace) {
      $isLastTrackIndex = count($track) - 1 == $i;
      if ($i == 0) continue;
      
      if (!is_null($targets[count($targets) - 1]))
        $target = & $targets[count($targets) - 1];
      
      //if ($i > 2) debugLine(['ctrace', $i, $ctrace, $target]);
      
      if (isList($ctrace)) {
        $appended = False;
        
        forEach ($target as & $val) {
          
          if (isExpected($val, $ctrace)) {
            $targets[] = & $val;
            $appended = true;
            break;
          }
        }
        
        if (!$appended)
          $targets[] = NULL;
            
      } elseif (is_array($ctrace)) {
        
        $isSetNewTarget = False;
        $newTarget = [];
        
        forEach ($ctrace as $cthumbKey => $cthumb) {
          //debugLine(['dddict', $cthumbKey, $ctrace, $cthumb, isList($target), $target]);
          
          if (is_null($cthumb)) continue;
          
          if (isList($target)) {
              
            if ($cthumbKey === 'FILTER') {
              //$debugLine[] = 'filter';
              $newTarget = [];
              $isSetNewTarget = true;
              
              //$debugLine['filter'][] = [$target];
              
              forEach ($target as & $trace) {
                $isex = isExpected($trace, $cthumb);
                if ($isex)
                  $newTarget[] = & $trace;
              }
              
              //$debugLine[] = ['filter', $target, $newTarget, $cthumb];
              
            } elseif ($cthumbKey === 'FIND') {
            
              $found = false;
              forEach ($target as & $item) {
                if (isExpected($item, $cthumb)) {
                  $found = true;
                  $targets[] = & $item;
                  break;
                }
              }
              if (!$found) $targets[] = null;
            } elseif ($cthumbKey === 'PUSH') {
              $target[] = $ctrace['PUSH'];
              
            } elseif ($cthumbKey === 'CONCAT') {
            
              $concatIt = $ctrace['CONCAT'];
              if (isList($concatIt))
                foreach ($concatIt as & $trell)
                  $target[] = & $trell;
              else $target[] = $concatIt;
              
            } elseif ($cthumbKey === 'REMOVE') {
            
              $newList = [];
              $removeIt = $ctrace['REMOVE'];
              
              if (isList($removeIt)) {
                foreach ($target as $tKey => $tVal) {
                  if (isExpected($tVal, $removeIt))
                    array_splice($target, $tKey, 1);
                }
              } else if (is_numeric($removeIt)) {
                array_splice($target, $removeIt, 1);
              }
            } elseif ($cthumbKey === 'EACH') {
              //debugLine(['each', $cthumb, $target]);
              
              if (!is_array($cthumb)) return $expectedObjectError($cthumbKey, $target);
              $newTarget = [];
              
              forEach ($target as $traceKey => & $trace) {
                
                $tracked = & tracker([null, $cthumb], $parents, $trace);
                
                if ($tracked['ok']) {
                  $newTarget[$traceKey] = $tracked['target'];
                  $isSetNewTarget = true;
                }
                
                //debugLine(['foreach in each', $traceKey, $tracked, $cthumb, $trace]);
              }
              //debugLine(['newTARGET each', $newTarget]);
            }
          } else {
            if ($cthumbKey === 'PULL' || $cthumbKey === 'PULL_FORCE' || $cthumbKey === 'PULL_REAL') {
              //$debugLine[] = 'pullFR';
              $isPullForce = $cthumbKey === 'PULL_FORCE';
              $isPullReal = $cthumbKey === 'PULL_REAL';
            
              $pulltarget = null;
              if ($isSetNewTarget)
                $pulltarget = & $newTarget;
              else 
                $pulltarget = & $target;
                
              $isSetNewTarget = true;
              $newPulledTarget = [];
                  
              forEach (getIfWHEN($target, $cthumb) as $pulln) {
                $ptrace = $pulltarget[$pulln];
                //$debugLine[] = ['puuuuuuull', $ptrace, $newPulledTarget, $pulln, $isPullForce || (isset($ptrace) && (!$isPullReal || !is_null($ptrace)))];
                if ($isPullForce || (isset($ptrace) && (!$isPullReal || !is_null($ptrace))))
                  $newPulledTarget[$pulln] = $ptrace;
              }
              
              $newTarget = & $newPulledTarget;
              //$debugLine[] = [$cthumbKey, $newTarget, $target, $pulltarget, $cthumb];
            } elseif ($cthumbKey === 'SET_ATTRS') {
              //$debugLine[] = 'setAttrs';
              if (!is_array($cthumb)) return $expectedObjectError($cthumbKey, $target);
              
              setAttributes($target, $cthumb);
              //$debugLine[] = ['setAttrs', $target, $cthumb];
            } elseif ($cthumbKey === 'SET') {
              if (!is_array($cthumb)) return $expectedObjectError($cthumbKey, $target);
              //$debugLine[] = 'Set';
              forEach ($cthumb as $thumbKey => $thumbValue) {
                $target[$thumbKey] = $thumbValue;
                //$debugLine[] = ['foreach in set', $thumbKey, $thumbValue];
              }
            
            } elseif ($cthumbKey === 'RESET') {
              $isSetNewTarget = true;
              $newTarget = & $cthumb;
            } elseif ($cthumbKey === 'MAP') {
              
              forEach ($cthumb as $thrombKey => $thrombVal) {
                $tracked = tracker($thrombVal, $parents, $target);
                if ($tracked['ok'])
                  $target[$thrombKey] = $tracked['target'];
                //$debugLine[] = [$cthumbKey, $tracked, $target, $cthumb, $target[$thrombKey], $thrombKey, $thrombVal];
              }
            }
          }
        }
        
        if ($cthumbKey === '>:') {
          $names = tracker($cthumb['NAMES'], $parents, $target)['target'];
          setBagProps($cthumb['BAG_NAME'], $names, $cthumb['VALUES'], $cthumb['ADD']);
        } else if ($cthumbKey === 'ON') {
          $inspector = $cthumb[0];
          $func = $cthumb[1];
          $bag = $cthumb[2];
          
          if (isExpected($target, $inspector))
            invokeIfCallable($func, $target, $bag);
          
          //debugLine(['on', isExpected($target, $inspector), $inspector, $target, $bag]);
        }
        
        if ($isSetNewTarget) {
          $targets[] = $newTarget;
          //$debugLine[] = ['targets', $ctrace, $targets, $newTarget];
        }
      } else {
        $vvalue = & getAttribute_($target, $ctrace);
        if (isset($vvalue))
          $targets[] = & $vvalue;
        else $targets[] = null;
        //debugLine($targets);
      }
      
      
      if (is_null($targets[count($targets) - 1]) && !$isLastTrackIndex) {
        if ($createByPath) {
          $createdByPath = true;
          $newObj = [];
          $targets[count($targets) - 1] = $newObj;
          $target[$ctrace] = $targets[count($targets) - 1];
          //debugLine([$ctrace, $targets]);
          //debugLine(['($createByPath)', $target, $ctrace]);
        } else return [
          'ok' => false,
          'errors' => ['unexpected target'],
          'targetIndex' => count($targets) - 1,
          'targets' => $targets,
          'ctrace' => $ctrace,
          'track' => $track
        ];
      } else {
        //debugLine([1, $target, $ctrace]);
      }
    }
    
    return [
      'ok' => true,
      'parent' => & $parent,
      'target' => & $targets[count($targets) - 1],
      'penultimate' => & $targets[count($targets) - 2],
      'trace' => & $track[count($track) - 1],
      'createdByPath' => $createdByPath || false,
    ];
  } catch (Exception $e) {
    return [
      'ok' => false,
      'errors' => ['unknown error']
    ];
  }
}

$currentVariables = [];
function & checkCurrentVariables(& $value, & $target) {
  global $currentVariables;
  $var = $value['>:'];
  
  if (isDict($var)) $currentVariables = & $var;
  else $currentVariables = getAttribute($target, $var);
  
  //debugLine(['check Current Variables', $var, $value, $target, $currentVariables]);
  
  return $value;
}

function invokeIfCallable ($func, $target, $bag) {
  $attrs = explodeAttrs($func);
  $cb = $attrs['name'];
  //debugLine(['invokeIfCallable', is_callable($cb), $attrs]);
  
  if (is_callable($cb)) {
    $args = [];
    
    forEach ($attrs['attrs'] as $attr) {
      if (is_null($bag[$attr]))
        $args[] = getAttribute($target, $attr);
      else {
        if ($attr[0] === '&') {
          if (!is_null($bag[$attr])) $args[] = & $bag[$attr];
        } else $args[] = $bag[$attr];
      }
    }
    call_user_func_array($cb, $args);
    
    //debugLine(['invokeIfCallable_2', $args]);
  }
}

function expectedObjectError($method, $target, $value) {
  return [
    'ok' => false,
    'method' => $method,
    'errors' => ['unexpected target type'],
    'value' => $value ? $value : $target,
    'expected' => '#Object'
  ];
}

function & doIt ($exec, & $parents, & $parent) {
  $track = $exec['track'];
  $value = $exec['value'];
  $method = $exec['method'];
  $createByPath = $exec['exec']['createByPath'] || $exec['createByPath'];
  
  $penultimate = null;
  $target = null;
  
  if (count($track) === 1) {
    $penultimate = & $parent;
    $target = & $parent;
  } else {
    $tracked = & tracker($track, $parents, $parent, $createByPath);
    //debugLine(['do-It tracked', $tracked, $exec]);
    if ($createByPath && $method === 'set' && $tracked['createdByPath']) $tracked = & tracker($track, $parents, $parent);
    if (!$tracked['ok']) return $tracked;
    
    $penultimate = & $tracked['penultimate'];
    $lastTrace = $tracked['trace'];
    $target = & $tracked['target'];
  }
  
  //debugLine(['do-It', $tracked, $parents, $value]);
  
  switch ($method) {
    case 'set':
      $penultimate[$lastTrace] = & $value;
      //debugLine(['set in do-It', $tracked, $parents, $value]);
      break;
    case 'set_all':
      forEach ($value as $key => & $val) $target[$key] = & $val;
      //debugLine(['set_all', $value, $target]);
      break;
    case 'push':
      if (is_array($target)) $target[] = & $value;
      break;
    case 'remove': 
      if (is_array($target)) {
        if (isList($value)) {
          forEach ($target as $key => $val) {
            $isExp = isExpected($val, $value);
            
            if ($isExp) {
              array_splice($target, $key, 1);
              break;
            }
          }
        } else
          forEach ($target as $key => $val) {
            if ($key === $value) {
              unset($target[$key]);
              break;
            }
          }
            
      } else array_splice($target, $value, 1);
      break;
    case 'concat':
      $arr = is_array($value) ? $value : [$value];
      if (is_array($target))
        foreach ($arr as $val)
          $target[] = $val;
      break;
    case 'bumerang':
      if (is_array($target)) {
        forEach ($value as $bumerang) {
          $one = $target[$bumerang[0]];
          $two = $target[$bumerang[1]];
          
          $target[$bumerang[1]] = $one;
          $target[$bumerang[0]] = $two;
        }
      }
      break;
    case 'migrate':
      if (is_array($penultimate)) {
        forEach ($penultimate as & $item) {
          $val = $value[$item[$lastTrace]];
          
          if (!is_null($val))
            $item[$lastTrace] = $val;
        }
      }
      break;
  }
  
  return [
    'ok' => true,
    'val' => $parent
  ];
}





function executer ($execs, $pathTemplate, $saveInFiles = 1) {
  if (!$execs) {
    return [
      'ok' => false,
      'errors' => ['get no execs!']
    ];
  }
  
  $parents = [];
  $results = ['isDict' => true];
  $parent = null;
  $errors = [];
  
  forEach ($execs as $exec) {
    $track = $exec['track'];
    $value = $exec['value'];
    $method = $exec['method'];
    
    if ($method === 'func') {
      if (is_callable($track)) {
        $results[$track] = $track($value);
      }
      continue;
    }
    
    $parentScalar = $track[0];
    $isParentList = is_array($parentScalar);
    $parentStr = $isParentList ? $parentScalar[0] : $parentScalar;
    $relPath = sprintf($pathTemplate, $parentStr);
    $path = getPath($relPath);
    
    //debugLine(['path', $path, is_file($path), $parents, !$parents[$path], $parents[$path]]);
    $isFileParent = true;
    
    if (!$parents[$path]) {
      $parentContent = contentOrWrite($path, '{}');
      
      if (is_null($parentContent)) {
        $isFileParent = ($method === 'set' && is_array($track) && count($track) === 1);
        
        $parent = !$isFileParent
          ? $value
          : [];
      } else {
        $parent = jsonDecode($parentContent);
        $parent = $parent ? $parent : [];
      }
    } else {
      $parent = & $parents[$path];
    }
    
    //debugLine([$isFileParent]);
    
    if ($isFileParent) {
      $did = & doIt($exec, $parents, $parent);
      
      if (!$did['ok']) return $did;
      else $parent = $did['val'];
    }
    
    $parents[$path] = & $parent;
    
    //debugLine(['executer foreach execs', $path, $relPath, $exec, $parent, $parents]);
  }
  
  //debugLine(['parents in executer', $parents]);
  
  if (count(debugLine()))
    return [
      'ok' => false,
      'debs' => debugLine()
    ];
  
  if ($saveInFiles)
    forEach ($parents as $path => $parent) {
      if ($parent) {
        $content = jsonEncode($parent);
        file_put_contents($path, $content);
        
        //debugLine(['content in Executer', 'path' => $path, 'parent' => $parent]);
      }
    }
  
  return [
    'ok' => !count($errors),
    'val' => $parents,
    'results' => $results,
    'errors' => $errors
  ];
}

function getContent($path) {
  return file_exists($path) ? file_get_contents($path) : false;
}

function contentOrWrite($topPath, $text = '[]') {
  $content = getContent(getPath($topPath));
  if ($content !== false) return $content;
  
  $way = '';
  $path = $topPath;
  
  if ($topPath[0] === '~') {
    $isAbs = true;
    $path = substr($topPath, 1);
    $way = $_SERVER['DOCUMENT_ROOT'];
  }
  
  $parts = explode('/', $path);
  
  forEach ($parts as $i => $part) {
    $way .= '/' . $part;
    
    if ($i < count($parts) - 1) {
      if (is_dir($way) || is_file($way)) continue;
      else mkdir($way);
    } else file_put_contents($way, $text);
  }
  
  return null;
}

function replaceArgs ($value, $args, & $errors, $defValueName = 'value', $canBeStringOnly = false) {
  if (is_string($value)) {
    if (startsWith($value, '{') && endsWith($value, '}')) {
      $argn = substr($value, 1, -1);
      
      if ($argn[0] === '@') {
        global $globs;
        $glob = $globs[substr($argn, 1)];
        if (isset($glob)) return $glob;
        // $errors[] = "Используется параметр, не входящий в список аргументов: $value";
        return;
      } else if ($argn[0] === '?') return $args[substr($argn, 1)];
      else if (isset($args[$argn])) return $args[$argn];
      //else if (array_key_exists($argn, $args) && $args[$argn] == null)
      return null;
      
    } else if (strpos($value, '{') !== false && strpos($value, '}') !== false) {
      $keys = [];
      $vals = [];
      
      forEach ($args as $key => $val) {
        $keys[] = '{' . $key . '}';
        $vals[] = $val;
      }
      
      return str_replace($keys, $vals, $value);
    } else return $value;
  } else if ($canBeStringOnly) return $value;
  
  if (is_array($value)) {
    $newTrack = [];
    
    forEach ($value as $tracen => $trace) {
      $val = replaceArgs($trace, $args, $errors);
      
      if (isset($val)) {
        $key = replaceArgs($tracen, $args, $errors, $defValueName, true);
        //debugLine([$key, $val, $trace]);
        if (!is_null($key)) $newTrack[$key] = $val;
        else $newTrack[$tracen] = $val;
      }
    }
    
    return $newTrack;
  } else if (is_null($value) && isset($args[$defValueName])) {
    return $args[$defValueName];
  } else return $value;
}

function findRule ($rules, $exec, $topTrack = [], $topArgs = [], $pro = []) {
  $action = $exec['action'];
  $retExec;
  
  forEach ($rules as $rule) {
    $ruleAction = $rule['action'];
    $args = array_merge($topArgs, typ([], $rule['args']));
    $track = array_merge($topTrack, typ([], $rule['track']));
    
    if ($action === $ruleAction) {
      $errors = [];
      $execArgs = $exec['args'];
      $typeErrors = [];
      $last = [];
      
      forEach ($args as $argn => $argv) {
        if (!isCorrectType($execArgs[$argn], $argv)) {
          $typeErrors[$argn] = $argv;
          $last = [$argn, $argv];
        }
      }
      
      if (count($typeErrors)) {
        $message = count($typeErrors) === 1
          ? 'Некорректное значение параметра ' . $last[0] . '. Ожидается ' . $last[1]
          : 'Присутствуют некорректные значения параметров';
        
        return [
          'ok' => false,
          'errors' => [$message],
          'expected' => $typeErrors,
          'exec' => $exec,
          'args' => $execArgs,
          'rule' => $rule,
        ];
      }
      
      $track = replaceArgs($track, $execArgs, $errors);
      $value = replaceArgs($rule['value'], $execArgs, $errors);
      
      //debugLine(['... value', $value, $rule, $execArgs]);
      
      $ruleSide = $rule['side'];
      $side = null;
      
      if (is_array($ruleSide)) {
        $side = [];
        $sideTrack = array_merge($track, typ([], $ruleSide['track']));
        $side['method'] = $ruleSide['method'];
        $side['muted'] = (array_key_exists('muted', $ruleSide))
          ? $ruleSide['muted']
          : true;
        $side['track'] = replaceArgs($sideTrack, $exec, $errors);
        $side['value'] = replaceArgs($ruleSide['value'], $exec, $errors);
      }
      
      $ret = [
        'ok' => !count($errors),
        'errors' => $errors,
        'side' => $side,
        'track' => $track,
        'value' => $value,
        'args' => $execArgs,
        'rule' => $rule,
        'exec' => $exec,
      ];
      
      forEach ($rule as $key => $val)
        if (!array_key_exists($key, $ret))
          $ret[$key] = $val;
      
      return $ret;
    }
    
    if (is_array($rule['next'])) {
      $retExec = findRule($rule['next'], $exec, $track, $args, $pro);
      if ($retExec) return $retExec;
    }
  }
  
  return $retExec;
}

function accesser ($accesses, $user, $execs) {
  $rejected = [];
  $resolved = [];
  
  forEach ($execs as $exec) {
    $level = $user['level'];
    
    if (!$exec['action']) {
      $rejected[] = [
        'exec' => $exec,
        'errors' => ['Нет названия действия'],
      ];
      continue;
    }
    
    $rule = findRule($accesses, $exec);
    
    if (!$rule) {
      $rejected[] = [
        'exec' => $exec,
        'errors' => ['Неизвестное действие']
      ];
      continue;
    }
    
    if ($rule['level'] > $user['level']) {
      $rejected[] = [
        'exec' => $exec,
        'errors' => ['Для данного действия не хватает прав']
      ];
      continue;
    }
    
    if ($rule['ok']) 
      $resolved[] = $rule;
    else
      $rejected[] = $rule;
  }
  
  return [
    'resolved' => $resolved,
    'rejected' => $rejected
  ];
}

function observeTracks ($tracks, $inspector, & $parents, & $frequency, $sleeps = null) {
  $resolved = [];
  $limit = 50000;
  
  forEach ($tracks as $track) {
    if (is_null($track)) continue;
    $target = null;
    $tracked = tracker($track, $parents);
    
    if ($tracked['ok']) {
      $target = $tracked['target'];
    } else return $tracked;
    
    $is = isExpected($target, $inspector);
    
    if ($is) {
      $resolved[] = $target;
    }
  }
  
  //if (count(debugLine())) return debugLine();
  
  $sleeps = is_null($sleeps) ? $frequency ? intval($limit / $frequency) : 0 : $sleeps;
  //debugLine(['fr ==', $frequency]);
  
  if (count($resolved) === 0 && $sleeps > 1) {
    usleep($frequency * 1000);
    
    return observeTracks($tracks, $inspector, $parents, $frequency, $sleeps - 1);
  }
  
  return [
    'ok' => true,
    'val' => $resolved
  ];
}


function findInFiles($text, $dir = './') {
  $fileNames = [];
  
  if (!$text || $text === '') return [
    'ok' => false,
    'errors' => ['empty search text']
  ];
  
  foreach(scandir(getPath($dir)) as $fileName) {
    if ($fileName !== '.' && $fileName !== '..') {
      $content = getContent(getPath($fileName));
      if (strpos($content, $text) !== false) 
        $fileNames[] = $fileName;
    }
  }
  
  return [
    'ok' => true,
    'files' => $fileNames
  ];
}


/////////////////////////
/////////////////////////
/////////////////////////
/////////////////////////
/////////////////////////
/////////////////////////
/////////////////////////
/////////////////////////
/////////////////////////
/////////////////////////
/////////////////////////
/////////////////////////


function setAttributes (& $target, $attrs) {
  foreach ($attrs as $attrKey => $attrValue) {
    $target[$attrKey] = getAttribute($target, $attrValue);
  }
}

function getIfWHEN($target, $inspector) {
  if (!isList($inspector['WHEN'])) return $inspector;
  
  $index = isExpected($target, $inspector['WHEN'][0]) ? 1 : 2;
  
  return $inspector['WHEN'][$index];
}

function isExpected ($target, $inspector) {
  
  if (is_null($inspector)) return false;
  
  if (is_array($inspector)) {
    if (isDict($inspector)) {
      forEach ($inspector as $key => $val) {
        $tern = 'WHEN';
        if ($key === $tern) {
          $num = isExpected($target, $inspector[$tern][0]) ? 1 : 2;
          
          //debugLine([$num, $inspector[$tern][$num], $inspector]);
          
          return isExpected($target, $inspector[$tern][$num]);
        } elseif ($target[$key] !== $inspector[$key])
          return false;
      }
      return true;
    } else {
      $valLen = count($inspector);
      
      if ($valLen == 1) {
        $ret = !!getAttribute($target, $inspector[0]);
        return $ret;
      } elseif ($valLen == 2) {
        //$debugLine[] = ['twice operator', $target, $inspector[0] === '!', $target[$inspector[0]], getAttribute($target, $inspector[0]), $inspector[0], $target[$inspector[1]], getAttribute($target, $inspector[1]), $inspector[1]];
        
        return $inspector[0] === '!'
          ? !getAttribute($target, $inspector[1])
          : isCorrectType($target[$inspector[0]], $inspector[1]) || getAttribute($target, $inspector[0]) === getAttribute($target, $inspector[1]);
        
      } elseif ($valLen != 0) {
        $step = 3;
        $happensCount = 0;
        $wholeCount = 0;
        $prevLogicEnd = '';
        $ret = [];
        
        for ($i = 0; $i < $valLen; $i += $step) {
          $wholeCount += 1;
          $field = is_array($inspector[$i]) ? tracker(array_merge([[$target]], $inspector[$i]))['target'] : getAttribute($target, $inspector[$i]);
          //if (is_array($inspector[$i])) //debugLine(['insp', $field, $inspector[$i],$target, array_merge([$target], $inspector[$i]), '=', '=', '=']);
          $sign = getIfGlob($inspector[$i + 2]);
          $result = false;
          
          $operator = $inspector[$i + 1];
          $logicEnd = substr($operator, -1, 1);
          $logicStart = $operator[0];
          $logics = ['&', '|', '(', ')'];
          $logicBrackets = ['(', ')'];
          
          //$ret[] = ['Ф', $logicStart, $operator, $logicEnd, $prevLogicEnd];
          
          if (array_search($logicStart, $logics) !== false) $operator = substr($operator, 1);
          if (array_search($logicEnd, $logics) !== false) {
            $operator = substr($operator, 0, -1);
          }
          
          if ($operator === "==") $result = $field == $sign;
          else if ($operator === "===") $result = $field === $sign;
          else if ($operator === ">=") $result = $field >= $sign;
          else if ($operator === "<=") $result = $field <= $sign;
          else if ($operator === "!=") $result = $field != $sign;
          else if ($operator === "<") $result = $field < $sign;
          else if ($operator === ">") $result = $field > $sign;
          else if ($operator === "is" || $operator === "not") {
            $isNot = $operator === "not";
            
            $result = $sign === 'Truthy'
              ? ($isNot ? !$field : !!$field)
              : ($sign === 'Falsy'
                ? ($isNot ? !!$field : !$field)
                : ($isNot ? !isCorrectType($field, $sign) : isCorrectType($field, $sign)));
            
            //debugLine(['insp is|not', $field, $operator, $sign, $result]);
          } else if (($operator === 'in' || $operator === 'out') && is_array($sign)) {
            $res = null;
            
            forEach ($sign as $child) {
              if (getIfGlob($child) === $field) {
                $res = $operator === 'in';
                break;
              }
            }
            $result = is_null($res)
              ? $operator !== 'in'
              : $res;
          }
          
          //$debugLine[] = ['isExpected', $field, $operator, $sign, '>>>', $result, $inspector, $target];
          if ($result) {
            if ($logicEnd === '|' || $prevLogicEnd === '|') return true;
            else $happensCount++;
          } else if ($logicEnd === '&' || $logicStart === '&' || $prevLogicEnd === '&') return false;
          
          if (array_search($logicEnd, $logicBrackets) === false && array_search($logicEnd, $logics) !== false) $prevLogicEnd = $logicEnd;
        }
        
        if (count($ret)) return [
          'result' => $happensCount === $wholeCount,
          'hp' => $happensCount,
          'wh' => $wholeCount,
          'ret' => $ret
        ];
        return $wholeCount && ($happensCount === $wholeCount);
      }
    }
  } else return $inspector;
  
  return false;
}

function getAttribute ($target, $topField) {
  return getAttribute_($target, $topField);
}

function & getAttribute_ (& $target, $topField) {
  if (is_array($topField)) $fields = $topField;
  else $fields = [$topField];
  
  $isVariated = isList($topField);
  $parents = [];
  
  foreach ($fields as $i => $field) {
    //if ($i == count($fields) - 1) $isVariated = false;
    
    if (is_string($field)) {
      $name = substr($field, 1);
      
      if ($field[0] === '.') {
        if ($field === '.') {
          if ($isVariated && is_null($target)) continue;
          return $target;
        } else if ($name === 'length') {
          if ($isVariated && !count($target)) continue;
          
          return count($target[dirTrackerItem()] ? $target['--named'] : $target);
        } else if ($name === 'mtime') {
          $time = getmtime(getPath($target[$field]));
          
          if ($isVariated && !$time) continue;
          return $time;
        } else if ($name === 'minmtime' || $name === 'maxmtime') {
          $line = $target;
          if (is_string($target)) $line = [$target];
          if (!is_array($line)) return null;
          
          $times = [];
          forEach ($line as $path) {
            $times[] = getmtime(getPath($path));
          }
          
          //debugLine($line);
          
          if ($isVariated && !$times) continue;
          return $name === 'minmtime' ? min($times) : max($times);
        }
      } else if ($field[0] === '>') {
        global $currentVariables;
        $attrs = explodeAttrs($name);
        
        $appName = $attrs['attrs'][0];
        $bag = getBagProps($appName);
        $res = $bag[$attrs['name']];
        
        //debugLine(['>>>', $appName, $bag, $res, $attrs, $currentVariables]);
        
        if ($isVariated && !$res) continue;
        return $res;
      } else if ($field === '!') {
        if ($isVariated && $target) continue;
        return !$target;
      } else if ($field[0] === '@') {
        $val = getGlob($name);
        
        //debugLine(['@ field', $globs, $field, $target, $name, $val]);
        
        if ($isVariated && is_null($val)) continue;
        return $val;
      } else if ($field[0] === '?') {
        $val = isExpected($target, $target[$name]);
        
        //debugLine(['? field', $field, $target[$name], $target, $name, $val]);
        
        if ($isVariated && !$val) continue;
        return $val;
      } else if ($field[0] === '*') {
        $val = !isset($target[$name]) || isExpected($target, $target[$name]);
        
        //debugLine(['* field', $field, $target[$name], $target, $name, $val]);
        
        if ($isVariated && !$val) continue;
        return $val;
      } else if ($field[0] === '>') {
        $val = & tracker($target[$name], $parents, $target)['target'];
        if ($isVariated && is_null($val)) continue;
        return $val;
      } else {
        if ($field[0] === '\\' || $field[0] === '$') {
          if (!is_null($target[$name])) $val = & $target[$name];
        } else if (!is_null($target[$field])) $val = & $target[$field];
        //$debugLine[] = ['else block', $val, $target];
        if ($isVariated && is_null($val)) continue;
        return $val;
      }
    } else {
      $res = $target[$field];
      if ($isVariated && is_null($res)) continue;
      return $res;
    }
  }
}

function debugLine ($news = null) {
  global $debugLine;
  if (!is_null($news))
    $debugLine[] = $news;
    
  return $debugLine;
}

function getmtime ($topPath, $depth = -1) {
  if (is_null($topPath)) return null;
  
  //debugLine(['getmtime-innnn' => $topPath]);
  
  if (is_dir($topPath)) {
    $maxTime = 1;
    
    //debugLine(['getmtime--start', array_slice(scandir($topPath), 2)]);
    foreach (array_slice(scandir($topPath), 2) as $innername) {
      $path = "$topPath/$innername";
      
      $mtime = getmtime($path, $depth - 1);
      
      if ($maxTime < $mtime) $maxTime = $mtime;
      
      //debugLine(['getmtime', $path, is_dir($path), $mtime, $maxTime - 0]);
    }
    //debugLine(['getmtime--end']);
    
    return $maxTime;
  } else if (file_exists($topPath)) {
    return filemtime($topPath);
  } else return 0;
}

function jsonEncode($data) {
  return json_encode($data, JSON_UNESCAPED_UNICODE);
}

function jsonDecode($data) {
  return json_decode($data, true);
}

function isCorrectType ($value, $typer) {
  if (is_string($typer)) {
    
    if ($typer[0] === '#') {
      $explodes = explode(':', $typer, 2);
      $type = substr($explodes[0], 1);
      $lower = strtolower($type);
      
      if (($lower === $type && is_null($value)) || $lower === 'any') return true;
      
      $isCorrect = false;
      
        if   ($lower === 'list') $isCorrect = isList($value); // && isCorrectInArray($explodes[1], $value);
      elseif ($lower === 'dict') $isCorrect = isDict($value); // && isCorrectInArray($explodes[1], $value);
      elseif ($lower === 'object') $isCorrect = is_array($value); // && isCorrectInArray($explodes[1], $value);
      elseif ($lower === 'string') $isCorrect = is_string($value);
      elseif ($lower === 'str') $isCorrect = $value === '' || $value === '1';
      elseif ($lower === 'numeric') $isCorrect = is_numeric($value);
      elseif ($lower === 'number') $isCorrect = is_int($value) || is_float($value);
      elseif ($lower === 'num') $isCorrect = $value === 0 || $value === 1;
      elseif ($lower === 'boolean') $isCorrect = is_bool($value);
      elseif ($lower === 'simple') $isCorrect = is_string($value) || is_int($value) || is_float($value);
      elseif ($lower === 'primitive') $isCorrect = is_bool($value) || is_string($value) || is_int($value) || is_float($value);
      
      return $isCorrect;
      
    } else if (startsWith($typer, '/') && endsWith($typer, '/')) {
      return !!preg_match($typer, $value);
    } else return $value === $typer;
  } elseif (isList($typer)) {
    foreach ($typer as $tup) {
      if (isCorrectType($value, $tup))
        return true;
    }
    return false;
  }
  
  return false;
}

function explodeAttrs($str) {
  $expls = explode(':', $str);
  $ret = [
    'name' => $expls[0],
    'attrs' => []
  ];
  
  forEach ($expls as $i => $expl) {
    if ($i == 0) continue;
    
    if ($expl[0] === '#') $ret['type'] = $expl;
    else $ret['attrs'][] = $expl;
  }
  return $ret;
}

function parseType($value, $type, $div = ',', $names = []) {
  
  $lower = strtolower($type);
  if ($lower === $type && $value === '') return null;
  
  if ($lower === '#bool') {
    return !!$value;
  } else if ($lower === '#boolean') {
    return $value === 'true';
  } else if ($lower === '#str') {
    return $value ? '1' : '';
  } else if ($lower === '#num') {
    return $value ? 1 : 0;
  } else if ($lower === '#number') {
    if (!$value) return 0;
    else if (is_int($value) || is_float($value)) return $value;
    else if (is_numeric($value)) {
      if (intval($value) - floatval($value)) return floatval($value);
      else return intval($value);
    } else return 0;
  } else if ($lower === '#list') {
    return is_array($value)
      ? $value
      : ($value
        ? explode($div, $value)
        : []);
  } else if ($lower === '#dict') {
    if (!$value) return ['isDict' => true];
    $res = [];
    $vals = explode($div, $value);
    $keys = is_string($names)
      ? explode($div, $names)
      : (isList($names)
        ? $names
        : []);
    
    forEach ($keys as $i => $key) {
      $res[$key] = $vals[$i];
    }
    
    return $res;
  } else return $value;
}

function decodeParams($paramsStr, $decoder, $dividers = null) {
  if (!is_string($paramsStr)) return null;
  $res = [];
  $defDivs = ',;';
  if (is_null($dividers)) $dividers = $defDivs;
  $blockDiv = def($dividers[1], $defDivs[1]);
  $div = def($dividers[0], $defDivs[0]);
  $params = explode($blockDiv, $paramsStr);
  
  forEach ($params as $i => $val) {
    $attrs = explodeAttrs($decoder[$i]);
    
    $res[$attrs['name']] = parseType($val, $attrs['type'], $div);
  }
  
  return $res;
}

function associateParams($params, $decoder) {
  $res = [];
  
  if (is_array($params))
    forEach ($params as $i => $val) {
      $attrs = explodeAttrs($decoder[$i]);
      
      $res[$attrs['name']] = parseType($val, $attrs['type']);
    }
  
  return $res;
}

function isCorrectInArray($content, $value) {
  if ($content) {
    if (is_array($value)) {
      $obj = jsonDecode($content);
      
      if ($obj) {
        $isCorrect = true;
        foreach ($obj as $key => $val) {
          if (!isCorrectType($value[$key], $val)) {
            $isCorrect = false;
            break;
          }
        }
        
        return $isCorrect;
      }
    }
    return false;
  } else return true;
}

function commitTextFiles($dict) {
  $isLoadReleases;
  $root = $dict['root'];
  
  foreach ($dict['files'] as $file) {
    
  }
  
  return $dict;
}


function ter($arr) {
  return bobr($arr[bobr($arr[0]) ? 1 : 2]);
}

function bobr($bobr) {
  if (is_array($bobr)) {
    if (count($bobr) === 1 && is_array($bobr[0])) {
      return $bobr[0];
    } elseif (count($bobr) === 3) {
      return ter($bobr);
    }
  } else return $bobr;
}



function p() {
  $parent = null;
  
  foreach (func_get_args() as $i => $arg) {
    if ($i == 0) $parent = $arg;
    else $parent = $parent[$arg];
  }
  return $parent;
}

function def () {
  forEach (func_get_args() as $arg)
    if (!is_null($arg))
      return $arg;
  return null;
}

function typ () {
  $args = func_get_args();
  $type = gettype($args[0]);
  
  forEach ($args as $key => $arg) {
    if ($key == 0) continue;
    if (gettype($arg) === $type)
      return $arg;
  }
  return $args[0];
}

function isStr($input) {
  return is_string($input);
}

function isList($input) {
  if (!is_array($input)) return FaLse;
  
  for ($i = 0; $i < count($input); $i++)
    if (!array_key_exists($i, $input))
      return false;
  return true;
}

function isDict($input) {
  if (!is_array($input)) return FaLse;
  
  for ($i = 0; $i < count($input); $i++)
    if (!array_key_exists($i, $input))
      return true;
  return false;
}


















