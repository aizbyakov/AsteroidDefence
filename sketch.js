const UPDATE_PERIOD_MILLS = 50;
let updatePeriodMills = 0;

const UPDATE_FPS_COUNTS_MILLS = 1000;
let updateFPSCountsMills = 0;

let previousMills = 0;
let rendersCount = 0;
let updatesCount = 0;


let inputController;

let loaderImageBase;
let loaderImageApplegrape;
let loaderImage;

let loaderSound;

let rendererFPS;
let rendererScore;

let screen;
let screenUpdatePassCount = 0;


function preload() {
    inputController = new InputController();

    loaderImageBase = new LoaderImageBase();
    loaderImageBase.load();
    loaderImageApplegrape = new LoaderImageApplegrape();
    loaderImageApplegrape.load();

    loaderImage = loaderImageBase;

    loaderSound = new LoaderSound();
    /**
     * Doesn't work in chrome and it looks like it requires another way to load sound because of aoudio policies
     */
    // loaderSound.load();
}

function setup() {
    createCanvas(loaderImage.space.width, loaderImage.space.height);

    rendererFPS = new RendererFPS(true);

    showScreenMenu();
}

function draw() {
    //calculate elapsed periods
    let currentMills = millis();
    let elapsedMills = currentMills - previousMills;
    previousMills = currentMills;

    updateFPSCountsMills = updateFPSCountsMills + elapsedMills;
    updatePeriodMills = updatePeriodMills + elapsedMills;

    //update FPS counts
    if (updateFPSCountsMills >= UPDATE_FPS_COUNTS_MILLS) {
        rendererFPS.update(rendersCount, updatesCount);

        updateFPSCountsMills = updateFPSCountsMills - UPDATE_FPS_COUNTS_MILLS;

        rendersCount = 0;
        updatesCount = 0;
    }

    rendersCount++;

    //processInput
    inputController.processInput();

    //udpate game world
    while (updatePeriodMills >= UPDATE_PERIOD_MILLS) {
        updatesCount++;
        updatePeriodMills = updatePeriodMills - UPDATE_PERIOD_MILLS;

        if (screenUpdatePassCount <= 0) {
            screen.update();
        } else {
            screenUpdatePassCount--;
        }
    }

    screen.render();
    rendererFPS.render();
}

function showScreenMenu() {
    screenUpdatePassCount = 0;

    screen = new ScreenMenu(showScreenGame);
}

function showScreenGame() {
    screenUpdatePassCount = UPDATE_FPS_COUNTS_MILLS / UPDATE_PERIOD_MILLS;

    screen = new ScreenGame(1000 / UPDATE_PERIOD_MILLS, showScreenMenu);
}