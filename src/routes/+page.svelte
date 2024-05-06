<script>
	export let data;
	let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
	let date = new Date();
	let minutes = (date.getMinutes() < 10 ? '0' : '') + date.getMinutes();
	let time_now = String(date.getHours()) + ':' + String(minutes);
	let weekday = String(days[date.getDay()]);
</script>

<div class="text">
	<p>Happy {weekday}!</p>
	<p>
		<span class="faint">It's</span>
		{time_now} <span class="faint">and</span>
		{data.weather?.description}
	</p>
	<p><span class="faint">in</span> {data.weather?.city}.</p>
</div>
<div class="background"></div>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap');
	.text p {
		font-family:
			Inter,
			BlinkMacSystemFont,
			-apple-system,
			Roboto,
			Helvetica Arial,
			sans-serif;
		font-weight: 700;
		font-size: 64px;
		line-height: 80px;
		margin: 0;
		color: white;
		letter-spacing: -0.02em;
		z-index: 1;
		text-align: center;
		opacity: 0.8;
		text-wrap: balance;

	}
	.faint {
		opacity: 0.5;
	}
	.text {
		display:flex;
		flex-direction: column;
		align-content: center;
		justify-content: center;
		width: calc(100vw - 1.25vw);
		height: calc(100vh - 10vh);
	}
	.background {
		position: fixed;
		left: -5px;
		top: -5px;
		z-index: 0;
		display: block;
		background-image: url(clouds.png);
		width: 105vw;
		height: 105vh;
		-webkit-filter: blur(5px);
		-moz-filter: blur(5px);
		-o-filter: blur(5px);
		-ms-filter: blur(5px);
		filter: blur(5px);
	}
</style>
