const express = require('express');
const app = express();
require('dotenv').config();
require('./config/db')
const PORT = process.env.PORT || 5000;
const userRoute = require('./routes/userRoute');
const taskRoute = require('./routes/taskRoute');

app.use(express.json());
app.use('/api/user', userRoute)
app.use('/api/task', taskRoute)
app.get('/',(req , res)=>{
    res.send("Hello database");
});


app.listen(PORT , ()=>{
    console.log(`Server is running on http://localhost:${PORT}`); 
});