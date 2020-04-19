const express = require('express');
const app = express();
const router = require('./route/algoroutes')
const path = require('path');
const cors = require('cors')


// statically serve everything in the build folder on the route '/build'
app.use('/build', express.static(path.join(__dirname, '../build')));
// serve index.html on the route '/'
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../index.html'));
});
//body parser
app.use(cors())

app.use(express.json());




// * WRITE SERVER CODE BELOW THIS

app.use('/', router);







// * ERROR HANDLER *** //
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 400,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log, errorObj.message);
  return res.status(errorObj.status).json(errorObj.message);
});




app.listen(3000, () => {
  console.log('SERVER UP AND RUNNING!!!')
}); //listens on port 3000 -> http://localhost:3000/

