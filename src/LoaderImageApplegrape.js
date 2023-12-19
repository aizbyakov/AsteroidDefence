class LoaderImageApplegrape {
    load() {
        this._space = loadImage('assets/image/applegrape/space.png');
        this._ship = loadImage('assets/image/applegrape/ship.png');
        this._shieldLD = loadImage('assets/image/applegrape/shieldLD.png');
        this._shieldLU = loadImage('assets/image/applegrape/shieldLU.png');
        this._shieldRU = loadImage('assets/image/applegrape/shieldRU.png');
        this._shieldRD = loadImage('assets/image/applegrape/shieldRD.png');
        this._asteroid1 = loadImage('assets/image/applegrape/asteroid1.png');
        this._asteroid2 = loadImage('assets/image/applegrape/asteroid2.png');
        this._asteroid3 = loadImage('assets/image/applegrape/asteroid3.png');
        this._asteroid4 = loadImage('assets/image/applegrape/asteroid4.png');
        this._asteroid5 = loadImage('assets/image/applegrape/asteroid5.png');
        this._btnEngage = loadImage('assets/image/applegrape/btn_engage.png');
        this._menuBackground = loadImage('assets/image/applegrape/menu_background.png');
    }

    get space() {
        return this._space;
    }

    get ship() {
        return this._ship;
    }

    get shieldLD() {
        return this._shieldLD;
    }

    get shieldLU() {
        return this._shieldLU;
    }

    get shieldRU() {
        return this._shieldRU;
    }

    get shieldRD() {
        return this._shieldRD;
    }

    get asteroid1() {
        return this._asteroid1;
    }

    get asteroid2() {
        return this._asteroid2;
    }

    get asteroid3() {
        return this._asteroid3;
    }

    get asteroid4() {
        return this._asteroid4;
    }

    get asteroid5() {
        return this._asteroid5;
    }

    get btnEngage() {
        return this._btnEngage;
    }

    get menuBackground() {
        return this._menuBackground;
    }
}