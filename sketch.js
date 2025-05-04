const UPDATE_PERIOD_MILLS = 50;
let updatePeriodMills = 0;

const UPDATE_FPS_COUNTS_MILLS = 1000;
let updateFPSCountsMills = 0;

const COOKIE_NAME__TOP_SCORE = "ansteroid_defence__top_score";
const COOKIE_NAME__LAST_SCORE = "ansteroid_defence__last_score";
const COOKIE_NAME__GRAPHIC_SET = "ansteroid_defence__graphic_set";

const GraphicSet = {
	DEFAULT: "base",
	APPLEGRAPE: "applegrape"
}

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

let topScore = null;
let lastScore = null;
let graphicSet = GraphicSet.DEFAULT;

let scaleFactor = 1;

function preload() {
    inputController = new InputController();

    loaderImageBase = new LoaderImageBase();
    loaderImageBase.load();
    loaderImageApplegrape = new LoaderImageApplegrape();
    loaderImageApplegrape.load();

    loaderImage = (GraphicSet.APPLEGRAPE == graphicSet) ? loaderImageApplegrape : loaderImageBase;

    loaderSound = new LoaderSound();
    loaderSound.load();
}

function setup() {
    createCanvas(loaderImage.space.width, loaderImage.space.height);

    setScale();

    rendererFPS = new RendererFPS(true);

    showScreenMenu();
}

function setScale() {
    let dx = windowWidth / loaderImage.space.width;
    let dy = windowHeight / loaderImage.space.height;

    scaleFactor = Math.min(dx, dy);

    resizeCanvas(windowWidth, windowHeight);
}

function windowResized() {
    setScale();

    screen.setupInputController();
}

function draw() {
    scale(scaleFactor);

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

function saveScoreToCookies() {
    setCookie(COOKIE_NAME__LAST_SCORE, lastScore, 365);
    setCookie(COOKIE_NAME__TOP_SCORE, topScore, 365);
    setCookie(COOKIE_NAME__GRAPHIC_SET, graphicSet, 265)
}

function restoreScoreFromCookies() {
    lastScore = getCookie(COOKIE_NAME__LAST_SCORE);
    topScore = getCookie(COOKIE_NAME__TOP_SCORE);
    graphicSet = getCookie(COOKIE_NAME__GRAPHIC_SET);
}