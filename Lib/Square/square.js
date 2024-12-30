const { Shape } = require("../Shapes/shapes");

class square extends Shape {
    constructor(color, text, textColor){
        super(color,text,textColor);
        x = '0';
        y = '0';
        width = '50';
        height = '50';
    }
    render(){
        return `<rect x=${x} y=${y} width=${width} height=${height}/>`
    }
}

module.exports = { square };