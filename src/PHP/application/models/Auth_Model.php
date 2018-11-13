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

    public function register($data)
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
              },
              {
                "username": "nuvola10",
                "email": "nuvola10@hotmail.co.th",
                "password": "#0901236722",
                "created_date": "",
                "firstName": "ยุทธพิชัยย",
                "lastName": "อบมาลี",
                "phone": "0901236722",
                "licensePlate": "บฉ 9226 ฉช"
              }    ]';

        // * show value
        // var_dump($data["created_date"]);

        // ! delete all records in database
        // return $this->db->empty_table('user');
        // $this->db->trans_start(); # Starting Transaction
        // $this->db->trans_strict(false); # See Note 01. If you wish can remove as well
        // $this->db->insert('user', $data);
        // $this->db->trans_complete();

        // if ($this->db->trans_status() === FALSE) {
        //     # Something went wrong.
        //     $this->db->trans_rollback();
        //     return FALSE;
        // }
        // else {
        //     # Everything is Perfect.
        //     # Committing data to the database.
        //     $this->db->trans_commit();
        //     return TRUE;
        // }

        $username = $data['username'];
        $password = $data['password'];
        $email = $data['email'];

        $insertData = array(
            'username' => $username,
            'password' => $password,
            'email' => $email
        );
        $this->db->insert($insertData);
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

        // $password = md5($password);
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

    public function _resolve_user_login($username, $password)
    {
        $this->db->where('username', $username);
        $hash = $this->db->get('user')->row('password');
        return $this->_verify_password_hash($password, $hash);
        // return $password;
    }

    public function _verify_password_hash($password, $hash)
    {
        if ($password === $hash) {
            return true;
        } else {
            return false;
        }
        // return password_verify($password, $hash);
    }

    public function email_exists($email)
    {
        $this->db->where('email', $email);
        $query = $this->db->get('user');

        return ($query->num_rows() > 0) ? true : false;
        // return $query;
    }

    public function verify_reset_password_code($email, $code)
    {
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

    public function updatePassword($userID, $password)
    {

        $password = md5($password);
        $sql = "UPDATE user SET password = '{$password}' WHERE userID = '{$userID}'";
        $this->db->query($sql);

        if ($this->db->affected_rows() > 0) {
            return true;
        } else {
            return false;
        }
    }

    public function getCurrentPassword($userID)
    {
        // $query = $this->db->where('userID', $userID)->get('user');
        $this->db->where('userID', $userID);
        $query = $this->db->get('user');
        if ($query->num_rows() > 0) {
            return $query->row('password');
        } else {
            return 'Invalid current password.';
        }
        // return $query->row('password');
        // return $userID;
    }

    public function test()
    {
        echo "555";
    }
}
