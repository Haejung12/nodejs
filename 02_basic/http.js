
var http = require('http');

function alertMsg(msg, url) {

return  `
<IDOCTYPE html>
    <html>
        <head>
            <title>Alert and Prompt</title>
            <meta charset="utf-8">
            <script>
            var input = prompt('글자를 입력해주세요','힌트')
                
             
               alert("${msg}");
               //location.href = "${url}";
            </script>
        </head>
        <body>
          <h3>경고메세지를 띄어줌</h3>

        </body>
    </html>
    `;
    }


var app = http.createServer(function(request, response)  {
    var _url = request.url;
    console.log(request.url);
    response.writeHead(200);
    let alert = alertMsg("경고창에 뜨는 메시지","https://www.naver.com" );
    response.end(alert);
});
 app.listen(3000);