<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $prenom = $_POST['prenom'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    // Adresse email où vous souhaitez recevoir les mails
    $to = "aymaneberka@gmail.com";

    // Sujet du mail
    $subject = "Nouveau message de $name $prenom";

    // Entêtes du mail
    $headers = "From: $email" . "\r\n" .
               "Reply-To: $email" . "\r\n" .
               'X-Mailer: PHP/' . phpversion();

    // Envoi du mail
    if(mail($to, $subject, $message, $headers)) {
        echo "Email envoyé avec succès.";
    } else {
        echo "L'envoi de l'email a échoué.";
    }
}
?>