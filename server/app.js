const express = require('express');
const path = require('path');
const app = express();


const World = require('./lib/World.js');
const worldJSON = require('./snapshots/world_data_prologue_save.json');


const myWorld = new World('prologue');
myWorld.loadWorld(worldJSON);
myWorld.getMapMatrix();



//Serve static content
app.set('port', 3000);
app.use(express.static(path.join(__dirname, '/../client')));
let server = app.listen(app.get('port'), () => {
  let port  = server.address().port;
  console.log('Serving on port ' + port);
})
