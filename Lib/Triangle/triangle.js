const { Shape } = require("../Shapes/shapes");

class triangle extends Shape {
    constructor(color, text, textColor){
        super(color,text,textColor);
        points = '0,25 25,-25 -25,-25'
    }
    render(){
        return `<polygon points=${points}/>`
    }
}

module.exports = { triangle };