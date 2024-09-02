const START_GAME = 69 //E
const CHANGE_GRAPHICS = 71 //G

const SHIELD_LD = 65; //A
const SHIELD_LU = 81; //Q
const SHIELD_RU = 80; //P
const SHIELD_RD = 76; //L

class InputController {
    constructor() {
        this._startGame = false;
        this._changeGraphics = false;

        this._LD = false;
        this._LU = false;
        this._RU = false;
        this._RD = false;

        this._lastUsed = null;

        this._clickPosition = null;
    }

    processInput() {
        this._startGame = keyIsDown(START_GAME);
        this._changeGraphics = keyIsDown(CHANGE_GRAPHICS);
        
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

    get startGame() {
        return this._startGame;
    }

    get changeGraphics() {
        return this._changeGraphics;
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