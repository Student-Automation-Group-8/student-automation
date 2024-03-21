const express = require('express');
const cors = require('cors');

const AuthRoute = require('./routes/authRoute');
const StudentRoute = require('./routes/studentRoute');
const DepartmentRoute = require('./routes/departmentRoute');

const app = express();
app.use(cors({
    origin: '*',
    methods: 'GET, POST, PUT, PATCH, DELETE', //", OPTIONS"
    allowedHeaders: 'Content-Type, Authorization'
  }));

app.use(express.json());

app.get('/', (req, res) => { res.json({ message: "welcome group 8" }) })
app.use('/auth', AuthRoute);
app.use('/student', StudentRoute);
app.use('/department', DepartmentRoute);

const server = require('http').createServer(app);

const port = 3000;
server.listen(port, () => {
    console.log(`Server is live on port ${port}`);
});