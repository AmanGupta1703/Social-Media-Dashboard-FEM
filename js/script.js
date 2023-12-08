import { overviewStats, socialMediaData } from "./data.js";
import {
	renderOverviewStats,
	renderSocialMediaStats,
	setTheme,
} from "./helper.js";

const statsContainerEl = document.querySelector(".stats__container");
const overviewContainerEl = document.querySelector(".overview__container");

// THEME SWITCHER
const switchEl = document.querySelector(".switch");

// FUNCTION
//
function toggleTheme(e) {
	const { theme } = switchEl.dataset;

	// SET THEME
	if (theme === "dark") {
		setTheme(switchEl, "light");
		document.body.classList.add("dark");
		if (e.target.classList.contains("circle")) {
			return e.target.closest(".switch").classList.add("switch--active");
		}
		e.target.classList.add("switch--active");
	}

	if (theme === "light") {
		document.body.classList.remove("dark");
		setTheme(switchEl, "dark");
		if (e.target.classList.contains("circle")) {
			return e.target.remove(".switch").classList.add("switch--active");
		}
		e.target.classList.remove("switch--active");
	}
}

// EVENT LISTENER
switchEl.addEventListener("click", toggleTheme);

// RENDER SOCIAL MEDIA STATS
renderSocialMediaStats(statsContainerEl, socialMediaData);

// RENDER OVERVIEW STATS
renderOverviewStats(overviewContainerEl, overviewStats);
