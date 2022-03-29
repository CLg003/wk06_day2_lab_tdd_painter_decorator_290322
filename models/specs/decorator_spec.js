const assert = require('assert');
const Decorator = require('../decorator.js');
const PaintCan = require('../paint_can');

describe('Decorator' , function (){
    let decorator;
    let paint1;
    let paint2;
    let paint3;

    beforeEach(function (){
        paint1 = new PaintCan(1);
        paint2 = new PaintCan(2);
        paint3 = new PaintCan(3);
        decorator = new Decorator([paint1, paint2, paint3]);
    });
    it('should have a paint stock' , function (){
        const actual = decorator.paintStock;
        assert.deepStrictEqual(actual, [paint1, paint2, paint3]);
    });

    it('should be able to add paint' , function(){
        let paint4 = new PaintCan(1);
        decorator.addPaint(paint4)
        const actual = decorator.paintStock.length;
        assert.strictEqual(actual, 4);
    });

    it('should be able to calculate total litres paint in stock', function() {
        const actual = decorator.calculatePaintInStock();
        assert.strictEqual(actual, 6);
    })
});