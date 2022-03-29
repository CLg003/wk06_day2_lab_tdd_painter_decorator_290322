const assert = require('assert');
const PaintCan = require('../paint_can.js');

describe('PaintCan', function() {
    let paintCan;

    beforeEach(function() {
        paintCan = new PaintCan(3);
    })

    it('should have a number of litres', function() {
        const actual = paintCan.litres;
        assert.strictEqual(actual, 3);

    
    })

    it ('should be able to check if empty' , function(){
        const actual = paintCan.isEmpty(); 
        assert.strictEqual(actual, false);

    });

    it ('should be able to empty itself' , function(){
        paintCan.emptyPaint();
        const actual = paintCan.litres;
        assert.strictEqual(actual, 0);
    });


});
