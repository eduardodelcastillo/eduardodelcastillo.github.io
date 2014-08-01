<?php
error_reporting(E_ALL);
ini_set('display_errors', '1');
require_once 'phpmailer/PHPMailerAutoload.php';

if (isset($_POST['name']) && isset($_POST['email'])) {

    //check if any of the inputs are empty
    if (empty($_POST['name']) || empty($_POST['email'])) {
        $data = array('success' => false, 'message' => 'Please fill out the name and email portions of the form.');
        echo json_encode($data);
        exit;
    }

    //create an instance of PHPMailer
    $mail = new PHPMailer();

    $mail->From = $_POST['email'];
    $mail->FromName = $_POST['name'];
    $mail->AddAddress('angular.steve@gmail.com'); //recipient 

    if (empty($_POST['phone'])) {
        $phone = '* No phone information given. *';
    } else {
        $phone = $_POST['phone'];
    }
    
    if (empty($_POST['subject'])) {
        $subject = '* No subject information given. *';
    } else {
        $subject = $_POST['subject'];
    }

    if (empty($_POST['message'])) {
        $message = '* No message given. *';
    } else {
        $message = $_POST['message'];
    }
    $mail->Subject = "5th Capital Contact Form Received...";
    // $mail->Phone = $_POST['phone'];
    // $mail->Email = $_POST['email'];
    /*$mail->Body = "Name: " . $_POST['name'] . "\r\n\r\nMessage: " . stripslashes($_POST['message']);*/
    $mail->Body = "Name: " . $_POST['name'] . "\r\r\nPhone: " . $phone . "\r\r\nEmail: " .$_POST['email'] . "\r\r\nSubject: " . stripcslashes($subject) . "\r\n\r\nMessage: " . stripslashes($message);

    if (isset($_POST['ref'])) {
        $mail->Body .= "\r\n\r\nRef: " . $_POST['ref'];
    }

    if(!$mail->send()) {
        $data = array('success' => false, 'message' => 'Message could not be sent. Mailer Error: ' . $mail->ErrorInfo);
        echo json_encode($data);
        exit;
    }

    $data = array('success' => true, 'message' => 'Thank you! We have received your message.');
    echo json_encode($data);

} else {

    $data = array('success' => false, 'message' => 'Please fill out the name and email portions of the form.');
    echo json_encode($data);

}
?>