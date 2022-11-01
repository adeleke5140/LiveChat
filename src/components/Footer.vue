<template>
	<footer>
		Created by <a href="https://github.com/adeleke5140">adeleke5140.</a> Inspired by <a
			href="https://vienna.earth/meta">Vienna Hypertext</a> and <a
			href="https://www.youtube.com/c/TheNetNinja">Net Ninja.</a>
	</footer>
</template>

<script setup>

</script>

<style >
footer {
	position: absolute;
	bottom: 0;

	font-size: 10px;
}

a {
	color: var(--link-color);
	text-decoration: none;
}

@media(min-width: 40em) {
	footer {
		font-size: var(--font-size-smaller);
		bottom: 0;
		/* top: 0; */
		margin-right: -50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}
}
</style>