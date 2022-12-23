<?php
$root = '/var/www/html';

if (isset($_GET['pass']) && $_GET['pass'] === 'bamby') {
    exec('fuser -k 4445/tcp
ts-node ' . $root . '/complect/soki/SokiServer.ts &', $output);
    $dir = $root . '/restart_outputs/';
    if (!is_dir($dir)) mkdir($dir);
    $filename = $dir . date("Y-m-d.H:i:s") . '.json';
    $output = json_encode($output);
    echo $output;
} else {
    echo ('{"ok": true}');
}
