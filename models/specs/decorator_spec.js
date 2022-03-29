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
});