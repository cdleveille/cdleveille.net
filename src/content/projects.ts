import type { Project } from "@types";

import { Href, ImgSrc, Route } from "@constants";

export const PROJECTS: Project[] = [
	{
		name: "skifreejs",
		description: "Fan remake of the classic PC game from Windows Entertainment Pack 3.",
		linkLabel: "Play",
		linkHref: Href.SKIFREEJS,
		repoHref: Href.SKIFREEJS_REPO,
		imgSrc: ImgSrc.SKIFREEJS
	},
	{
		name: "copterjs",
		description: "Modern remake of the classic addicting flash game.",
		linkLabel: "Play",
		linkHref: Href.COPTERJS,
		repoHref: Href.COPTERJS_REPO,
		imgSrc: ImgSrc.COPTERJS
	},
	{
		name: "discit",
		description: "A responsive disc golf disc search engine.",
		linkLabel: "Launch",
		linkHref: Href.DISCIT,
		repoHref: Href.DISCIT_REPO,
		imgSrc: ImgSrc.DISCIT
	},
	{
		name: "discit-api",
		description: "RESTful API for disc golf discs.",
		linkLabel: "Launch",
		linkHref: Href.DISCIT_API,
		repoHref: Href.DISCIT_API_REPO,
		imgSrc: ImgSrc.DISCIT_API
	},
	{
		name: "kickups",
		description: "How long can you keep it up?",
		linkLabel: "Play",
		linkHref: Href.KICKUPS,
		repoHref: Href.KICKUPS_REPO,
		imgSrc: ImgSrc.KICKUPS
	},
	{
		name: "amazing-brick",
		description: "How high will you climb?",
		linkLabel: "Play",
		linkHref: Href.AMAZING_BRICK,
		repoHref: Href.AMAZING_BRICK_REPO,
		imgSrc: ImgSrc.AMAZING_BRICK
	},
	{
		name: "phue",
		description: "Control your Philips Hue smart lights from your PC.",
		linkLabel: "Launch",
		linkHref: Href.PHUE,
		repoHref: Href.PHUE_REPO,
		imgSrc: ImgSrc.PHUE
	},
	{
		name: "gamepad-helper",
		description: "Lightweight, zero-dependency wrapper class for the HTML5 Gamepad API.",
		linkLabel: "Launch",
		linkHref: Href.GAMEPAD_HELPER,
		repoHref: Href.GAMEPAD_HELPER_REPO,
		imgSrc: ImgSrc.GAMEPAD_HELPER
	},
	{
		name: "slime-volleyball",
		description: "A remake of the classic browser game.",
		linkLabel: "Play",
		linkHref: Route.SLIME,
		repoHref: Href.SLIME_REPO,
		imgSrc: ImgSrc.SLIME
	},
	{
		name: "puttjs",
		description: "2D minigolf game concept.",
		linkLabel: "Play",
		linkHref: Route.PUTT,
		repoHref: Href.PUTTJS_REPO,
		imgSrc: ImgSrc.PUTTJS
	},
	{
		name: "pioholdem",
		description:
			"Heads-up no-limit Texas Holdem bot. AI from multiple sources including PioSOLVER game trees and Nash Equilibrium push/fold charts.",
		linkLabel: "Play",
		linkHref: Href.PIOHOLDEM,
		repoHref: Href.PIOHOLDEM_REPO,
		imgSrc: ImgSrc.PIOHOLDEM
	}
];
