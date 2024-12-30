const { Shape } = require("../Shapes/shapes");
const fs = require('fs')

class Circle {
    constructor(){
        // super(color,text,textColor);
        cx = '150';
        cy = '100';
        r = '80';
    }
    render(){
        return (
        `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

  <circle cx=${cx} cy=${cy} r=${r} fill=${color} />

  <text x="150" y="125" font-size="60" text-anchor="middle" fill=${textColor}>${text}</text>

</svg>`

        )
    }
}

module.exports = { Circle };