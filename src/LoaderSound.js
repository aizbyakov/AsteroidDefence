class LoaderSound {
    constructor() {
        this._loaded = false;
    }

    load() {
        this._buttonBeep = loadSound('assets/sound/base/button_beep.wav');
        this._rejected = loadSound('assets/sound/base/rejected.mp3');
        this._radarBeep = loadSound('assets/sound/base/radar_beep.mp3');
        this._explosion = loadSound('assets/sound/base/explosion.wav');

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