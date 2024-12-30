class shape {
    constructor(color, text) {

        this.color = color;

        //text conditions
        if(text.length > 3){
            throw new Error('`text` must be shorter than 3 characters');
        }

        if(text.length < 1){
            throw new Error('`text` must be at least than 1 character');
        }

        this.text = text;

    }
    setColor(color){
        this.color = color;
    }
    setText(text){
        this.text = text;
    }
} 

module.exports = { shape };