<?php
defined('BASEPATH') or exit('No direct script access allowed');

class Auth_Model extends CI_Model
{

    private $dateTimeFormat;

    public function __construct()
    {
        parent::__construct();
        $this->load->model('Master_Model');
        $this->load->library('Master_Library');
        $this->load->database();
        date_default_timezone_set('Asia/Bangkok');
        $this->dateTimeFormat = "Y-m-d H:i:s";
    }

    public function register()
    {
        // * json for test
        $s = '[{
                 "username"    : "a",
                 "email"       : "a@mail.com",
                 "password"    : "1234",
                 "created_date": "",
                 "firstName"   : "yuttapichai",
                 "lastName"    : "obmalee",
                 "phone"       : "0901236722",
                 "licensePlate": "กก 1234 โอลิมปัส"
            },
            {
                "username": "b",
                "email": "b@mail.com",
                "password": "1234",
                "created_date": "",
                "firstName": "yut",
                "lastName": "obm",
                "phone": "0111111111",
                "licensePlate": "ฟข 1111 โอลิมปัส"
              }    ]';

        // * get param
        $content = file_get_contents("php://input");
        $data = json_decode($content, true);

        // * new date and time
        $now = new DateTime(date($this->dateTimeFormat));

        // * assign dateTime value to data.created_date
        $data["created_date"] = $now->format('Y-m-d H:i:s');

        // * show value
        // var_dump($data["created_date"]);

        // ! delete all records in database
        // return $this->db->empty_table('user');

        // * Password Encrypt
        $data["password"] = md5($data["password"]);

        return $this->db->insert('user', $data);
    }

    public function check_if_username_exists($username)
    {
        $this->db->where('username', $username);
        $result = $this->db->get('user');

        if ($result->num_rows() > 0) {
            return false; // * username taken
        } else {
            return true; // * username can reg'd
        }
    }

    public function login($username, $password)
    {
        // $sql = "select userID, firstName, lastName, email, phone, password from user where email = '{$username}' limit 1";

        $this->db->where('username', $username);
        // $this->db->where('password', $password);
        $query = $this->db->get('user'); //SELECT * FROM users WHERE username = '$username' AND password = '$password'

        $logged_in = $this->_resolve_user_login($username, $password);
        // return $logged_in;
        if ($query->num_rows() > 0) {
            // echo 'if statement work '.$logged_in;
            if ($logged_in) {
                return true;
            } else {
                return false;
            }            
        } else {
            // echo 'else work'.$logged_in;
            return false;
        }

        

        // $result = $this->db->query($query);
        // $row = $result->row();

        // if ($result->num_rows() === 1) {
        //     if ($row->password === $password) {
        //         // * authenticated, now update the user's session
        //         $session_data = array(
        //             'userID' => $row->userID,
        //             'firstName' => $row->firstName,
        //             'lastName' => $row->lastName,
        //             'email' => $row->email,
        //             'phone' => $row->phone
        //         );
        //         $this->set_session($session_data);
        //         return 'logged_in';
        //     } else {
        //         return 'incorrect_password';
        //     }
        // } else {
        //     return 'email not found';
        // }

        // return $row;
    }

    public function set_session($session_data)
    {
        $sess_data = array(
            'userID' => $session_data["userID"],
            'firstName' => $session_data["firstName"],
            'lastName' => $session_data["lastName"],
            'email' => $session_data["email"],
            'phone' => $session_data["phone"],
            'logged_in' => 1,
        );

        $this->session->set_userdata($sess_data);
    }

    public function _resolve_user_login($username, $password){
        $this->db->where('username', $username);
        $hash = $this->db->get('user')->row('password');
        return $this->_verify_password_hash($password, $hash);
        // return "555555555555555";
    }

    public function _verify_password_hash($password, $hash){
        return password_verify($password, $hash);
    }

    public function email_exists($email){
        $this->db->where('email', $email);
        $query = $this->db->get('user');

        return ($query->num_rows() > 0 && $query->row('email')) ? $query->row('firstName') : false;
        // return $query;
    }

    public function verify_reset_password_code ($email, $code){
        $this->db->where('email', $email);
        $query = $this->db->get('user');
        // var_dump($query->row('email'));
        
        var_dump($query->num_rows() > 0);
        
        if ($query->num_rows() > 0) {
            return ($code == md5($query->row('firstName')) ? true : false);
        } else {
            return false;
        }
    }

    public function update_password(){
        $email = $this->input->post('email');
        $password = md5($this->input->post('password'));
        $sql = "UPDATE user SET password = '{$password}' WHERE email = '{$email}' LIMIT 1";
        $this->db->query($sql);

        if ($this->db->affected_rows() === 1) {
            return true;
        } else {
            return false;
        }
    }
}
