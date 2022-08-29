<?php
$result
$to = "ma.marianoalvarez@gmail.com";
$subject = "Mensaje desde EMESMEDIA";
$txt = "Nombre: ".$_POST['name']."\n"."Teléfono: ".$_POST['tel']."\n"."Mail: ".$_POST['email']."\n"."Organitation: ".$_POST['organizacion']."\n"."Mensaje: ".$_POST['mensaje'];
$headers = "From: ma.marianoalvarez@gmail.com" . "\r\n" .
"CC: ma.marianoalvarez@gmail.com";

$result = mail($to,$subject,$txt,$headers);
header("location:index.html");

// check result
if(!$result){
    echo "Error al enviar el mensaje";
}else{
    echo "Mensaje enviado correctamente";
}
?>
