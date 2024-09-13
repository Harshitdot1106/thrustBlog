import express from 'express';
import cors from 'cors'
import connectDB from './DB/connection';
import app from './app.js'
import loginroute from './Routes/login.js';
import postsrouter from './Routes/postsshow.js';
import newpostRouter from './Routes/newpost.js';
import delrouter from './delete.js';
const PORT=5000;
app.use('/api', loginroute);
app.use('/api',postsrouter)
app.use('/api',newpostRouter);
app.use('/api',delrouter);
app.listen(PORT,async ()=>{
    try{
      await connectDB();
      console.log("the server is running");
    }
    catch(err){
        console.log(`the server has a err ${err}`);
    }
    
})