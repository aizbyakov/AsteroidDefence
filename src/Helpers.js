// The maximum is exclusive and the minimum is inclusive
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);

    return Math.floor(Math.random() * (max - min) + min);
}

class Box {
    constructor(left, top, right, bottom) {
        this._left = left;
        this._top = top;
        this._right = right;
        this._bottom = bottom;
    }

    get getLeft() {
        return this._left;
    }

    get getTop() {
        return this._top;
    }

    get getRight() {
        return this._right;
    }

    get getBottom() {
        return this._bottom;
    }

    get getWidth() {
        return Math.abs(this._right - this._left);
    }

    get getHeight() {
        return Math.abs(this._bottom - this._top);
    }

    isCoodsWithin(x, y) {
        return (x > this._left) && (x < this._right)
            && (y > this._top) && (y < this._bottom);
    }
}