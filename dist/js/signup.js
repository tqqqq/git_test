"use strict";function showp(e) {var t = e.nextElementSibling.nextElementSibling;t.classList.add("showp"), t.classList.remove("hiddenp");}function hiddenp(e) {var t = document.getElementById("form").getElementsByTagName("span");tel1(e, t), password0(e, t), password1(e, t);}function tel1(e, t) {if ("tel" == e.id) {if ("" == e.value) (n = e.nextElementSibling.nextElementSibling).classList.add("hiddenp"), t[0].classList.add("span");else if (/^1[3|5|7|8|9]\d{9}$/.test(e.value)) {(n = e.nextElementSibling.nextElementSibling).classList.add("hiddenp"), t[0].innerHTML = "√", t[0].classList.add("true"), t[0].classList.remove("red"), console.log("成功");var s = e.value;console.log(s), xmlhttp.open("GET", "php/userlook.php?tel=" + s, !0), xmlhttp.send(), xmlhttp.onreadystatechange = function () {if (4 == xmlhttp.readyState && 200 == xmlhttp.status) {var e = xmlhttp.responseText;0 < e.length ? (n.classList.add("showp"), n.classList.remove("hiddenp"), n.style.color = "red", n.innerHTML = e + "已被注册", t[0].innerHTML = "!", t[0].classList.add("true"), t[0].classList.add("red")) : (n.classList.remove("showp"), n.classList.add("hiddenp"), t[0].innerHTML = "√", t[0].classList.add("true"), t[0].classList.remove("red"));}};} else {var n;(n = e.nextElementSibling.nextElementSibling).classList.remove("hiddenp"), n.classList.add("showp"), n.classList.add("red"), n.innerHTML = "请输入11位手机号码", t[0].innerHTML = "!", t[0].classList.add("true"), t[0].classList.add("red");}}}function password0(e, t) {if ("pwd" == e.id) {if ("" == e.value) (s = e.nextElementSibling.nextElementSibling).classList.add("hiddenp"), t[2].classList.add("span");else if (/^(?!^\\d+$)(?!^[a-zA-Z]+$)(?!^[_#@]+$).{8,}$/.test(e.value)) {(s = e.nextElementSibling.nextElementSibling).classList.add("hiddenp"), t[2].classList.remove("red"), t[2].innerHTML = "√", t[2].classList.add("true");} else {var s;(s = e.nextElementSibling.nextElementSibling).classList.remove("hiddenp"), s.classList.add("showp"), t[2].innerHTML = "!", t[2].classList.add("true");}}}function password1(e, t) {var s;"pwd_con" == e.id && (e.value == txt_txt[2].value && 0 != e.value.length ? ((s = e.nextElementSibling.nextElementSibling).classList.add("hiddenp"), t[3].innerHTML = "√", t[3].classList.remove("red"), t[3].classList.add("true")) : ((s = e.nextElementSibling.nextElementSibling).classList.remove("hiddenp"), t[3].innerHTML = "!", t[3].classList.add("error"), t[3].classList.remove("true"), t[3].classList.remove("red"), s.classList.add("showp"), s.innerHTML = "两次密码不同"));}var xmlhttp,txt_txt = document.getElementsByClassName("txt_txt"),p_txt = document.getElementsByClassName("p_txt");function login_ajax(e) {for (var t = e.parentNode, s = t.getElementsByClassName("txt_txt"), n = t.getElementsByClassName("p_txt"), l = t.getElementsByTagName("span"), i = 0; i < s.length; i++) {"" == s[i].value && (n[i].classList.add("showp"), n[i].classList.add("red"), l[i].classList.add("true"), l[i].classList.add("red"), n[i].classList.add("error"), l[i].classList.add("error"));}if ("√" == l[0].innerHTML && "√" == l[2].innerHTML && "√" == l[3].innerHTML) {var a = s[0].value,d = s[2].value;xmlhttp.open("GET", "php/signup.php?tel=" + a + "&pwd=" + d, !0), xmlhttp.send(), xmlhttp.onreadystatechange = function () {if (4 == xmlhttp.readyState && 200 == xmlhttp.status) {xmlhttp.responseText;window.open("login.html");}};}}xmlhttp = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");