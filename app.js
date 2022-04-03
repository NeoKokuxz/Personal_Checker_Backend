const express = require('express');
const app = express();

//Routes
const userRouter = require(`./routes/users`);
const todoRouter = require(`./routes/todos`);

app.use('/users', userRouter);
app.use('/todos', todoRouter);

app.listen(3000);
