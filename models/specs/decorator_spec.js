const assert = require('assert');
const Decorator = require('../decorator.js');
const PaintCan = require('../paint_can');
const Room = require('../room.js');

describe('Decorator' , function (){
    let decorator;
    let paint1;
    let paint2;
    let paint3;
    let room1;
    let room2;
    let room3;

    beforeEach(function (){
        paint1 = new PaintCan(1);
        paint2 = new PaintCan(2);
        paint3 = new PaintCan(3);
        decorator = new Decorator([paint1, paint2, paint3]);
        room1 = new Room(6);
        room2 = new Room(10);
        room3 = new Room(4);
    });

    it('should have a paint stock', function() {
        const actual = decorator.paintStock;
        assert.deepStrictEqual(actual, [paint1, paint2, paint3]);
    });

    it('should be able to add paint', function() {
        let paint4 = new PaintCan(1);
        decorator.addPaint(paint4)
        const actual = decorator.paintStock.length;
        assert.strictEqual(actual, 4);
    });

    it('should be able to calculate total litres paint in stock', function() {
        const actual = decorator.calculatePaintInStock();
        assert.strictEqual(actual, 6);
    })

    it ('should check can paint room', function() {
        const actual = decorator.calculateCanPaintRoom(room1);
        assert.strictEqual(actual, true);
    })
    
    it ('should check cannot paint room', function() {
        const actual = decorator.calculateCanPaintRoom(room2);
        assert.strictEqual(actual, false);
    })

    it('should be able to paint room', function() {
        decorator.paintRoom(room1);
        const actual = room1.painted;
        assert.strictEqual(actual, true);
    })

    it('should not be able to paint room', function() {
        decorator.paintRoom(room2);
        const actual = room1.painted;
        assert.strictEqual(actual, false);
    })

    it('should be able to decrease paint stock when painting room', function() {
        decorator.paintRoom(room3);
        const actual = decorator.calculatePaintInStock();
        assert.deepStrictEqual(actual, 2);
    })

    it('should be able to remove empty paint cans from stock', function() {
        decorator.paintRoom(room3);
        decorator.removeEmptyPaintCans();
        const actual1 = decorator.paintStock;
        assert.deepStrictEqual(actual1, [paint1, paint2])
        const actual2 = decorator.calculatePaintInStock();
        assert.strictEqual(actual2, 2);
    })
});