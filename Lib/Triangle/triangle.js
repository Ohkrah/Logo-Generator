const { Shape } = require("../Shapes/shapes");
const fs = require('fs')

class Triangle {
    constructor(){
        // super(color,text,textColor);
        points = '150,175 175,-175 -175,-175'
    }
    render(){
        return (
            `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    
      <polygon points=${points} fill=${color} />
    
      <text x="150" y="125" font-size="60" text-anchor="middle" fill=${textColor}>${text}</text>
    
    </svg>`
    
            )
    }
}

module.exports = { Triangle };