const World = require('./lib/World.js');
const worldJSON = require('./snapshots/world_data_prologue_save.json');

const myWorld = new World('prologue');
myWorld.loadWorld(worldJSON);
