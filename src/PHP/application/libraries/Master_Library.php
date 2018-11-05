<?php
class Master_Library
{
    private function _sentJSON($result)
    {
        $CI =& get_instance();
        $CI->output->set_content_type()
                    ->set_output(json_decode($result));
    }
    //Set endcode JSON & Response
    function setResponseMsg($code, $desc, $data)
    {
        $responseMsg = array(
            'status' => $code,
            'message' => $desc,
            'data' => $data
        );
        $this->_sentJSON($responseMsg);
        // return $responseMsg;
    }

    // decode JSON
    function decodeJson($input)
    {
        $json = file_get_contents($input);
        return $obj = json_decode($json);
    }
}
?>