class ScreenMenu {
    constructor(doStartGame = () => {}) {
        this._doStartGame = doStartGame;

        this._initRenderers();

        this.setupInputController();

        this._isClick = false;
        this._isClickPrev = false;
        this._isButtonPressed = false;
        this._isButtonPressedPrev = false;
    }

    update() {
        let btnPressed = (inputController.startGame || inputController.changeGraphics);
        
        this._isButtonPressedPrev = this._isButtonPressed;
        
        if (btnPressed) {
            this._isButtonPressed = true;

            if (this._isButtonPressed != this._isButtonPressedPrev) {
                this._processButtonPress(inputController.startGame, inputController.changeGraphics);
            }
        } else {
            this._isButtonPressed = false;
        }
    }

    setupInputController() {
        inputController.buttonStartGameRect = new Box(
            (this._rendererBtnStart.x * scaleFactor),
            (this._rendererBtnStart.y * scaleFactor),
            ((this._rendererBtnStart.x + this._rendererBtnStart.img.width) * scaleFactor),
            ((this._rendererBtnStart.y + this._rendererBtnStart.img.height) * scaleFactor)
        );

        inputController.buttonChangeGraphicsRect = new Box(
            (this._rendererImageSet.x * scaleFactor),
            (this._rendererImageSet.y * scaleFactor),
            ((this._rendererImageSet.x + this._rendererImageSet.img.width) * scaleFactor),
            ((this._rendererImageSet.y + this._rendererImageSet.img.height) * scaleFactor)
        );

        inputController.buttonLDRect = null;
        inputController.buttonLURect = null;
        inputController.buttonRURect = null;
        inputController.buttonRDRect = null;
    }

    _processButtonPress(startGame, changeGraphics) {
        if (startGame) {
            loaderSound.buttonBeepPlay();
            this._doStartGame();
        }

        if (changeGraphics) {
            loaderSound.buttonBeepPlay();

            this._doChangeGraphics();
        }
    }

    _doChangeGraphics() {
        if (loaderImage == loaderImageBase) {
            loaderImage = loaderImageApplegrape;
            graphicSet = GraphicSet.APPLEGRAPE;
        } else {
            loaderImage = loaderImageBase;
            graphicSet = GraphicSet.DEFAULT;
        }

        saveScoreToCookies();

        this._initRenderers();
    }

    render() {
        this._rendererBackground.render();
        this._rendererImageSet.render();
        this._rendererBtnStart.render();
        this._TOR.render();
    }

    _initRenderers() {
        this._rendererBackground = new RendererImage(0, 0, loaderImage.menuBackground, true);

        let btnX = (this._rendererBackground.img.width / 2) - (loaderImage.btnEngage.width / 2);
        let btnY = (this._rendererBackground.img.height / 4);

        this._rendererBtnStart = new RendererImage(btnX, btnY, loaderImage.btnEngage, true);

        this._rendererImageSet = new RendererImage(0, 0, (loaderImage == loaderImageBase ? loaderImageApplegrape : loaderImageBase).ship, true);
        
        this._TOR = new RendererTOR(loaderImage.menuBackground.width - 150, loaderImage.menuBackground.height - 200, true);
    }
}