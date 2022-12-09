<?php

/* https://api.telegram.org/bot5664840269:AAFWTzYL0JiqbNOIP_Jgu-RxnwW_31V4kaM/getUpdates,
где, XXXXXXXXXXXXXXXXXXXXXXX - токен вашего бота, полученный ранее */

$name = $_POST['user_name'];
$phone = $_POST['user_phone'];
$email = $_POST['user_email'];
$date = $_POST['user_date'];
$token = "5664840269:AAFWTzYL0JiqbNOIP_Jgu-RxnwW_31V4kaM";
$chat_id = "-647173923";
$arr = array(
  'Имя: ' => $name,
  'Телефон: ' => $phone,
  'Email' => $email,
  'Дата' => $date,
);

foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

if ($sendToTelegram) {
  header('Location: ../index.html');
} else {
  echo "Error";
}
?>