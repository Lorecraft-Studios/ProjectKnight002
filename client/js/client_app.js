console.log('Hello World from client_app.js');

let cy = cytoscape({
  container: document.getElementById('cy'),
  elements: [ // list of graph elements to start with
    { // node a
      data: { id: 'a' }
    },
    { // node b
      data: { id: 'b' }
    },
    { // edge ab
      data: { id: 'ab', source: 'a', target: 'b' }
    },
    { // edge ba
      data: { id: 'ba', source: 'b', target: 'a' }
    }

  ],
  style: [ // the stylesheet for the graph
    {
      selector: 'node',
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
        'target-arrow-shape': 'triangle'
      }
    }
  ],
  layout: {
    name: 'grid',
    rows: 1
  }
});

console.log('***cy***', cy)