<?php
$to = "emesmediacontact@gmail.com";
$subject = "Mensaje desde EMESMEDIA";
$txt = "Nombre: ".$_POST['name']."\n"."Teléfono: ".$_POST['tel']."\n"."Mail: ".$_POST['email']."\n"."Organitation: ".$_POST['organizacion']."\n"."Mensaje: ".$_POST['mensaje'];
$headers = "From: info@securitykat.com.ar" . "\r\n" .
"CC: emesmediacontact@gmail.com";

mail($to,$subject,$txt,$headers);
header("location:index.html");
?>
