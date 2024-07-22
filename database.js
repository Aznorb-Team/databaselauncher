const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: "schoolsplay.ru",
  user: "u1911009_Quadron",
  database: "u1911009_schoolsplay",
  password: "xV7iF5wU4zeD9hE0"
});
 connection.connect(function(err){
    let res = document.getElementById('message');
    if (err) {
        res.innerHTML = err;
      return console.error("Ошибка: " + err.message);
    }
    else{
        res.innerHTML = "Подключение к серверу MySQL успешно установлено";
      console.log("Подключение к серверу MySQL успешно установлено");
    }
 });