<?php
mysql_connect('127.0.0.1','root','root');//连接数据配置
mysql_query('set names utf8');//设置编码规则
mysql_select_db('meigou');//连接数据库
$tel=$_GET['tel'];//获取HTML
$password=$_GET['pwd'];
//echo $tel;
$sql='INSERT INTO `user` (tel,password) VALUES ("'.$tel.'","'.$password.'")';
mysql_query($sql);
if(mysql_affected_rows()>0){
    echo "ok";
}else{
    echo 'no';
}
?>