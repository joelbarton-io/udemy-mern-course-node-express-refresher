const { app } = require('./app')

app.use((req, res, next) => {
  console.log(req.method)
  console.log(res.setHeader('Content-Type', /application/))
})
