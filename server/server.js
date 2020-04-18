const express = require('express');
const app = express();
const router = require('./route/algoroutes')
const path = require('path');


// statically serve everything in the build folder on the route '/build'
app.use('/build', express.static(path.join(__dirname, '../build')));
// serve index.html on the route '/'
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../index.html'));
});
//body parser
app.use(express.json());




// * WRITE SERVER CODE BELOW THIS

app.use('/', router);









app.listen(3000); //listens on port 3000 -> http://localhost:3000/

