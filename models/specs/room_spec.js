const assert = require('assert');
const Room = require('../room.js');

describe('Room' , function () {
    let room;

beforeEach(function() {
    room1 = new Room(5 , false);
    room2 = new Room(4 , true);
})

it('should have an area' , function (){
    const actual = room1.area;
    assert.strictEqual(actual, 5);
})

it('should be painted')

it('should not be painted')
});
