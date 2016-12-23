console.log('Hello World from client_app.js');



console.log ('***worldData***', worldData)

let elements = [];


for (let room in worldData) {
  let nodeElement = { data: {} };
  let edgeElement = { data: {} };

  nodeElement.data.id = worldData[room].roomId;
  nodeElement.data.name = worldData[room].name;
  nodeElement.data.desc = worldData[room].desc;
  elements.push(nodeElement);

  for (let dir in worldData[room].exits)
    if (worldData[room].exits[dir]) {
      edgeElement.data.source = worldData[room].roomId;
      edgeElement.data.target = worldData[room].exits[dir];
      elements.push(edgeElement);
      console.log('***an Edge Element***', edgeElement)
    }
}

console.log('***elements***', elements);



let cy = cytoscape({
  container: document.getElementById('cy'),
  elements: elements,
  style: [ // the stylesheet for the graph
    {
      selector: 'node',
      shape: 'square',
      style: {
        'background-color': '#ccc',
        'label': 'data(room)'
      }
    },
    {
      selector: 'edge',
      style: {
        'curve-style': 'bezier',
        'width': 3,
        'line-color': '#666',
        'target-arrow-color': '#666',
        'target-arrow-shape': 'triangle',
        'source-label': 'e'
      }
    }
  ],
  layout: {
    name: 'grid',
    rows: 1
  }
});

