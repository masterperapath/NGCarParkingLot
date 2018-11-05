<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Content-Type: application/json; charset=UTF-8");

defined('BASEPATH') OR exit('No direct script access allowed');

// require(BASEPATH.'');
// getAllUser();
class User extends CI_Controller {
    function __construct(){
        parent::__construct();
        $this->load->library('Master_Library');
        // $this->load->model('Master_Model');
        $this->load->model('User_Model');
        date_default_timezone_set('Asia/Bangkok');
    }

    public function getAllUser(){
        $this->load->model('User_Model');
        $data = $this->User_Model->getAllUser();

        echo $data;
    }

    public function login()
	{
		$method = $_SERVER['REQUEST_METHOD'];
		if($method != 'POST'){
			json_output(400,array('status' => 400,'message' => 'Bad request.'));
		} else {
			$check_auth_client = $this->MyModel->check_auth_client();
			
			if($check_auth_client == true){
				$params = $_REQUEST;
		        
		        $username = $params['username'];
		        $password = $params['password'];
		        	
		        $response = $this->MyModel->login($username,$password);
				echo $response;
				json_output($response['status'],$response);
			}
		}
	}
	public function logout()
	{
		$method = $_SERVER['REQUEST_METHOD'];
		if($method != 'POST'){
			json_output(400,array('status' => 400,'message' => 'Bad request.'));
		} else {
			$check_auth_client = $this->MyModel->check_auth_client();
			if($check_auth_client == true){
		        $response = $this->MyModel->logout();
				json_output($response['status'],$response);
			}
		}
	}
}