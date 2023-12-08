export function setTheme(element, theme) {
	element.setAttribute("data-theme", theme);
}

function generateSocialMediaStatsHTML(data) {
	return data
		.map(
			(item) =>
				`
			<article class="card card--stats card--${item.platform.toLowerCase()}">
			<p class="card__name">
				<img
					src="${item.platformIcon}"
					alt="facebook icon" />
				${item.handle}
			</p>
			<p class="card__followers">
				<span class="card__followers__number">
					${
						item.audience.followers
							? item.audience.followers === 11000
								? "11k"
								: item.audience.followers
							: item.audience.subscribers
					}
				</span>
				<span class="card__followers__text">
					Followers
				</span>
			</p>
			<p class="card__today">
				<img
					src=${item.audience.icon}
					alt="up arrow icon" />
				${item.audience.today} Today
			</p>
		</article>
			`
		)
		.join("");
}

export function renderSocialMediaStats(element, data) {
	element.innerHTML = "";
	element.insertAdjacentHTML(
		"afterbegin",
		generateSocialMediaStatsHTML(data)
	);
}

function generateOverviewStatsHTML(data) {
	return data
		.map(
			(item) =>
				`
				<div class="overview__card">
				<div class="overview__top">
					<p class="overview__top__text">${item.metric}</p>
					<img
						src="./images/icon-${item.platform}.svg"
						alt="${item.platform} icon" />
				</div>
				<div class="overview__bottom">
					<p class="overview__bottom__number">${
						item.value === 52000 ? "52K" : item.value
					}</p>
					<p class="overview__bottom__today ${
						item.percentage < 0
							? "overview__bottom__today--decrease"
							: "overview__bottom__today--increase"
					}">
						<img
							src="${item.percentage < 0 ? "images/icon-down.svg" : "images/icon-up.svg"}"
							alt="up arrow icon" />
						${Math.abs(item.percentage)}&#37;
					</p>
				</div>
			</div>
			`
		)
		.join("");
}

export function renderOverviewStats(element, data) {
	element.innerHTML = "";
	element.insertAdjacentHTML("afterbegin", generateOverviewStatsHTML(data));
}
