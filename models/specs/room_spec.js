const assert = require('assert');
const Room = require('../room.js');

describe('Room' , function () {
    let room;

beforeEach(function() {
    room = new Room(5);
})

it('should have an area' , function (){
    const actual = room.area;
    assert.strictEqual(actual, 5);
})

it('should not be painted' , function (){
    const actual = room.painted;
    assert.strictEqual(actual, false)
})

it('should be able to be painted', function() {
    room.bePainted();
    const actual = room.painted;
    assert.strictEqual(actual, true);
})

});
