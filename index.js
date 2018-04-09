const express = require('express');
const app = express();



//middleware
require('./config/middleware')(app);



//route


//router error handling
app.use((err,req,res,next) => {
  if(err) return res.status(422).send({err:err.message})
});

if (['production'].includes(process.env.NODE_ENV)) {
  app.use(express.static('client/build'));

  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve('client', 'build', 'index.html'));
  });
}


const PORT = process.env.PORT || 5000;
//listening to the server
app.listen(PORT,() => {
  console.log('booted up')
})
