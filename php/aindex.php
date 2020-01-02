<?php
// header('content-type:text/html;charset=utf-8');
include "conn.php";
$conn->query('SET NAMES UTF8'); //设置字符编码
$ptype = $_POST['ptype'];
$result = $conn->query("select * from wanmeipic where ptype='$ptype'");
$wanmeidata = array();
for ($i = 0; $i < $result->num_rows; $i++) {
    $wanmeidata[$i] = $result->fetch_assoc();
}

echo json_encode($wanmeidata);
