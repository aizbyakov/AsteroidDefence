const KEY_START_GAME = 69 //E
const KEY_CHANGE_GRAPHICS = 71 //G

const KEY_SHIELD_LD = 65; //A
const KEY_SHIELD_LU = 81; //Q
const KEY_SHIELD_RU = 80; //P
const KEY_SHIELD_RD = 76; //L

class InputController {
    constructor() {
        this._buttonStartGameRect = null;
        this._buttonChangeGraphicsRect = null;
        this._buttonLDRect = null;
        this._buttonLURect = null;
        this._buttonRURect = null;
        this._buttonRDRect = null;

        this._startGame = false;
        this._changeGraphics = false;

        this._LD = false;
        this._LU = false;
        this._RU = false;
        this._RD = false;

        this._keyShieldLastUsed = null;
    }

    processInput() {
        this._processInputKeys();

        this._processMouseClick();
    }

    _processMouseClick() {
        if (mouseIsPressed && mouseButton === LEFT) {
            this._startGame = this._buttonStartGameRect?.isCoodsWithin(mouseX, mouseY);
            this._changeGraphics = this._buttonChangeGraphicsRect?.isCoodsWithin(mouseX, mouseY);

            let newLD = this._buttonLDRect?.isCoodsWithin(mouseX, mouseY);
            let newLU = this._buttonLURect?.isCoodsWithin(mouseX, mouseY);
            let newRU = this._buttonRURect?.isCoodsWithin(mouseX, mouseY);
            let newRD = this._buttonRDRect?.isCoodsWithin(mouseX, mouseY);

            if (newLD || newLU || newRU || newRD) {
                this._LD = newLD;
                this._LU = newLU;
                this._RU = newRU;
                this._RD = newRD;

                if (this._LD)
                    this._keyShieldLastUsed = KEY_SHIELD_LD;
                if (this._LU)
                    this._keyShieldLastUsed = KEY_SHIELD_LU;
                if (this._RU)
                    this._keyShieldLastUsed = KEY_SHIELD_RU;
                if (this._RD)
                    this._keyShieldLastUsed = KEY_SHIELD_RD;
            }
        }
    }

    _processInputKeys() {
        this._startGame = keyIsDown(KEY_START_GAME);
        this._changeGraphics = keyIsDown(KEY_CHANGE_GRAPHICS);
        
        if (
            ((keyCode == KEY_SHIELD_LD) && keyIsDown(KEY_SHIELD_LD)) ||
            ((keyCode == KEY_SHIELD_LU) && keyIsDown(KEY_SHIELD_LU)) ||
            ((keyCode == KEY_SHIELD_RU) && keyIsDown(KEY_SHIELD_RU)) ||
            ((keyCode == KEY_SHIELD_RD) && keyIsDown(KEY_SHIELD_RD)))
            this._keyShieldLastUsed = keyCode;

        this._LD = (this._keyShieldLastUsed == KEY_SHIELD_LD);
        this._LU = (this._keyShieldLastUsed == KEY_SHIELD_LU);
        this._RU = (this._keyShieldLastUsed == KEY_SHIELD_RU);
        this._RD = (this._keyShieldLastUsed == KEY_SHIELD_RD);
    }

    set buttonStartGameRect(rect) {
        this._buttonStartGameRect = rect;
    }

    set buttonChangeGraphicsRect(rect) {
        this._buttonChangeGraphicsRect = rect;
    }

    set buttonLDRect(rect) {
        this._buttonLDRect = rect;
    }

    set buttonLURect(rect) {
        this._buttonLURect = rect;
    }

    set buttonRURect(rect) {
        this._buttonRURect = rect;
    }

    set buttonRDRect(rect) {
        this._buttonRDRect = rect;
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
}