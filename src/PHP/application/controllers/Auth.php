<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Content-Type: application/json; charset=UTF-8");
defined('BASEPATH') or exit('No direct script access allowed');

class Auth extends CI_Controller
{
    // $param = array();
    private $dateTimeFormat;

    public function __construct()
    {
        parent::__construct();
        $this->load->model('User_Model');
        $this->load->model('Auth_Model');
        $this->load->library('Master_Library');
        // $this->load->model('Master_Model');
        $this->load->library('session');
        $this->load->database();
        $this->check_session();
        $this->load->library('email');
        date_default_timezone_set('Asia/Bangkok');
        $this->dateTimeFormat = "Y-m-d H:i:s";
    }

    public function login()
    {
        // * get param
        $param = file_get_contents("php://input");
        $param_decoded = json_decode($param, true);

        $ip_address = $this->input->ip_address();
        $username = strtolower($param_decoded["username"]);
        $password = $param_decoded["password"];

        // $result = $this->Auth_Model->login();

        // var_dump($param_decoded);
        // echo $email;
        // echo $password;
        // echo $ip_address;

        // print_r($this->session->all_userdata());

        if ($this->Auth_Model->login($username, $password)) {
            $session_data = array(
                'username' => $username,
                'ip_address' => $ip_address,
                'logged_in' => true,
            );
            $this->session->set_userdata($session_data);
            // redirect(base_url() . 'main/enter');
            // echo 'Logged in';
            echo json_encode(array('status' => true));
        } else {
            $this->session->set_flashdata('error', 'Invalid Username and Password');
            // redirect(base_url() . 'main/login');
            // echo 'Invalid Username and Password';
            echo json_encode(array('status' => false));
        }

        // var_dump($this->Auth_Model->login($username, $password));

        // switch ($result) {
        //     case 'logged_in':
        //         var_dump($result);
        //         echo 'Logged in';
        //         break;
        //     case 'incorrect_password':
        //         var_dump($result);
        //         echo 'Incorrect Password';
        //         break;
        //     case 'email_not_found':
        //         var_dump($result);
        //         echo 'Email Not Found';
        //         break;
        // }
    }

    public function logout()
    {
        $this->session->unset_userdata('username');
        $this->session->unset_userdata('ip_address');
        $this->session->sess_destroy();
        // redirect(base_url() . 'main/login');

        // redirect(base_url() . "Auth/login");
        echo 'Logged Out!';
    }

    public function register()
    {
        // * get param
        $content = file_get_contents("php://input");
        $data = json_decode($content, true);

        // $data = isset($param_data) ? $param_data : '';

        // * new date and time
        $now = new DateTime(date($this->dateTimeFormat));

        if ($data['username'] != null) {
            // * username to lowercase
            $data['username'] = strtolower($data['username']);
        }
        // * assign dateTime value to data.created_date
        $data['created_date'] = $now->format('Y-m-d H:i:s');

        // * Password Encrypt
        // $data["password"] = md5($data["password"]);

        

        // print_r($data);
        // var_dump($username_available);


        if ($this->email_exists($data['email'])) {
            // echo json_encode(array("yyyy"));
            echo json_encode(array('data' => "1"));
            // echo json_encode(array('data' => "1"));
        } else {
            if ($this->check_if_username_exists($data['username'])) {
                $this->load->model('Auth_Model');
                $this->Auth_Model->register($data);
                // $this->Auth_Model->test();
                echo json_encode(array('data' => "2"));
                // echo json_encode(ret);
            } else {
                echo json_encode(array('data' => "3"));
            }
        }
        // $this->db->close();
    }

    private function check_session()
    {
        $username = $this->session->userdata('username');

        if ($username) {
            echo 'Login Page';
        }
    }

    public function check_if_username_exists($requested_username)
    { // custom callback function
        $this->load->model('Auth_Model');
        $username_available = $this->Auth_Model->check_if_username_exists($requested_username);

        if ($username_available) {
            return true;
        } else {
            return false;
        }
    }

    public function email_exists($email)
    {
        return $this->Auth_Model->email_exists($email);
    }

    public function reset_password()
    {
        $email = trim($this->input->post('email'));
        $result = $this->email_exists($email);
        var_dump($result);
        if ($result) {
            $this->send_reset_password_email($email, $result);
            echo "Send Reset password email successfully";
        } else {
            echo "Email address not registered with Central Plaza Parking Reserved.";
        }

    }

    public function send_reset_password_email($email, $firstName)
    {
        $config = array(
            'protocol' => 'smtp',
            'smtp_host' => 'ssl://smtp.googlemail.com',
            'smtp_port' => 465,
            'smtp_user' => 'xxx@gmail.com', // change it to yours
            'smtp_pass' => 'xxx', // change it to yours
            'mailtype' => 'html',
            'charset' => 'iso-8859-1',
            'wordwrap' => true,
        );

        $this->load->library('email', $config);
        $email_code = md5($firstName);

        $this->email->set_mailtype('html');
        $this->email->from($this->config->item('bot_email'), 'Central Plaza Parking Reserved');
        $this->email->to($email);
        $this->email->subject('Please reset your password at Central Plaza Parking Reserved Website.');
        $message = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
                    "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd"><html>
                    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
                    </head><body>';
        $message .= '<p>Dear  ' . $firstName . ' </p>';
        $message .= '<p> We want to help you reset your password! Please <strong><a href="'
        . base_url() . 'index.php/Auth/reset_password_form/'
            . $email . '/'
            . $email_code . '">CLICK HERE</a></strong> to reset your password.</p>';
        $message .= '<p>Thank you!</p>';
        $message .= '<p>The Team at Central Plaza parking reserved</p>';
        $message .= '</body></html>';

        $this->email->message($message);
        $this->email->send();
    }

    public function reset_password_form($email, $email_code)
    {
        if (isset($email, $email_code)) {
            $email = trim($email);
            $email_hash = sha1($email . $email_code);
            $verified = $this->Auth_Model->verify_reset_password_code($email, $email_code);

            if ($verified) {
                echo "Verified. " . var_dump($verified);
            } else {
                echo "There was a problem with your link. Please click it again or request to reset your password again." . var_dump($verified);
            }

        }
    }

    public function updatePassword()
    {
        // * get param
        $param = file_get_contents("php://input");
        $param_decoded = json_decode($param, true);

        $curr_password = md5($param_decoded["curr_password"]);
        $new_password = $param_decoded["new_password"];
        $conf_password = $param_decoded["conf_password"];
        $userID = $param_decoded["userID"];
        $password = $this->Auth_Model->getCurrentPassword($userID);

        if ($password == $curr_password) {
            if ($new_password == $conf_password) {
                if ($this->Auth_Model->updatePassword($userID, $new_password)) {
                    echo 'Password updated successfully.';
                } else {
                    echo 'Failed to update password';
                }
            } else {
                echo 'New password & Confirm password is not matching.';
            }
        } else {
            echo 'Sorry! Current password is not matching.';
        }

        var_dump($password);
    }

    // public function test(){
    //     $email = $this->input->post('email');
    //     $firstName = $this->email_exists($email);
    //     $email_code = md5($firstName);
    //     $verified = $this->Auth_Model->verify_reset_password_code($email, $email_code);

    //     var_dump($verified);
    // }

    public function test()
    {
        // * get param
        $param = file_get_contents("php://input");
        $param_decoded = json_decode($param, true);

        // $ip_address = $this->input->ip_address();
        $username = $param_decoded["username"];
        $password = $param_decoded["password"];

        $result = $this->Auth_Model->login($username, $password);

        var_dump($param_decoded);
        // echo $email;
        echo "Password is " . $password;
        // echo $ip_address;

        var_dump($result);

    }
}
