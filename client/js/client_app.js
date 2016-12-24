console.log('Hello World from client_app.js');


let nodeElements = [];
let edgeElements = [];


for (let room in worldData) {
  let nodeElement = { data: {} };
  let edgeElement = { data: {} };

  nodeElement.data.id = worldData[room].roomId;
  nodeElement.data.name = worldData[room].name;
  nodeElement.data.desc = worldData[room].desc;
  nodeElements.push(nodeElement);

  for (let dir in worldData[room].exits)
    if (worldData[room].exits[dir]) {
      edgeElement = { data: {} }
      let sourceRoomId = worldData[room].roomId;
      let targetRoomId = worldData[room].exits[dir];
      edgeElement.data.id = sourceRoomId + '->' + targetRoomId;
      edgeElement.data.source = sourceRoomId;
      edgeElement.data.target = targetRoomId;
      edgeElements.push(edgeElement);
    }
}
edgeElements.forEach( (edge) => {
})

let elements = nodeElements.concat(edgeElements);



let cy = cytoscape({
  container: document.getElementById('cy'),
  elements: nodeElements,
  style: [ // the stylesheet for the graph
    {
      selector: 'node',
      shape: 'square',
      style: {
        'background-color': '#ccc',
        'label': 'data(id)'
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
      }
    }
  ],
  layout: {
    name: 'grid',
    rows: 1
  }
});
cy.add(edgeElements);




console.log('***cy.json***', cy.json())
