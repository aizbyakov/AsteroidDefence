const SHIELD_LD = 65;
const SHIELD_LU = 81;
const SHIELD_RU = 80;
const SHIELD_RD = 76;

class InputController {
    constructor() {
        this._LD = false;
        this._LU = false;
        this._RU = false;
        this._RD = false;

        this._lastUsed = null;

        this._clickPosition = null;
    }

    processInput() {
        let newLastUsed = keyCode;

        if (newLastUsed == SHIELD_LD || newLastUsed == SHIELD_LU || newLastUsed == SHIELD_RU || newLastUsed == SHIELD_RD) {
            this._lastUsed = newLastUsed;
        }

        let newLD = keyIsDown(SHIELD_LD);
        let newLU = keyIsDown(SHIELD_LU);
        let newRU = keyIsDown(SHIELD_RU);
        let newRD = keyIsDown(SHIELD_RD);

        if (newLD || newLU || newRU || newRD) {
            this._LD = newLD && (SHIELD_LD == this._lastUsed);
            this._LU = newLU && (SHIELD_LU == this._lastUsed);
            this._RU = newRU && (SHIELD_RU == this._lastUsed);
            this._RD = newRD && (SHIELD_RD == this._lastUsed);
        }

        if (mouseIsPressed && mouseButton === LEFT) {
            this._clickPosition = createVector(mouseX, mouseY);
        } else {
            this._clickPosition = null;
        }
    }

    get LD() {
        return this._LD;
    }

    get LU() {
        return this._LU;
    }
    get RU() {
        return this._RU;
    }
    get RD() {
        return this._RD;
    }

    get clickPosition() {
        return this._clickPosition;
    }
}