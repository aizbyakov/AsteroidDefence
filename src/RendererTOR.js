const TOR_TEXT_SHADOW = 4;
const TOR_TEXT_SIZE = 32;


class RendererTOR {
  constructor(baseX, baseY, active = false) {
        this._baseX = baseX;
        this._baseY = baseY;
    	this._active = active;
  	}
  
  	update() {
  	}
  
    render() {
        if (this._active) {
            textSize(TOR_TEXT_SIZE);
            textStyle(BOLD);

            if (topScore != null) {
                this._drawText("Top", this._baseX, this._baseY);
                this._drawText(topScore, this._baseX + (TOR_TEXT_SHADOW * 10), this._baseY + (TOR_TEXT_SIZE * 1));
            }

            if (lastScore != null) {
                this._drawText("Last", this._baseX, this._baseY + (TOR_TEXT_SIZE * 3));
                this._drawText(lastScore, this._baseX + (TOR_TEXT_SHADOW * 10), this._baseY + (TOR_TEXT_SIZE * 4));
            }
        }
    }
    
    _drawText(caption, x, y) {
        fill("red");
        text(caption, x - TOR_TEXT_SHADOW, y);
        text(caption, x + TOR_TEXT_SHADOW, y);
        text(caption, x, y - TOR_TEXT_SHADOW);
        text(caption, x, y + TOR_TEXT_SHADOW);
        fill("green");
        text(caption, x, y);
    }

    get active() {
        return this._active;
    }

    set active(value) {
        this._active = value;
    }
}