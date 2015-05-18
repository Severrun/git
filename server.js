var http = require('http'); // подключение модуля работы с сетью
var fs = require('fs'); // подключение модуля работы с файловой системой
var url = require('url');
var sign = require('./signin');
var server = http.createServer(function(req, res) { // функция обработчик HTTP запросов. req - HTTP запрос от браузера, res - ответ, формируемой нашей программой-сервером.
    var pathname = url.parse(req.url).pathname.slice(1);
    if (pathname == '') pathname = 'index';
    console.log(pathname);
    fs.readFile(pathname+'.html', function (err, contents) { // Чтение файла registration.html. Функция будет вызвана после завершения считывания. err - информация об ошибках, contents - содержимое, которое удалось считать
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(sign(pathname));
        if (err)
        {
            fs.readFile('404.html', function (err9, data)
            { // Чтение файла registration.html. Функция будет вызвана после завершения считывания. err - информация об ошибках, contents - содержимое, которое удалось считать
                res.end(data);
            })
        }
        else{
                res.end(contents);
        }
    });
/*  res.writeHead(200, {'Content-Type': 'text/html'}); // Добавляет к HTTP ответу код 200 и заголовок Content-type: text/html
    fs.readFile('index.html', function(err, contents) { // Чтение файла index.html. Функция будет вызвана после завершения считывания. err - информация об ошибках, contents - содержимое, которое удалось считать
        console.log(err); // Вывод в консоль информации об ошибках при чтении файла
        res.end(contents); // Записывает в тело HTTP ответа содержимое файла index.html и отправляет HTTP ответ.
    });*/
});
server.listen(8000); // наша программа будет отвечать на http запросы по адресу http://localhost:8000/
console.log('Server started');
<!--Пример комментария-->
