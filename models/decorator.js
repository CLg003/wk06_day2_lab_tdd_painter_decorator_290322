const Decorator = function (paintStock) {
    this.paintStock = paintStock;
}

Decorator.prototype.addPaint = function(paintCan) {
    this.paintStock.push(paintCan);
};

Decorator.prototype.calculatePaintInStock = function() {
    let total = 0;
    for (let paintCan of this.paintStock) {
        total += paintCan.litres;
    }
    return total;
}

Decorator.prototype.calculateCanPaintRoom = function(room) {
    let paintLitres = this.calculatePaintInStock();
    if (paintLitres >= room.area) {
        return true;
    } else {
        return false;
    }
}

Decorator.prototype.paintRoom = function(room) {
    if (this.calculateCanPaintRoom(room)) {
        room.painted = true;
    }
}

module.exports = Decorator;