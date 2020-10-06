const express = require('express');
const mongoose = require('mongoose');
const url = 'mongodb://localhost/BasicCrudDB'
const port = 9000

const app = express();
app.use(express.json())

app.listen(port, () => {
    console.log("Server started on port", port)
})

mongoose.connect(url, { useNewUrlParser: true })
const con = mongoose.connection

con.on('open', () => {
    console.log("Connected to mongoose", url);
})

const employeesRoutes = require('./routes/employees')
app.use('/employees', employeesRoutes)