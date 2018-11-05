<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Master_Model extends CI_Model 
{
    function __construct() 
    {
        parent::__construct();
        $this->load->database();
        $this->load->library('Master_Library');
    }

    function TransactionError($data)
    {
        if ($data === FALSE) {
            $this->master_libary->setResponseMsg(77, 'Transaction Error', $data);
            return TRUE;
        }
        return FALSE;
    }

    function selectAllData($table)
    {
        $this->db->trans_start(); # Starting Transaction
        $this->db->trans_strict(FALSE); # See Note 01. If you wish can remove as well
        $query = $this->db->get($table);
        $this->db->trans_complete(); # Completing transaction
        if ($this->db->trans_status() === FALSE) {
            $this->db->trans_rollback();
            return false;
        } else {
            $this->db->trans_commit();
            if ($query->num_rows() > 0) {
                return $query->result();
            } else {
                return $query->result();
            }
        }
    }

    function deleteData($table, $column, $value)
    {
        $this->db->trans_start(); # Starting Transaction
        $this->db->trans_strict(FALSE); # See Note 01. If you wish can remove as well
        $this->db->where($column, $value)->delete($table);
        $this->db->trans_complete(); # Completing transaction
        if ($this->db->trans_status() === FALSE) {
            $this->db->trans_rollback();
            return false;
        } else {
            $this->db->trans_commit();
            return true;
        }
    }

    function insertData($table, $data)
    {
        $this->db->trans_start(); # Starting Transaction
        $this->db->trans_strict(FALSE); # See Note 01. If you wish can remove as well
        $this->db->set($data);
        $this->db->insert($table);
        $id = $this->db->insert_id();
        $this->db->trans_complete(); # Completing transaction
        if ($this->db->trans_status() === FALSE) {
            $this->db->trans_rollback();
            return false;
        } else {
            $this->db->trans_commit();
            return $id;
        }
    }

    function updateDataByColumn($table, $column, $value, $data)
    {
        $this->db->trans_start(); # Starting Transaction
        $this->db->trans_strict(FALSE); # See Note 01. If you wish can remove as well
        $query = $this->db->where($column, $value)->update($table, $data);
        $this->db->trans_complete(); # Completing transaction
        if ($this->db->trans_status() === FALSE) {
            $this->db->trans_rollback();
            return false;
        } else {
            $this->db->trans_commit();
            if ($query) {
                return true;
            } else {
                return null;
            }
        }
    }
}