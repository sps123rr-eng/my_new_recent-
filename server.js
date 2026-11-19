const express = require('express')
const path = require('path')

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/', express.static(path.join(__dirname, 'public')))
app.use('/api', require('./routes/api').route)

const PORT = process.env.PORT || 2345
app.listen(PORT, () => console.log(`server started at port ${PORT}`))