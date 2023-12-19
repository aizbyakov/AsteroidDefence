const FPS_TEXT_SIZE = 16;

class RendererFPS {
	constructor(active = false) {
		this._renderCount = 0;
		this._updateCount = 0;

		this._active = active;
	}

	update(renderCount, updateCount) {
		this._renderCount = renderCount;
		this._updateCount = updateCount;
	}

	render() {
		if (this._active) {
			textSize(FPS_TEXT_SIZE);
			fill("red");
			textStyle(BOLD);

			text("FPS: " + this._renderCount + "/" + this._updateCount, 0, FPS_TEXT_SIZE);
		}
	}
	
    get active() {
        return this._active;
    }

    set active(value) {
        this._active = value;
    }
}