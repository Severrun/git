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
        contents = render(contents,"slovo","qwerty");
        res.write(sign(pathname));
        if (err)
        {
            fs.readFile('404', function (err9, data)
            { // Чтение файла registration.html. Функция будет вызвана после завершения считывания. err - информация об ошибках, contents - содержимое, которое удалось считать
                res.end(data);
            })
        }
        else{
                res.end(contents);
        }
    });

});
server.listen(8000); // наша программа будет отвечать на http запросы по адресу http://localhost:8000/
console.log('Server started');
<!--Пример комментария-->



function render(perht,perto,permen)
{
    return(perht+"").replace("${"+perto+"}",permen);
}

















