const express= require('express');
const app= express();
//const db= require('./database/database');
const db= require('./models')
const userRoutes= require('./routes/Users/user');

db.sequelize.sync()
.then((con)=>console.log('Database connected succesfully'))
.catch(err=>console.log('Not connected '));

app.use('/user', userRoutes);

app.get('/', (req, res)=> {
    res.status(200).send('express server is up');
});



app.listen(5000, ()=>console.log('BMES server running on 5000'));