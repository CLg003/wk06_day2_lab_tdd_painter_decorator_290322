const PaintCan = function(litres) {
    this.litres = litres;
}

PaintCan.prototype.isEmpty = function(){
    if (this.litres = 0){
        return true;
    }else{
        return false;
    }
}

PaintCan.prototype.emptyPaint = function (){
    this.litres = 0;
};

module.exports = PaintCan;