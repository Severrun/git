var http = require('http'); // ����������� ������ ������ � �����
var fs = require('fs'); // ����������� ������ ������ � �������� ��������
var url = require('url');
var sign = require('./signin');
var server = http.createServer(function(req, res) { // ������� ���������� HTTP ��������. req - HTTP ������ �� ��������, res - �����, ����������� ����� ����������-��������.
    var pathname = url.parse(req.url).pathname.slice(1);
    if (pathname == '') pathname = 'index';
    console.log(pathname);
    fs.readFile(pathname+'.html', function (err, contents) { // ������ ����� registration.html. ������� ����� ������� ����� ���������� ����������. err - ���������� �� �������, contents - ����������, ������� ������� �������
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(sign(pathname));
        if (err)
        {
            fs.readFile('404.html', function (err9, data)
            { // ������ ����� registration.html. ������� ����� ������� ����� ���������� ����������. err - ���������� �� �������, contents - ����������, ������� ������� �������
                res.end(data);
            })
        }
        else{
                res.end(contents);
        }
    });
/*  res.writeHead(200, {'Content-Type': 'text/html'}); // ��������� � HTTP ������ ��� 200 � ��������� Content-type: text/html
    fs.readFile('index.html', function(err, contents) { // ������ ����� index.html. ������� ����� ������� ����� ���������� ����������. err - ���������� �� �������, contents - ����������, ������� ������� �������
        console.log(err); // ����� � ������� ���������� �� ������� ��� ������ �����
        res.end(contents); // ���������� � ���� HTTP ������ ���������� ����� index.html � ���������� HTTP �����.
    });*/
});
server.listen(8000); // ���� ��������� ����� �������� �� http ������� �� ������ http://localhost:8000/
console.log('Server started');
<!--������ �����������-->
