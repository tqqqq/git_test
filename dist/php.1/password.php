<?php
mysql_connect('127.0.0.1','root','root');//连接数据配置
mysql_query('set names utf8');//设置编码规则
mysql_select_db('meigou');//连接数据库
$tel=$_GET['tel'];//获取HTML
$pwd=$_GET['pwd'];//获取密码
/*echo $tel;
echo $pwd;*/
//$sql='SELECT * FROM `user`';
$sql='SELECT * FROM `user` WHERE tel="'.$tel.'" AND password="'.$pwd.'"';
//echo $sql;
//$sql='SELECT * FROM `user` WHERE tel="'.$tel.'"';
$res=mysql_query($sql);//执行sql
$arr=mysql_fetch_array($res);//返回一条数据结果
if(!$arr){
    echo '0';
}else{
   echo '1';
}
?>