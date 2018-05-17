<?php
mysql_connect('127.0.0.1','root','root');//连接数据配置
mysql_query('set names utf8');//设置编码规则
mysql_select_db('meigou');//连接数据库
$src=$_GET['src'];//获取HTML
$title_shujuku=$_GET['title_shujuku'];
$price_shujuku=$_GET['price_shujuku'];
$ower_shujuku=$_GET['ower_shujuku'];
//echo $src;
$sql='INSERT INTO cart (src,title,price,user) VALUES ("'.$src.'","'.$title_shujuku.'","'.$price_shujuku.'","'.$ower_shujuku.'")';
echo $sql;
mysql_query($sql);
if(mysql_affected_rows()>0){//如果收受影响的行数》0，说明添加成功
    echo "ok";
}else{
    echo 'no';
};
?>