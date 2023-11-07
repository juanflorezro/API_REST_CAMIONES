const express = require('express')
const connect = require('./connection/connection')
const app = express()
const conductorRouter = require('./routes/gConductor')
const camionRouter = require('./routes/gCamion')
const metricaRouter = require('./routes/gMetrica')
const loginRouter = require('./routes/login/login')
const port = 3000
connect()
app.use('/conductores', conductorRouter)
app.use('/camiones', camionRouter)
app.use('/metricas', metricaRouter)
app.use('/login', loginRouter)
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`)
});
