
const inquirer = require('inquirer');
const { Circle } = require('../Circle/circle');
const { Square } = require('../Square/square');
const { Triangle } = require('../Triangle/triangle');

class Shape {
    createSVG(renderFunction){
        fs.writeFile('logo.svg', renderFunction, (err) => err ? console.log(err) : console.log('svg made successfully')
        );
    }
    run(){
        inquirer.prompt([
            {
                type: 'input',
                name: 'shape',
                message: 'Choose a shape: triangle, circle or square. \nEnter your shape in lowercase: '
            },
            {
                type: 'input',
                name: 'color',
                message: 'Enter a color for your shape: '
            },
            {
                type: 'input',
                name: 'text',
                message: 'Enter a three letter text for your logo: '
            },
            {
                type: 'input',
                name: 'textColor',
                message: 'Enter a color for your text: '
            },
        ])
        .then(({shape,color, text, textColor}) => {
            //text conditions
            if(text.length > 3){
                throw new Error('`text` must be shorter than 3 characters');
            }

            if(text.length < 1){
                throw new Error('`text` must be at least than 1 character');
            }
            this.text = text;
            this.textColor = textColor;
            this.color = color;

            if(shape == 'circle'){
                const newCirc = new Circle();
                this.createSVG(newCirc.render())
            } else if (shape == 'square'){
                const newSqu = new Square();
                this.createSVG(newSqu.render())
            } else if (shape == 'triangle'){
                const newTri = new Triangle();
                this.createSVG(newTri.render())
            }

            console.log(`shape: ${shape}, color: ${color}, text: ${text}, textColor: ${textColor}`);
            
        })
        .catch((err) => {
            console.log(err);
            console.log('There was an issue completing your request');            
        });
    }
} 

module.exports =  Shape ;