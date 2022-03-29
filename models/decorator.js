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
        this.decreasePaintStock(room);
        room.painted = true;
    }
}

Decorator.prototype.decreasePaintStock = function(room) {
    let paintNeeded = room.area;
    for (let i = this.paintStock.length - 1; i >= 0; i --) {
        let paintCanLitres = this.paintStock[i].litres;
        if (paintCanLitres <= paintNeeded) {
            paintNeeded -= paintCanLitres;
            this.paintStock[i].litres = 0;
            if (paintNeeded === 0) {
                break;
            }
        } else if (paintCanLitres > paintNeeded) {
            this.paintStock[i].litres -= paintNeeded;
            paintNeeded = 0;
            break;
        }
    }
}

Decorator.prototype.removeEmptyPaintCans = function() {
    for (i = this.paintStock.length - 1; i >= 0; i --) {
        if (this.paintStock[i].litres === 0) {
            this.paintStock.splice(i, 1);
        }
    }
}

module.exports = Decorator;