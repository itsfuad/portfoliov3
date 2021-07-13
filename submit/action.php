<?php
// Telegram function which you can call
function telegram($msg) {
        global $telegrambot,$telegramchatid;
        $url='https://api.telegram.org/bot'.$telegrambot.'/sendMessage';$data=array('chat_id'=>$telegramchatid,'text'=>$msg);
        $options=array('http'=>array('method'=>'POST','header'=>"Content-Type:application/x-www-form-urlencoded\r\n",'content'=>http_build_query($data),),);
        $context=stream_context_create($options);
        $result=file_get_contents($url,false,$context);
        return $result;
}
// Set your Bot ID and Chat ID.
$telegrambot='1612282807:AAEcRfHrKKNmsZ7NXNJvlV6C0yVYivNdnNg';
$telegramchatid=1467252650;
// Function call with your own text or variable
telegram ("Name: ".$_POST["name"]."\n"."Email: ". $_POST["email"]."\nMessage: "."\n".$_POST["message"]);
include "Done.html";
?>

