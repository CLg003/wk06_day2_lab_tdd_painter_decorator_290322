const Decorator = function (paintStock){
    this.paintStock = paintStock;

}

Decorator.prototype.addPaint = function(paintCan){
    this.paintStock.push(paintCan);
};

Decorator.prototype.calculatePaintInStock = function() {
    let total = 0;
    for (let paintCan of this.paintStock) {
        total += paintCan.litres;
    }
    return total;
}

module.exports = Decorator;