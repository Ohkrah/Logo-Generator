const { shape } = require("../Shapes/shapes");

class circle extends shape {
    constructor(color, text, textColor){
        super(color,text);
        this.textColor = textColor;
        cx = 0;
        cy = 0;
        r = 50;
    }
    setTextColor(textColor){
        this.textColor = textColor;
    }
}

module.exports = { circle };