const SCORE_TEXT_SHADOW = 4;
const SCORE_TEXT_SIZE = 64;
const SCORE_TEXT_LENGTH = 200;


class RendererScore {
  constructor(x, y, active = false) {
    	this._score = 0;
    
        this._x = x;
        this._y = y;
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
            text("[" + this._score + "]", this._x - SCORE_TEXT_SHADOW, this._y);
            text("[" + this._score + "]", this._x + SCORE_TEXT_SHADOW, this._y);
            text("[" + this._score + "]", this._x, this._y - SCORE_TEXT_SHADOW);
            text("[" + this._score + "]", this._x, this._y + SCORE_TEXT_SHADOW);
            fill("green");
            text("[" + this._score + "]", this._x, this._y);
        }
    }
    
    get x() {
        return this._x;
    }

    get y() {
        return this._y;
    }

    get active() {
        return this._active;
    }

    set active(value) {
        this._active = value;
    }
}