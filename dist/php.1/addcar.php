<?php
	mysql_connect('127.0.0.1','root','root');//连接数据库(ip,用户名、密码)
	mysql_query('set names utf8');//编码规则
	mysql_select_db('meigou');//连接数据库的名称
	$product= $_GET['user'];
	//$go_count = $_GET['go_count'];
	$sql='SELECT * FROM cart WHERE user="'.$product.'"';//sql语句 WHERE class='kouhong'
	//echo $sql;
	$res=mysql_query($sql);//执行sql
	/*$arr=mysql_fetch_array($res);//返回一条数据结果*/
	$rows = array();
	while($row = mysql_fetch_assoc($res)){//遍历每一条数据赋值给变量
	$rows[]=$row;//每一个遍历的值放入数组
	}
	$data=json_encode($rows);//数据转换成对象
	echo $data;
	
?>