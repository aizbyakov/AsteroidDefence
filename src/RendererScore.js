const SCORE_TEXT_SHADOW = 4;
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
            textStyle(BOLD);

            fill("red");
            text("[" + this._score + "]", width - SCORE_TEXT_LENGTH - SCORE_TEXT_SHADOW, SCORE_TEXT_SIZE);
            text("[" + this._score + "]", width - SCORE_TEXT_LENGTH + SCORE_TEXT_SHADOW, SCORE_TEXT_SIZE);
            text("[" + this._score + "]", width - SCORE_TEXT_LENGTH, SCORE_TEXT_SIZE - SCORE_TEXT_SHADOW);
            text("[" + this._score + "]", width - SCORE_TEXT_LENGTH, SCORE_TEXT_SIZE + SCORE_TEXT_SHADOW);
            fill("green");
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