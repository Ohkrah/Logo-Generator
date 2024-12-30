const { Shape } = require("../Shapes/shapes");

class circle extends Shape {
    constructor(color, text, textColor){
        super(color,text,textColor);
        cx = '0';
        cy = '0';
        r = '50';
    }
    render(){
        return `<circle cx=${cx} cy=${cy} r=${r}/>`
    }
}

module.exports = { circle };