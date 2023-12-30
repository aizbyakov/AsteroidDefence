const ASTEROIDS_NUMBER = 5;

const CREATE_ASTEROID_SPAN_MAX = 3;
const CREATE_ASTEROID_PROBABILITY_MIN = 0.1;

const COMPLEXITY_INCREASE_SCORE_1 = 10
const COMPLEXITY_INCREASE_SCORE_2 = 50;
const COMPLEXITY_INCREASE_SCORE_3 = 250;
const COMPLEXITY_INCREASE_SCORE_4 = 500;
const COMPLEXITY_INCREASE_SCORE_5 = 1000;


class Game {
    constructor(updatesPerSec) {
        this._isRunning = true;
        this._score = 0;

        this._baseGameSpeed = updatesPerSec / 1.5;
        this._gameSpeedCount = 0;
        this._increaseGameComplexity();

        this._shieldLD = false;
        this._shieldLU = false;
        this._shieldRU = false;
        this._shieldRD = false;

        this._asteroidsLD = [ASTEROIDS_NUMBER];
        this._asteroidsLU = [ASTEROIDS_NUMBER];
        this._asteroidsRU = [ASTEROIDS_NUMBER];
        this._asteroidsRD = [ASTEROIDS_NUMBER];

        for (let i = 0; i < ASTEROIDS_NUMBER; i++) {
            this._asteroidsLD[i] = false;
            this._asteroidsLU[i] = false;
            this._asteroidsRU[i] = false;
            this._asteroidsRD[i] = false;
        }

        this._createAsteroidCount = 0;
        this._createAsteroidProbability = CREATE_ASTEROID_PROBABILITY_MIN;
        this._scoreSpeedIncrease = 0;
    }

    update() {
        if (!this._isRunning)
            return;

        this._gameSpeedCount++;

        this._updatePositionShield();

        if (this._gameSpeedCount <= this._gameSpeed)
            return;

        this._gameSpeedCount = 0;

        loaderSound.radarBeepPlay();

        if (this._checkIfAsteroidHit()) {
            this.endGame();
            return;
        }

        if (this._checkIfAsteroidRejected()) {
            loaderSound.rejectedPlay();
            this._score++;
        }

        this._moveAsteroids();
        this._createNewAsteroid();
        this._increaseGameComplexity();
    }

    _createNewAsteroid() {
        this._createAsteroidCount--;

        let createRandomAsteroid = Math.random() < this._createAsteroidProbability;

        if (this._createAsteroidCount < 0 || createRandomAsteroid) {
            if (!createRandomAsteroid)
                this._createAsteroidCount = CREATE_ASTEROID_SPAN_MAX;

            let asteroids = [];
            asteroids.push(this._asteroidsLD);
            asteroids.push(this._asteroidsLU);
            asteroids.push(this._asteroidsRU);
            asteroids.push(this._asteroidsRD);

            asteroids[(getRandomInt(0, asteroids.length))][ASTEROIDS_NUMBER - 1] = true;
        }
    }

    _increaseGameComplexity() {
        if (this._score < COMPLEXITY_INCREASE_SCORE_1) {
            this._gameSpeed = this._baseGameSpeed - (this._baseGameSpeed * 0.1);
            this._createAsteroidProbability = CREATE_ASTEROID_PROBABILITY_MIN * 1;
        } else if (this._score >= COMPLEXITY_INCREASE_SCORE_1 && this._score < COMPLEXITY_INCREASE_SCORE_2) {
            this._gameSpeed = this._baseGameSpeed - (this._baseGameSpeed * 0.2);
            this._createAsteroidProbability = CREATE_ASTEROID_PROBABILITY_MIN * 3  ;
        } else if (this._score >= COMPLEXITY_INCREASE_SCORE_2 && this._score < COMPLEXITY_INCREASE_SCORE_3) {
            this._gameSpeed = this._baseGameSpeed - (this._baseGameSpeed * 0.3);
            this._createAsteroidProbability = CREATE_ASTEROID_PROBABILITY_MIN * 5 ;
        } else if (this._score >= COMPLEXITY_INCREASE_SCORE_3 && this._score < COMPLEXITY_INCREASE_SCORE_4) {
            this._gameSpeed = this._baseGameSpeed - (this._baseGameSpeed * 0.4);
            this._createAsteroidProbability = CREATE_ASTEROID_PROBABILITY_MIN * 7;
        } else if (this._score >= COMPLEXITY_INCREASE_SCORE_4 && this._score < COMPLEXITY_INCREASE_SCORE_5) {
            this._gameSpeed = this._baseGameSpeed - (this._baseGameSpeed * 0.5);
            this._createAsteroidProbability = CREATE_ASTEROID_PROBABILITY_MIN * 9;
        } else {
            this._gameSpeed = this._baseGameSpeed - (this._baseGameSpeed * 0.6);
            this._createAsteroidProbability = CREATE_ASTEROID_PROBABILITY_MIN * 10;
        }
    }

    _checkIfAsteroidRejected() {
        return (
            (this._asteroidsLD[0] && this._shieldLD) ||
            (this._asteroidsLU[0] && this._shieldLU) ||
            (this._asteroidsRU[0] && this._shieldRU) ||
            (this._asteroidsRD[0] && this._shieldRD)
        );
    }

    _checkIfAsteroidHit() {
        return (
            (this._asteroidsLD[0] && !this._shieldLD) ||
            (this._asteroidsLU[0] && !this._shieldLU) ||
            (this._asteroidsRU[0] && !this._shieldRU) ||
            (this._asteroidsRD[0] && !this._shieldRD)
        );
    }

    _moveAsteroids() {
        for (let i = 0; i < ASTEROIDS_NUMBER - 1; i++) {
            this._asteroidsLD[i] = this._asteroidsLD[i + 1];
            this._asteroidsLU[i] = this._asteroidsLU[i + 1];
            this._asteroidsRU[i] = this._asteroidsRU[i + 1];
            this._asteroidsRD[i] = this._asteroidsRD[i + 1];
        }

        this._asteroidsLD[ASTEROIDS_NUMBER - 1] = false;
        this._asteroidsLU[ASTEROIDS_NUMBER - 1] = false;
        this._asteroidsRU[ASTEROIDS_NUMBER - 1] = false;
        this._asteroidsRD[ASTEROIDS_NUMBER - 1] = false;
    }

    _updatePositionShield() {
        this._shieldLD = inputController.LD;
        this._shieldLU = inputController.LU;
        this._shieldRU = inputController.RU;
        this._shieldRD = inputController.RD;
    }

    endGame() {
        this._isRunning = false;

        loaderSound.explosionPlay();
    }

    get isRunning() {
        return this._isRunning;
    }

    get score() {
        return this._score;
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

    get asteroidsLD() {
        return this._asteroidsLD;
    }

    get asteroidsLU() {
        return this._asteroidsLU;
    }

    get asteroidsRU() {
        return this._asteroidsRU;
    }

    get asteroidsRD() {
        return this._asteroidsRD;
    }
}