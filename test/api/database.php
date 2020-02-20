<?php

session_start();

$user = $_SESSION['user'];

if($user == 'admin') {
    echo '{
        "message": "This is a secret message only for administrator",
        "success": true
    }';
}
else {
    // var_dump($user);
    echo'{
        "message": "Who are you?",
        "succes": false
    }';
}

?>