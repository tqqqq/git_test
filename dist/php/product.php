<?php
mysql_connect('127.0.0.1','root','root');//连接数据配置
mysql_query('set names utf8');//设置编码规则
mysql_select_db('meigou');//连接数据库
$src=$_GET['src'];//获取HTML
$sql='SELECT * FROM products WHERE src = "'.$src.'"';
$res=mysql_query($sql);//执行sql
$rows = array();
while($row = mysql_fetch_assoc($res)){
	$rows[] = $row;
}
$data = json_encode($rows);
echo $data;

?>