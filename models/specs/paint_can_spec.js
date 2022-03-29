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
})
