"use strict";function change(e) {var t = document.getElementById("tel_login"),n = document.getElementById("pwd_login");e.checked && ("choose1" == e.id ? (n.style.display = "none", t.style.display = "block") : (t.style.display = "none", n.style.display = "block"));}function createCode() {for (var e = document.getElementById("code_value"), t = "", n = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"], l = 0; l < 4; l++) {t += n[Math.floor(36 * Math.random())];}e.value = t, e.focus();}var flag = !1;function yanzheng() {var e = document.getElementById("code_value"),t = document.getElementById("code"),n = t.value.toUpperCase(),l = e.value;return 0 == n.length ? (e.nextElementSibling.nextElementSibling.innerHTML = "请输入验证码", e.nextElementSibling.nextElementSibling.style.visibility = "visible") : n != l ? (e.nextElementSibling.nextElementSibling.style.visibility = "visible", e.nextElementSibling.nextElementSibling.innerHTML = "验证码错误", e.nextElementSibling.nextElementSibling.style.color = "red", t.value = "", t.focus()) : (flag = !0, e.nextElementSibling.nextElementSibling.style.visibility = "hidden"), flag;}window.onload = createCode();var xmlhttp,flag2 = !1,flag3 = !1;function login3() {var e = document.getElementById("pwd_pwd").nextElementSibling,t = document.getElementById("pwd_pwd").value,n = document.getElementById("tex_tex").value;xmlhttp.open("GET", "php/password.php?tel=" + n + "&pwd=" + t, !0), xmlhttp.send(), xmlhttp.onreadystatechange = function () {4 == xmlhttp.readyState && 200 == xmlhttp.status && (0 == xmlhttp.responseText ? (e.style.visibility = "visible", e.innerHTML = "账号或密码错误", e.style.color = "red") : (e.style.visibility = "hidden", flag3 = !0));}, 1 == flag3 && 1 == flag && 1 == flag2 && (window.open("index.html"), e.style.visibility = "hidden", window.localStorage.userName = n, flag = !1);}function yanzhengshouji(e) {if (/^1[3|5|7|8|9]\d{9}$/.test(e.value)) {var t = e.value;xmlhttp.open("GET", "php/login.php?tel=" + t, !0), xmlhttp.send(), xmlhttp.onreadystatechange = function () {4 == xmlhttp.readyState && 200 == xmlhttp.status && (0 < xmlhttp.responseText.length ? (e.nextElementSibling.style.visibility = "hidden", flag2 = !0) : (e.nextElementSibling.style.visibility = "visible", e.nextElementSibling.innerHTML = "该号码未注册", e.nextElementSibling.style.color = "red"));};} else e.nextElementSibling.style.visibility = "visible", e.nextElementSibling.innerHTML = "请输入正确的11位号码", e.nextElementSibling.style.color = "red";return flag2;}xmlhttp = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");