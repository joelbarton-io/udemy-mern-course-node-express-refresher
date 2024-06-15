const http = require('http')

const server = http.createServer((req, res) => {
  console.log('Incoming request')
  console.log(req.method)

  if (req.method === 'POST') {
    let body = ''
    req.on('end', () => {
      const userName = body.split('=')[1]
      res.end(`<h1>${userName}</h1>`)
    })

    req.on('data', (chunk) => {
      body += chunk
    })
  } else {
    res.setHeader('Content-Type', 'text/html')
    return res.end(
      '<form method="post"><input type="text" name="username"/><button type="submit">Create User</button></form>'
    )
  }
})

server.listen(5001)
