class ScreenGame {
    constructor(updatesPerSec, doShowMenu = () => {}) {
        this._doShowMenu = doShowMenu;

        this._game = new Game(updatesPerSec);

        this._rendererShip = true;

        this._rendererShieldLD = true;
        this._rendererShieldLU = true;
        this._rendererShieldRU = true;
        this._rendererShieldRD = true;

        this._renderersAsteroidsLD = [ASTEROIDS_NUMBER];
        this._renderersAsteroidsLU = [ASTEROIDS_NUMBER];
        this._renderersAsteroidsRU = [ASTEROIDS_NUMBER];
        this._renderersAsteroidsRD = [ASTEROIDS_NUMBER];

        this._gameCompleteCount = 1000 * 3 / UPDATE_PERIOD_MILLS;

        this.initRenderers();
    }

    update() {
        if (this._game.isRunning)
            this._updateRunningGame();
        else
            this._updateCompletedGame();
    }

    _updateRunningGame() {
        this._game.update();
        this._rendererScore.update(this._game);

        this._rendererShieldLD.active = this._game.shieldLD;
        this._rendererShieldLU.active = this._game.shieldLU;
        this._rendererShieldRU.active = this._game.shieldRU;
        this._rendererShieldRD.active = this._game.shieldRD;

        for (let i = 0; i < ASTEROIDS_NUMBER; i++) {
            this._renderersAsteroidsLD[i].active = this._game.asteroidsLD[i];
            this._renderersAsteroidsLU[i].active = this._game.asteroidsLU[i];
            this._renderersAsteroidsRU[i].active = this._game.asteroidsRU[i];
            this._renderersAsteroidsRD[i].active = this._game.asteroidsRD[i];
        }
    }

    _updateCompletedGame() {
        if (this._gameCompleteCount % 3 == 0) {
            this._rendererScore.active = !this._rendererScore.active;

            if (this._rendererScore._active)
                loaderSound.buttonBeepPlay();
        }

        this._gameCompleteCount--;

        if (this._gameCompleteCount < 0)
            this._doShowMenu();
    }

    render() {
        this._rendererBackground.render();

        this._rendererShip.render();

        this._rendererShieldLD.render();
        this._rendererShieldLU.render();
        this._rendererShieldRU.render();
        this._rendererShieldRD.render();

        for (let i = 0; i < ASTEROIDS_NUMBER; i++) {
            this._renderersAsteroidsLD[i].render();
            this._renderersAsteroidsLU[i].render();
            this._renderersAsteroidsRU[i].render();
            this._renderersAsteroidsRD[i].render();
        }

        this._rendererScore.render();
    }

    initRenderers() {
        this._rendererBackground = new RendererImage(0, 0, loaderImage.space, true);
        this._rendererScore = new RendererScore(true);

        let imgX = (width / 2) - (loaderImage.ship.width / 2);
        let imgY = height - loaderImage.ship.height;
        this._rendererShip = new RendererImage(imgX, imgY, loaderImage.ship, true);

        imgX = this._rendererShip.x - loaderImage.shieldLD.width;
        imgY = this._rendererShip.y - (loaderImage.shieldLD.height / 2);
        this._rendererShieldLD = new RendererImage(imgX, imgY, loaderImage.shieldLD, true);

        imgX = this._rendererShip.x + (this._rendererShip.img.width / 4) - (loaderImage.shieldLU.width / 2);
        imgY = this._rendererShip.y - loaderImage.shieldLU.height;
        this._rendererShieldLU = new RendererImage(imgX, imgY, loaderImage.shieldLU, true);

        imgX = this._rendererShip.x + (this._rendererShip.img.width * 3 / 4) - (loaderImage.shieldRU.width / 2);
        imgY = this._rendererShip.y - loaderImage.shieldRU.height;
        this._rendererShieldRU = new RendererImage(imgX, imgY, loaderImage.shieldRU, true);

        imgX = this._rendererShip.x + this._rendererShip.img.width;
        imgY = this._rendererShip.y - (loaderImage.shieldRD.height / 2);
        this._rendererShieldRD = new RendererImage(imgX, imgY, loaderImage.shieldRD, true);


        imgX = this._rendererShieldLD.x - loaderImage.asteroid5.width;
        imgY = this._rendererShieldLD.y - (loaderImage.asteroid5.height / 2);
        this._renderersAsteroidsLD[0] = new RendererImage(imgX, imgY, loaderImage.asteroid5, true);

        imgX = this._renderersAsteroidsLD[0].x - loaderImage.asteroid4.width;
        imgY = this._renderersAsteroidsLD[0].y - (loaderImage.asteroid4.height / 2);
        this._renderersAsteroidsLD[1] = new RendererImage(imgX, imgY, loaderImage.asteroid4, true);

        imgX = this._renderersAsteroidsLD[1].x - loaderImage.asteroid3.width;
        imgY = this._renderersAsteroidsLD[1].y - (loaderImage.asteroid3.height / 2);
        this._renderersAsteroidsLD[2] = new RendererImage(imgX, imgY, loaderImage.asteroid3, true);

        imgX = this._renderersAsteroidsLD[2].x - loaderImage.asteroid2.width;
        imgY = this._renderersAsteroidsLD[2].y - (loaderImage.asteroid2.height / 2);
        this._renderersAsteroidsLD[3] = new RendererImage(imgX, imgY, loaderImage.asteroid2, true);

        imgX = this._renderersAsteroidsLD[3].x - loaderImage.asteroid1.width;
        imgY = this._renderersAsteroidsLD[3].y - (loaderImage.asteroid1.height / 2);
        this._renderersAsteroidsLD[4] = new RendererImage(imgX, imgY, loaderImage.asteroid1, true);


        imgX = this._rendererShieldLU.x - (loaderImage.asteroid5.width / 2);
        imgY = this._rendererShieldLU.y - loaderImage.asteroid5.height;
        this._renderersAsteroidsLU[0] = new RendererImage(imgX, imgY, loaderImage.asteroid5, true);

        imgX = this._renderersAsteroidsLU[0].x - (loaderImage.asteroid4.width / 2);
        imgY = this._renderersAsteroidsLU[0].y - loaderImage.asteroid4.height;
        this._renderersAsteroidsLU[1] = new RendererImage(imgX, imgY, loaderImage.asteroid4, true);

        imgX = this._renderersAsteroidsLU[1].x - (loaderImage.asteroid3.width / 2);
        imgY = this._renderersAsteroidsLU[1].y - loaderImage.asteroid3.height;
        this._renderersAsteroidsLU[2] = new RendererImage(imgX, imgY, loaderImage.asteroid3, true);

        imgX = this._renderersAsteroidsLU[2].x - (loaderImage.asteroid2.width / 2);
        imgY = this._renderersAsteroidsLU[2].y - loaderImage.asteroid2.height;
        this._renderersAsteroidsLU[3] = new RendererImage(imgX, imgY, loaderImage.asteroid2, true);

        imgX = this._renderersAsteroidsLU[3].x - (loaderImage.asteroid1.width / 2);
        imgY = this._renderersAsteroidsLU[3].y - loaderImage.asteroid1.height;
        this._renderersAsteroidsLU[4] = new RendererImage(imgX, imgY, loaderImage.asteroid1, true);


        imgX = this._rendererShieldRU.x + this._rendererShieldRU.img.width - (loaderImage.asteroid5.width / 2);
        imgY = this._rendererShieldRU.y - loaderImage.asteroid5.height;
        this._renderersAsteroidsRU[0] = new RendererImage(imgX, imgY, loaderImage.asteroid5, true);

        imgX = this._renderersAsteroidsRU[0].x + this._renderersAsteroidsRU[0].img.width - (loaderImage.asteroid4.width / 2);
        imgY = this._renderersAsteroidsRU[0].y - loaderImage.asteroid4.height;
        this._renderersAsteroidsRU[1] = new RendererImage(imgX, imgY, loaderImage.asteroid4, true);

        imgX = this._renderersAsteroidsRU[1].x + this._renderersAsteroidsRU[1].img.width - (loaderImage.asteroid3.width / 2);
        imgY = this._renderersAsteroidsRU[1].y - loaderImage.asteroid3.height;
        this._renderersAsteroidsRU[2] = new RendererImage(imgX, imgY, loaderImage.asteroid3, true);

        imgX = this._renderersAsteroidsRU[2].x + this._renderersAsteroidsRU[2].img.width - (loaderImage.asteroid2.width / 2);
        imgY = this._renderersAsteroidsRU[2].y - loaderImage.asteroid2.height;
        this._renderersAsteroidsRU[3] = new RendererImage(imgX, imgY, loaderImage.asteroid2, true);

        imgX = this._renderersAsteroidsRU[3].x + this._renderersAsteroidsRU[3].img.width - (loaderImage.asteroid1.width / 2);
        imgY = this._renderersAsteroidsRU[3].y - loaderImage.asteroid1.height;
        this._renderersAsteroidsRU[4] = new RendererImage(imgX, imgY, loaderImage.asteroid1, true);


        imgX = this._rendererShieldRD.x + this._rendererShieldRD.img.width;
        imgY = this._rendererShieldRD.y - (this._rendererShieldRD.img.height / 2);
        this._renderersAsteroidsRD[0] = new RendererImage(imgX, imgY, loaderImage.asteroid5, true);

        imgX = this._renderersAsteroidsRD[0].x + this._renderersAsteroidsRD[0].img.width;
        imgY = this._renderersAsteroidsRD[0].y - (this._renderersAsteroidsRD[0].img.height / 2);
        this._renderersAsteroidsRD[1] = new RendererImage(imgX, imgY, loaderImage.asteroid4, true);

        imgX = this._renderersAsteroidsRD[1].x + this._renderersAsteroidsRD[1].img.width;
        imgY = this._renderersAsteroidsRD[1].y - (this._renderersAsteroidsRD[1].img.height / 2);
        this._renderersAsteroidsRD[2] = new RendererImage(imgX, imgY, loaderImage.asteroid3, true);

        imgX = this._renderersAsteroidsRD[2].x + this._renderersAsteroidsRD[2].img.width;
        imgY = this._renderersAsteroidsRD[2].y - (this._renderersAsteroidsRD[2].img.height / 2);
        this._renderersAsteroidsRD[3] = new RendererImage(imgX, imgY, loaderImage.asteroid2, true);

        imgX = this._renderersAsteroidsRD[3].x + this._renderersAsteroidsRD[3].img.width;
        imgY = this._renderersAsteroidsRD[3].y - (this._renderersAsteroidsRD[3].img.height / 2);
        this._renderersAsteroidsRD[4] = new RendererImage(imgX, imgY, loaderImage.asteroid1, true);
    }
}
