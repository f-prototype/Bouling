<?php

/* https://api.telegram.org/bot5664840269:AAFWTzYL0JiqbNOIP_Jgu-RxnwW_31V4kaM/getUpdates,
где, XXXXXXXXXXXXXXXXXXXXXXX - токен вашего бота, полученный ранее */
$ourData = file_get_contents("php://input");
$object = json_decode($ourData);
$name = $object->username;
$phone = $object->usertel;
$amout = $object->useramout;
$date = $object->userdate;
$text = $object->usertext;
$token = "5664840269:AAFWTzYL0JiqbNOIP_Jgu-RxnwW_31V4kaM";
$chat_id = "-647173923";
$arr = array(
  'Заказ на:' => $text,
  'Имя: ' => $name,
  'Телефон: ' => $phone,
  'Количество:' => $amout,
  'Дата:' => $date,
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