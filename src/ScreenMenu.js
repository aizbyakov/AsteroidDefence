class ScreenMenu {
    constructor(doStartGame = () => {}) {
        this._baseImageSet = (loaderImage == loaderImageBase);

        this._doStartGame = doStartGame;

        this.initRenderers();

        this._isClick = false;
        this._isClickPrev = false;
    }

    update() {
        let clickPos = inputController.clickPosition;

        this._isClickPrev = this._isClick;

        if (clickPos != null) {
            this._isClick = true;

            if (this._isClick != this._isClickPrev)
                this._processMouseClick(clickPos);
        } else {
            this._isClick = false;
        }

        this._rendererBaseImageSet.active = !this._baseImageSet;
        this._rendererApplegrapeImageSet.active = this._baseImageSet;
    }

    _processMouseClick(clickPos) {
        if (checkBounds(clickPos, this._rendererBtnStart.x, this._rendererBtnStart.y, this._rendererBtnStart.img.width, this._rendererBtnStart.img.height)) {
            loaderSound.buttonBeepPlay();

            this._doStartGame();
        }

        if (checkBounds(clickPos, 0, 0, this._rendererBaseImageSet.img.width, this._rendererBaseImageSet.img.height)) {
            loaderSound.buttonBeepPlay();

            this._baseImageSet = !this._baseImageSet;
            loaderImage = (this._baseImageSet ? loaderImageBase : loaderImageApplegrape);

            this.initRenderers();
        }
    }

    render() {
        this._rendererBackground.render();
        this._rendererBaseImageSet.render();
        this._rendererApplegrapeImageSet.render();
        this._rendererBtnStart.render();
    }

    initRenderers() {
        this._rendererBackground = new RendererImage(0, 0, loaderImage.menuBackground, true);

        let btnX = (this._rendererBackground.img.width / 2) - (loaderImage.btnEngage.width / 2);
        let btnY = (this._rendererBackground.img.height / 4);

        this._rendererBtnStart = new RendererImage(btnX, btnY, loaderImage.btnEngage, true);

        this._rendererBaseImageSet = new RendererImage(0, 0, loaderImageBase.ship, true);
        this._rendererApplegrapeImageSet = new RendererImage(0, 0, loaderImageApplegrape.ship, true);
    }
}