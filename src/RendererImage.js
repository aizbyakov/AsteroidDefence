class RendererImage {
    constructor(x, y, img, active = false) {
        this._x = x;
        this._y = y;
        this._img = img;

        this._active = active;
    }

    render() {
        if (this._active)
            image(this.img, this.x, this.y);
    }

    get x() {
        return this._x;
    }

    get y() {
        return this._y;
    }

    get img() {
        return this._img;
    }

    get active() {
        return this._active;
    }

    set active(value) {
        this._active = value;
    }
}