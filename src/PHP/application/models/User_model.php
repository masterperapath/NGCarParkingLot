<?php
defined('BASEPATH') or exit('No direct script access allowed');

class User_Model extends CI_Model
{
    public function __construct()
    {
        parent::__construct();
        // $this->load->model('Master_Model');
        $this->load->database();
    }

    // function updateData($table, $column1, $value1, $column2, $value2, $data)
    public function updateData($table, $column1, $value1, $column2, $value2, $data)
    {
        $this->db->trans_start(); # Starting Transaction
        $this->db->trans_strict(false); # See Note 01. If you wish can remove as well
        $query = $this->db->where($column1, $value1)->where($column2, $value2)->update($table, $data); //->query(' WHERE '.$column1.' = '.$value1.' AND '.$column2.' = '.$value2);
        $this->db->trans_complete(); # Completing transaction
        if ($this->db->trans_status() === false) {
            $this->db->trans_rollback();
            return false;
        } else {
            $this->db->trans_commit();
            if ($query) {
                return true;
            } else {
                return false;
            }
        }
    }

    public function getAllUser()
    {
        $query = $this->db->get('customer');
        $row = $query->result_array();
        $json = json_encode($row);
        if ($json === false) {
            // Avoid echo of empty string (which is invalid JSON), and
            // JSONify the error message instead:
            $json = json_encode(array("jsonError", json_last_error_msg()));
            if ($json === false) {
                // This should not happen, but we go all the way now:
                $json = '{"jsonError": "unknown"}';
                // echo "fail";
            }
            // Set HTTP response status code to: 500 - Internal Server Error
            http_response_code(500);
        }
        return $json;
    }

    public $client_service = "frontend-client";
    public $auth_key = "simplerestapi";
    public function check_auth_client()
    {
        $client_service = $this->input->get_request_header('Client-Service', true);
        $auth_key = $this->input->get_request_header('Auth-Key', true);

        if ($client_service == $this->client_service && $auth_key == $this->auth_key) {
            return true;
        } else {
            return json_output(401, array('status' => 401, 'message' => 'Unauthorized.'));
        }
    }
    public function login($username, $password)
    {
        $q = $this->db->select('password,id')->from('users')->where('username', $username)->get()->row();

        if ($q == "") {
            return array('status' => 204, 'message' => 'Username not found.');
        } else {
            $hashed_password = $q->password;
            $id = $q->id;
            echo $hashed_password . " " . $password;
            //exit;
            if (hash_equals($hashed_password, crypt($password, $hashed_password))) {
                $last_login = date('Y-m-d H:i:s');
                $token = crypt(substr(md5(rand()), 0, 7));
                $expired_at = date("Y-m-d H:i:s", strtotime('+12 hours'));
                $this->db->trans_start();
                $this->db->where('id', $id)->update('users', array('last_login' => $last_login));
                $this->db->insert('users_authentication', array('users_id' => $id, 'token' => $token, 'expired_at' => $expired_at));
                if ($this->db->trans_status() === false) {
                    $this->db->trans_rollback();
                    return array('status' => 500, 'message' => 'Internal server error.');
                } else {
                    $this->db->trans_commit();
                    return array('status' => 200, 'message' => 'Successfully login.', 'id' => $id, 'token' => $token);
                }
            } else {
                echo "Wrong password";
                exit();
                return array('status' => 204, 'message' => 'Wrong password.');
            }
        }
    }
    public function logout()
    {
        $users_id = $this->input->get_request_header('User-ID', true);
        $token = $this->input->get_request_header('Authorization', true);
        $this->db->where('users_id', $users_id)->where('token', $token)->delete('users_authentication');
        return array('status' => 200, 'message' => 'Successfully logout.');
    }
    public function auth()
    {
        $users_id = $this->input->get_request_header('User-ID', true);
        $token = $this->input->get_request_header('Authorization', true);
        $q = $this->db->select('expired_at')->from('users_authentication')->where('users_id', $users_id)->where('token', $token)->get()->row();
        if ($q == "") {
            return json_output(401, array('status' => 401, 'message' => 'Unauthorized.'));
        } else {
            if ($q->expired_at < date('Y-m-d H:i:s')) {
                return json_output(401, array('status' => 401, 'message' => 'Your session has been expired.'));
            } else {
                $updated_at = date('Y-m-d H:i:s');
                $expired_at = date("Y-m-d H:i:s", strtotime('+12 hours'));
                $this->db->where('users_id', $users_id)->where('token', $token)->update('users_authentication', array('expired_at' => $expired_at, 'updated_at' => $updated_at));
                return array('status' => 200, 'message' => 'Authorized.');
            }
        }
    }
}
