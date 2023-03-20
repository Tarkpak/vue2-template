const http = require('http');
const fs = require('fs');

// 创建 HTTP 服务器
const server = http.createServer((req, res) => {
  const filePath = './data.txt';

  // 设置头部信息
  res.setHeader('Content-Type', 'text/event-stream');
  res.setHeader('Cache-Control', 'no-cache');
  res.setHeader('Connection', 'keep-alive');

  // 定时读取文件并将数据发送给客户端
  const timerId = setInterval(() => {
    fs.readFile(filePath, (err, data) => {
      if (err) {
        res.statusCode = 500;
        console.log(err)
        res.end();
        clearInterval(timerId);
        return;
      }
      res.write(`data: ${data.toString()}\n\n`);
    });
  }, 1000);

  // 监听客户端请求结束事件
  req.on('end', () => {
    clearInterval(timerId);
  });
});

server.listen(3001, () => {
  console.log('Server listening on port 3001');
});
