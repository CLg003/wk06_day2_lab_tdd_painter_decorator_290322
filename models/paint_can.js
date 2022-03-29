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

module.exports = PaintCan;