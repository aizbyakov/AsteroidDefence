class LoaderImageBase {
    load() {
        this._space = loadImage('assets/image/base/space.png');
        this._ship = loadImage('assets/image/base/ship.png');
        
        this._shieldLD = loadImage('assets/image/base/shieldLD.png');
        this._shieldLU = loadImage('assets/image/base/shieldLU.png');
        this._shieldRU = loadImage('assets/image/base/shieldRU.png');
        this._shieldRD = loadImage('assets/image/base/shieldRD.png');

        this._buttonLD = loadImage('assets/image/base/buttonLD.png');
        this._buttonLU = loadImage('assets/image/base/buttonLU.png');
        this._buttonRU = loadImage('assets/image/base/buttonRU.png');
        this._buttonRD = loadImage('assets/image/base/buttonRD.png');

        this._asteroid1 = loadImage('assets/image/base/asteroid1.png');
        this._asteroid2 = loadImage('assets/image/base/asteroid2.png');
        this._asteroid3 = loadImage('assets/image/base/asteroid3.png');
        this._asteroid4 = loadImage('assets/image/base/asteroid4.png');
        this._asteroid5 = loadImage('assets/image/base/asteroid5.png');

        this._btnEngage = loadImage('assets/image/base/btn_engage.png');
        
        this._menuBackground = loadImage('assets/image/base/menu_background.png');
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

    get buttonLD() {
        return this._buttonLD;
    }

    get buttonLU() {
        return this._buttonLU;
    }

    get buttonRU() {
        return this._buttonRU;
    }

    get buttonRD() {
        return this._buttonRD;
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