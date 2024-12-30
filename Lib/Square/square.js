const { Shape } = require("../Shapes/shapes");
const fs = require('fs')

class Square {
    constructor(){
        // super(color,text,textColor);
        x = '150';
        y = '100';
        width = '160';
        height = '160';
    }
    render(){
        return (
            `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    
      <rect x=${x} y=${y} width=${width} height=${height} fill=${color} />
    
      <text x="150" y="125" font-size="60" text-anchor="middle" fill=${textColor}>${text}</text>
    
    </svg>`
    
            )
    }
}

module.exports = { Square };