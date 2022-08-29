<?php
$result = '';
$to = "emesmediacontact@gmail.com"; // El correo a donde va el formulario
$subject = "Mensaje desde EMESMEDIA";
$txt = "Nombre: ".$_POST['name']."\n"."Teléfono: ".$_POST['tel']."\n"."Mail: ".$_POST['email']."\n"."Organitation: ".$_POST['organizacion']."\n"."Mensaje: ".$_POST['mensaje'];
$headers = "From: ".$_POST['email']. "\r\n" .  
"CC: emesmediacontact@gmail.com"; // El correo de la persona que va en Copia

$result = mail($to,$subject,$txt,$headers);

if($result){
    header("location:/enviado.html");
}else{
    header("location:/no-enviado.html");
}
?>
