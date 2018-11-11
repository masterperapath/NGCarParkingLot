<?php
defined('BASEPATH') or exit('No direct script access allowed');

class Auth extends CI_Controller
{
    // $param = array();

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
    }

    public function login()
    {
        // * get param
        $param = file_get_contents("php://input");
        $param_decoded = json_decode($param, true);

        $ip_address = $this->input->ip_address();
        $username = $param_decoded["username"];
        $password = $param_decoded["password"];

        // $result = $this->Auth_Model->login();

        // var_dump($param_decoded);
        // echo $email;
        // echo $password;
        // echo $ip_address;

        print_r($this->session->all_userdata());

        if ($this->Auth_Model->login($username, $password)) {
            $session_data = array(
                'username' => $username,
                'ip_address' => $ip_address,
                'logged_in' => true,
            );
            $this->session->set_userdata($session_data);
            // redirect(base_url() . 'main/enter');
            echo 'Logged in';
        } else {
            $this->session->set_flashdata('error', 'Invalid Username and Password');
            // redirect(base_url() . 'main/login');
            echo 'Invalid Username and Password';
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
        $this->load->model('Auth_Model');
        $ret = $this->Auth_Model->register();

        if ($ret) {
            echo $ret;
            echo "<br> Register Success.";
        } else {
            echo $ret;
            echo "<br> Register Fail.";
        }
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

    public function test(){
        $email = $this->input->post('email');
        $firstName = $this->email_exists($email);
        $email_code = md5($firstName);
        $verified = $this->Auth_Model->verify_reset_password_code($email, $email_code);

        var_dump($verified);
    }
}
