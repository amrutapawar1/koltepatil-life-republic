<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $project = $_POST['project'] ?? '';
    $fullname = $_POST['name'] ?? '';
    $phone = $_POST['modal_my_mobile2'] ?? '';
    $email = $_POST['email'] ?? '';
    $country_code = $_POST['country_code'] ?? '';
    $country_name = $_POST['country_name'] ?? '';
    $message= $_POST['message'] ?? '';

    $to = "harshad.bhosale4378@gmail.com";
    $subject = "New Lead Notification - Website";

    $message = "
    <html>
    <head>
    
    <title>New Lead</title></head>
    <body>
    <h3>Lead Details</h3>
    <table border='1' cellspacing='0' cellpadding='6'>
        <tr><td><strong>Project</strong></td><td>$project</td></tr>
        <tr><td><strong>Name</strong></td><td>$fullname</td></tr>
        <tr><td><strong>Phone</strong></td><td>$country_code$phone</td></tr>
        <tr><td><strong>Email</strong></td><td>$email</td></tr>
        <tr><td><strong>Country Name</strong></td><td>$country_name</td></tr>
        <tr><td><strong>Message</strong></td><td>$message</td></tr>
    </table>
    </body>
    </html>
    ";

// Always set content-type when sending HTML email
$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";

// More headers
$headers .= 'From: <no_reply@GodrejPtoperties.com>' . "\r\n";
$headers .= 'Cc: botmediadigitalmarketing@gmail.com' . "\r\n";

if(mail($to,$subject,$message,$headers)) //Send an Email. Return true on success or false on error


{
echo 

"<script>window.location.href='thankyou.html';</script>";
}
else
{
echo "<script>
alert('Plz Try Agian');
window.location.href='index.html'

;
</script>";
}
}
?>
