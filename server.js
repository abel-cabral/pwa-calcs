const
  express = require('express'),
  serveStatic = require('serve-static'),
  history = require('connect-history-api-fallback'),
  port = process.env.PORT || 8080

const app = express()

app.use(history())
app.use(serveStatic('./dist/pwa'))
app.listen(port)
