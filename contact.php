<?php


 $name = $_POST['name'];
$email = $_POST['email'];
$contact = $_POST['modal_my_mobile2'];
$country_code = $_POST['country_code'];
$country_name = $_POST['country_name'];
$message= $_POST['message'];

$to = "harshad.bhosale4378@gmail.com";
$subject = "HTML email";

$message = "
<html>
<head>
<title>HTML email</title>
</head>
<body>
<p>This email contains HTML Tags!</p>
<table>
<tr>Name&#58; $name</tr>
<tr>Email&#58; $email</tr>
<tr>Phone&#58; $contact</tr>
<tr>country_code&#58; $country_code</tr>
<tr>country_name&#58; $country_name</tr>
<tr>message&#58; $message</tr>
</table>
</body>
</html>
";

// Always set content-type when sending HTML email
$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";

// More headers
$headers .= 'From: <no_reply@harshad.bhosale4378.com>' . "\r\n";
$headers .= 'Cc: ' . "\r\n";



if(mail($to,$subject,$message,$headers)) //Send an Email. Return true on success or false on error


{
echo 

"<script>window.location.href='thank-you.html';</script>";
}
else
{
echo "<script>
alert('Plz Try Agian');
window.location.href='index.html'

;
</script>";
}
?>