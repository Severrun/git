var http = require('http'); // ����������� ������ ������ � �����
var fs = require('fs'); // ����������� ������ ������ � �������� ��������
var url = require('url');

var server = http.createServer(function(req, res) { // ������� ���������� HTTP ��������. req - HTTP ������ �� ��������, res - �����, ����������� ����� ����������-��������.
    var pathname = url.parse(req.url).pathname;
    if (pathname == "/registration.html")
    {
        fs.readFile('registration.html', function (err, contents) { // ������ ����� index.html. ������� ����� ������� ����� ���������� ����������. err - ���������� �� �������, contents - ����������, ������� ������� �������
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end(contents); 
        })
    }
    if (pathname == "/404.html")
    {
        fs.readFile('404.html', function (err, contents) { // ������ ����� index.html. ������� ����� ������� ����� ���������� ����������. err - ���������� �� �������, contents - ����������, ������� ������� �������
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end(contents);
        })
    }
    res.writeHead(200, {'Content-Type': 'text/html'}); // ��������� � HTTP ������ ��� 200 � ��������� Content-type: text/html
    fs.readFile('index.html', function(err, contents) { // ������ ����� index.html. ������� ����� ������� ����� ���������� ����������. err - ���������� �� �������, contents - ����������, ������� ������� �������
        console.log(err); // ����� � ������� ���������� �� ������� ��� ������ �����
        res.end(contents); // ���������� � ���� HTTP ������ ���������� ����� index.html � ���������� HTTP �����.
    });
});
server.listen(8000); // ���� ��������� ����� �������� �� http ������� �� ������ http://localhost:8000/
console.log('Server started');
<!--������ �����������-->
