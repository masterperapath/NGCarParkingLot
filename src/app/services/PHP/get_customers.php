<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Content-Type: application/json; charset=UTF-8");
getCustomers();
function getCustomers(){
    $conn = new mysqli("localhost","root","","parking_reserve");
    $result = $conn->query("SELECT * FROM customer");
    $customers = array();
    while($rs = $result->fetch_array(MYSQLI_ASSOC)) {
        array_push($customers,array(
        'customerID'=>$rs["customerID"],
        'firstName'=>$rs["firstName"],
        'lastName'=>$rs["lastName"],
        'licensePlate'=>$rs["licensePlate"]));
    }
    $conn->close();
    $json = json_encode($customers);
    if ($json === false) {
        // Avoid echo of empty string (which is invalid JSON), and
        // JSONify the error message instead:
        $json = json_encode(array("jsonError", json_last_error_msg()));
        if ($json === false) {
            // This should not happen, but we go all the way now:
            $json = '{"jsonError": "unknown"}';
            echo "fail";
        } else {
            echo "Success";
        }
        // Set HTTP response status code to: 500 - Internal Server Error
        http_response_code(500);
    }
    echo $json;
}
?>