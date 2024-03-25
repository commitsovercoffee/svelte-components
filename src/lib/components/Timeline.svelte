<script>
	import { fade } from "svelte/transition";
	import { quadInOut } from "svelte/easing";
	import { tweened } from "svelte/motion";

	export let events = [
		{
			year: 1995,
			label: "Born & almost died",
			prompt: "back to present",
		},
		{
			year: 2006,
			label: "First computer interaction",
			prompt: "keep going",
		},
		{
			year: 2010,
			label: "Started learning HTML and CSS",
			prompt: "waaaay back",
		},
		{
			year: 2013,
			label: "Began JavaScript journey",
			prompt: "more back",
		},
		{
			year: 2019,
			label: "Explored Svelte3",
			prompt: "go back",
		},
	];

	const len = events.length - 1;
	const width = 900;

	let index = tweened(len, { duration: 1000, easing: quadInOut });
	let dotSize = tweened(8, { duration: 200, easing: quadInOut });

	let isClickable = true;
	let counter = len;

	function handleClick() {
		isClickable = false;
		$dotSize = 4;

		if ($index > 0) {
			$index--;
			counter--;
		} else {
			$index = len;
			counter = len;
		}

		setTimeout(() => ($dotSize = 8), 500);
		setTimeout(() => {
			isClickable = true;
		}, 800);
	}
</script>

<svg viewBox="{-60 + $index * 200} 0 {width / events.length} 120">
	<line
		stroke-dasharray="5,5"
		x1="20"
		y1="95"
		x2="830"
		y2="95"
		class="stroke-slate-600 stroke-2"
	/>
	<line
		x1="20"
		y1="95"
		x2={30 + $index * 200}
		y2="95"
		class="stroke-slate-600 stroke-2"
	/>

	{#each events as event, i}
		<g class="scroll-smooth fill-slate-800">
			<!-- event year -->
			<text
				class="font-contrail text-lg"
				x={25 + i * 40 * events.length}
				y="40"
				text-anchor="middle">{event.year}</text
			>
			<!-- event detail -->
			<text
				class="font-dosis font-thin text-xs"
				x={25 + i * 40 * events.length}
				y="60"
				text-anchor="middle">{event.label}</text
			>
			<circle
				cx={25 + i * 40 * events.length}
				cy="95"
				r={$dotSize}
				class="fill-red-400"
			/>
		</g>
	{/each}
</svg>

<div class="h-40 flex justify-center items-center">
	{#if !isClickable === false}
		<button
			class="rounded-xl py-2 px-4 bg-green-400 text-green-900 active:translate-y-2 transition-transform duration-200"
			on:click={() => {
				console.log(30 + $index * 200);
				$index = Math.floor($index);
				handleClick();
			}}
			disabled={!isClickable}
			transition:fade
		>
			<span class="mx-2 font-contrail">
				{events[counter].prompt}
			</span>
		</button>
	{/if}
</div>
