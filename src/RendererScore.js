const SCORE_TEXT_SIZE = 64;
const SCORE_TEXT_LENGTH = 200;


class RendererScore {
  constructor(active = false) {
    	this._score = 0;
    
    	this._active = active;
  	}
  
  	update(game) {
    	this._score = game.score;
  	}
  
    render() {
        if (this._active) {
            textSize(SCORE_TEXT_SIZE);
            fill("green");
            textStyle(BOLD);

            text("[" + this._score + "]", width - SCORE_TEXT_LENGTH, SCORE_TEXT_SIZE);
        }
    }
    
    get active() {
        return this._active;
    }

    set active(value) {
        this._active = value;
    }
}