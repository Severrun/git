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
        contents = render(contents,"slovo","qwerty");
        res.write(sign(pathname));
        if (err)
        {
            fs.readFile('404', function (err9, data)
            { // ������ ����� registration.html. ������� ����� ������� ����� ���������� ����������. err - ���������� �� �������, contents - ����������, ������� ������� �������
                res.end(data);
            })
        }
        else{
                res.end(contents);
        }
    });

});
server.listen(8000); // ���� ��������� ����� �������� �� http ������� �� ������ http://localhost:8000/
console.log('Server started');
<!--������ �����������-->



function render(perht,perto,permen)
{
    return(perht+"").replace("${"+perto+"}",permen);
}

















