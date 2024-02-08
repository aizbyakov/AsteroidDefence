class LoaderSound {
    constructor() {
        this._loaded = false;
    }

    load() {
        this._buttonBeep = new Audio('assets/sound/base/button_beep.wav');
        this._rejected = new Audio('assets/sound/base/rejected.mp3');
        this._radarBeep = new Audio('assets/sound/base/radar_beep.mp3');
        this._explosion = new Audio('assets/sound/base/explosion.wav');

        this._loaded = true;
    }

    buttonBeepPlay() {
        if (this._loaded)
            this._buttonBeep.play();
    }

    rejectedPlay() {
        if (this._loaded)
            this._rejected.play();
    }
    
    radarBeepPlay() {
        if (this._loaded)
            this._radarBeep.play();
    }

    explosionPlay() {
        if (this._loaded)
            this._explosion.play();
    }
}