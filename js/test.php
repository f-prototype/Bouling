<?php

/* https://api.telegram.org/bot5664840269:AAFWTzYL0JiqbNOIP_Jgu-RxnwW_31V4kaM/getUpdates,
где, XXXXXXXXXXXXXXXXXXXXXXX - токен вашего бота, полученный ранее */
$ourData = file_get_contents("php://input");
$object = json_decode($ourData);
$name = $object->username;
$phone = $object->usertel;
$token = "5664840269:AAFWTzYL0JiqbNOIP_Jgu-RxnwW_31V4kaM";
$chat_id = "-647173923";
$massage = $object->massage;
$arr = array(
  'Заказ на:' => $massage,
  'Имя: ' => $name,
  'Телефон: ' => $phone,
);

foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

if ($sendToTelegram) {
 echo "200";
} else {
  echo "Error";
}
?>