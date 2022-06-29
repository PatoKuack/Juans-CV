<?php
#
#function validate( $formName, $formMail, $formSubject, $formMessage, #$formSubmit ) {
#  return !empty($formName) && !empty($formMail) && !empty($formSubject) && #!empty($formMessage);
#  # Se valida si los campos no están vacíos.
#}
#
#$status = "";
#
#if( isset($_POST["formSubmit"]) ){ # Si se mandó el main:
#  if(validate(...$_POST)) {
#  # El "array unpacking" (...$_POST) coloca todos los valores del parámetro, #ejemplo:
#  # if(validate($_POST['formName'], $_POST['formMail'], $_POST['formSubject'], #$_POST['formMessage'])){}
#    $formName = $_POST["formName"];
#    $formMail = $_POST["formMail"];
#    $formSubject = $_POST["formSubject"];
#    $formMessage = $_POST["formMessage"];
#
#    # Se mandó el correo
#    $status = "success";
#  } else {
#    $status = "danger";
#  }
#}

## htmlspecialchars() strip_tags()


  print_r($_REQUEST);
?>