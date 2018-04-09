const express = require('express');
const app = express();



//middleware
require('./config/middleware')(app);



//route


//router error handling
app.use((err,req,res,next) => {
  if(err) return res.status(422).send({err:err.message})
});

if(process.env.NODE_ENV === 'production'){
   //Express will serve up production assets
   //like our main.js file, or main.css file
   app.use(express.static('client/build'));
   //express will serve up the index.thml
   //if it doesn't recongize the routes
   const path = require('path');
   app.get('*', (req,res) => {
     res.sendFile(path.resolve(__dirname, 'client','build','index.html'));
   })
}


const PORT = process.env.PORT || 5000;
//listening to the server
app.listen(PORT,() => {
  console.log('booted up')
})
