
const inquirer = require('inquirer');

class Shape {
    constructor(color, text, textColor) {

        //text conditions
        if(text.length > 3){
            throw new Error('`text` must be shorter than 3 characters');
        }

        if(text.length < 1){
            throw new Error('`text` must be at least than 1 character');
        }
    }
    run(){
        inquirer.prompt([
            {
                type: 'input',
                name: 'shape',
                message: 'Enter a shape in lowercase: '
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
            this.text = text;
            this.textColor = textColor;
            this.color = color;

            if(shape !== 'square' || 'circle' || 'triangle'){
                throw new Error('`shape` must be `square`, `circle`, or `triangle`');
            }

        })
        .catch((err) => {
            console.log(err);
            console.log('There was an issue completing your request');            
        });
    }
} 

module.exports = { Shape };