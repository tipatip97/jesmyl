<?



echo '<a href="';
echo 'https://oauth.vk.com/authorize?client_id=7665415&redirect_uri=http://u978877x.beget.tech/auth-s&display=page&response_type=token&v=5.59&scope=notify';
echo '">VKontakte</a>';



echo json_encode($_GET, JSON_UNESCAPED_UNICODE);













/*
require_once 'servant.php';
require_once getPath('/S/lib/SocialAuther/autoload.php');


$vkConfig = [
  client_id => '7665415',
  client_secret => 'qNDq1KActa6PemtEZ0fQ',
  redirect_uri => 'http://u978877x.beget.tech/auth-s?provider=vk'
];

$vkAdapter = new SocialAuther\Adapter\Vk($vkConfig);

$auther = new SocialAuther\SocialAuther($vkAdapter);


if (!isset($_GET['code'])) {
  echo '<a href="';
  echo $vkAdapter->getAuthUrl();
  echo '">VKontakte</a>';
} else  {
  $config = [
    ok => $auther->authenticate(),
    id => $auther->getSocialId(),
    href => $auther->getSocialPage(),
    fio => $auther->getName(),
    email => $auther->getEmail(),
    sex => $auther->getSex(),
    birthday => $auther->getBirthday(),
    avatar => $auther->getAvatar(),
  ];
  
  echo json_encode($config, JSON_UNESCAPED_UNICODE);
}
*/

?>










