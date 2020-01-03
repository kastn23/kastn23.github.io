<?php
if (!empty($_GET['name']) and !empty($_GET['tel'])){
    $name = $_GET['name'];
    $tel = $_GET['tel'];
    $text = $_GET['text'];
    mail('kastn23@mail.ru','Обратная связь!','
    Привет меня зовут '.$name.'
    Мой телефон: '.$tel.'
    '.$text);
    exit('Спасибо за обращение!<br>Мы свяжемся с вами в ближайшее время.');
}
else
    exit('Не все поля заполнены!');
?>