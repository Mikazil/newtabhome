<script>
	var date = new Date();
	let time_now = String(date.getHours()) + ':' + String(date.getMinutes());
</script>

<div class="background"></div>
<div>
	<p>
		Happy Saturday!<br />
		It's {time_now} <span class="faint">and</span> partly cloudy<br />
		in Kemerovo.
	</p>
</div>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap');
	p {
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
	}
	.background {
		background-image: url(clouds.png);
		background-repeat: no-repeat;
		background-attachment: fixed;
		background-size: cover;
		width: 100vw;
		height: 100vh;
		margin: 0;
		filter: blur(3px);
	}
</style>
