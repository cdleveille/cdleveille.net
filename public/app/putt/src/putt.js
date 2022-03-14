// http-server -a localhost -p 8000 -c-1    http://localhost:8000/putt.html

import Game from "/app/putt/src/game.js";
import Ball from "/app/putt/src/ball.js";
import Cup from "/app/putt/src/cup.js";
import Hole from "/app/putt/src/hole.js";
import Wall from "/app/putt/src/wall.js";
import Zone from "/app/putt/src/zone.js";
import Slope from "/app/putt/src/slope.js";
import InputHandler from "/app/putt/src/input.js";
import WindowHandler from "/app/putt/src/window.js";
import Sound from "/app/putt/src/sound.js";
import ScoreCard from "/app/putt/src/scorecard.js";

let canvas = document.getElementById("gameScreen");
let ctx = canvas.getContext("2d");

let puttSounds = {
	putt1: new Sound("/app/putt/snd/putt1.mp3"),
	putt2: new Sound("/app/putt/snd/putt2.mp3"),
	putt3: new Sound("/app/putt/snd/putt3.mp3"),
	putt4: new Sound("/app/putt/snd/putt4.mp3")
};

let wallSounds = {
	wall1: new Sound("/app/putt/snd/wall1.mp3"),
	wall2: new Sound("/app/putt/snd/wall2.mp3"),
	wall3: new Sound("/app/putt/snd/wall3.mp3"),
	wall4: new Sound("/app/putt/snd/wall4.mp3")
};

let cupSound = new Sound("/app/putt/snd/cup.mp3");

let popSound = new Sound("/app/putt/snd/pop.mp3");

let backgroundColor = "#555555";

let ball = new Ball(5, puttSounds);

// hole 1
let cup1 = new Cup(800, 250, 10);
let startZone1 = { x: 170, y: 120, width: 110, height: 260 };
let zones1 = 	[	new Zone(170, 120, 110, 260, "#156601"),
					new Zone(280, 120, 620, 260, "#1C8014"),
					new Zone(600, 120, 300, 260, "#045500")
				];
let slopes1 = [ new Slope(400, 120, 200, 260, "#1C8014", "#045500", -1.6, 0) ];
let walls1 =	[	new Wall(150, 100, 20, 300),
					new Wall(150, 100, 750, 20),
					new Wall(150, 380, 750, 20),
					new Wall(900, 100, 20, 300)
				];
let hole1 = new Hole(cup1, walls1, zones1, slopes1, startZone1, 2);

let hole2 = Object.assign({}, hole1);
let hole3 = Object.assign({}, hole1);
let hole4 = Object.assign({}, hole1);
let hole5 = Object.assign({}, hole1);
let hole6 = Object.assign({}, hole1);
let hole7 = Object.assign({}, hole1);
let hole8 = Object.assign({}, hole1);
let hole9 = Object.assign({}, hole1);

let holes = [hole1, hole2, hole3, hole4, hole5, hole6, hole7, hole8, hole9];

let scoreCard = new ScoreCard(holes);

let game = new Game(backgroundColor, ball, holes, cupSound, wallSounds, popSound, scoreCard);
game.loadHole(0);

let windowHandler = new WindowHandler(canvas, game, .9);

let inputHandler = new InputHandler(canvas, game);

let updateRate = 500;
let dt, now, last = game.timestamp(), step = 1 / updateRate;

function frame() {
	now = game.timestamp();
	dt = Math.min(1, (now - last) / 1000);

	while(dt > step) {
		dt = dt - step;
		game.update(step);
	}

	game.draw(ctx);
	last = now - (dt % step);
	requestAnimationFrame(frame);
}

requestAnimationFrame(frame);