class LoaderSound {
    load() {
        this._buttonBeep = loadSound('assets/sound/base/button_beep.wav');
        this._rejected = loadSound('assets/sound/base/rejected.mp3');
        this._radarBeep = loadSound('assets/sound/base/radar_beep.mp3');
        this._explosion = loadSound('assets/sound/base/explosion.wav');
    }

    get buttonBeep() {
        return this._buttonBeep;
    }

    get rejected() {
        return this._rejected;
    }
    get radarBeep() {
        return this._radarBeep;
    }
    get explosion() {
        return this._explosion;
    }
}