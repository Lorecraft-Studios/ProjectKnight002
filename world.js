class World {
  constructor(name) {
    this.dataStore = {};
    this.name = name;
    this.count = 0;
  }

  _roomNode {
    return {
      roomId: null,
      name: null,
      desc: null,
      contents: [],
      exits: {
        n: null,
        s: null,
        e: null,
        w: null,
        u: null,
        d: null
    }
  }

  addRoom(name, description) {
    if (typeof name !== 'String') {
      console.log('ERROR: incorrect type passed through addRoom function');
      return
    }
    let roomId = this.name + ':' + this.count;
    let room = this.roomNode();

    room.name = name;
    room.description = description;
    this.dataStore[roomId] = room;
    this.count++;
    return this.dataStore[roomId];
  }


  editRoomName(roomId, name) {
    this.dataStore[roomId].name = name;
  }

  editRoomDesc(roomId, desc) {
    this.dataStore[roomId].desc = desc;
  }

  addRoomContent(roomId, item) {
    this.dataStore[roomId].content.push(item)
    return this.dataStore[roomId];
  }

  removeRoomContent(roomId, item) {
  }

  addRoomConnection(fromRoomId, toRoomId, direction) {
    switch (direction)  {
      case 'n':
        this.dataStore[fromRoomId].exits.n = toRoomId;
        this.dataSTore[toRoomId].exits.s = fromRoomId;
        break;
      case 's':
        this.dataStore[fromRoomId].exits.s = toRoomId;
        this.dataSTore[toRoomId].exits.n = fromRoomId;
        break;
      case 'e':
        this.dataStore[fromRoomId].exits.e = toRoomId;
        this.dataSTore[toRoomId].exits.w = fromRoomId;
        break
      case 'w':
        this.dataStore[fromRoomId].exits.w = toRoomId;
        this.dataSTore[toRoomId].exits.e = fromRoomId;
        break
      case 'u':
        this.dataStore[fromRoomId].exits.u = toRoomId;
        this.dataSTore[toRoomId].exits.d = fromRoomId;
        break
      case 'd':
        this.dataStore[fromRoomId].exits.d = toRoomId;
        this.dataSTore[toRoomId].exits.u = fromRoomId;
        break
    }
  }

  removeRoomConnection(roomId, direction) {
    let oppositeRoomId = this.dataStore[roomId][exits][direction];
    this.dataStore[roomId][exits][direction] = null;
    this.dataStore[oppositeRoomId][exits][direction] = null;
  }

  getRoom(roomId) {
    return this.dataStore[roomId];
  }

  getWorld() {
    return this.dataStore;
  }
}
