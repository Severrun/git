var http = require('http'); // подключение модуля работы с сетью
var fs = require('fs'); // подключение модуля работы с файловой системой
var url = require('url');

var server = http.createServer(function(req, res) { // функция обработчик HTTP запросов. req - HTTP запрос от браузера, res - ответ, формируемой нашей программой-сервером.
    var pathname = url.parse(req.url).pathname;
    if (pathname == "/registration.html")
    {
        fs.readFile('registration.html', function (err, contents) { // Чтение файла index.html. Функция будет вызвана после завершения считывания. err - информация об ошибках, contents - содержимое, которое удалось считать
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end(contents); 
        })
    }
    if (pathname == "/404.html")
    {
        fs.readFile('404.html', function (err, contents) { // Чтение файла index.html. Функция будет вызвана после завершения считывания. err - информация об ошибках, contents - содержимое, которое удалось считать
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end(contents);
        })
    }
    res.writeHead(200, {'Content-Type': 'text/html'}); // Добавляет к HTTP ответу код 200 и заголовок Content-type: text/html
    fs.readFile('index.html', function(err, contents) { // Чтение файла index.html. Функция будет вызвана после завершения считывания. err - информация об ошибках, contents - содержимое, которое удалось считать
        console.log(err); // Вывод в консоль информации об ошибках при чтении файла
        res.end(contents); // Записывает в тело HTTP ответа содержимое файла index.html и отправляет HTTP ответ.
    });
});
server.listen(8000); // наша программа будет отвечать на http запросы по адресу http://localhost:8000/
console.log('Server started');
<!--Пример комментария-->
