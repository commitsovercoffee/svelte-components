<script>
	import { onMount } from "svelte";

	export let author = "Author Name";
	export let note =
		"Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.";

	let style = "w-48 h-48 shadow-slate-400 shadow-md p-2 font-dosis ";
	let rotation;
	let textColor;
	let bgColor;

	const rotations = [
		"-rotate-6",
		"-rotate-3",
		"-rotate-2",
		"-rotate-1",
		"rotate-0",
		"rotate-1",
		"rotate-2",
		"rotate-3",
		"rotate-6",
	];

	const colorClasses = [
		{
			textColorClass: "text-slate-800",
			bgColorClass: "bg-slate-200",
		},
		{
			textColorClass: "text-stone-800",
			bgColorClass: "bg-stone-200",
		},
		{
			textColorClass: "text-orange-800",
			bgColorClass: "bg-orange-200",
		},
		{
			textColorClass: "text-yellow-800",
			bgColorClass: "bg-yellow-200",
		},
		{
			textColorClass: "text-lime-800",
			bgColorClass: "bg-lime-200",
		},
		{
			textColorClass: "text-green-800",
			bgColorClass: "bg-green-200",
		},
		{
			textColorClass: "text-emerald-800",
			bgColorClass: "bg-emerald-200",
		},
		{
			textColorClass: "text-teal-800",
			bgColorClass: "bg-teal-200",
		},
		{
			textColorClass: "text-blue-800",
			bgColorClass: "bg-blue-200",
		},
		{
			textColorClass: "text-indigo-800",
			bgColorClass: "bg-indigo-200",
		},
		{
			textColorClass: "text-violet-800",
			bgColorClass: "bg-violet-200",
		},
		{
			textColorClass: "text-rose-800",
			bgColorClass: "bg-rose-200",
		},
		{
			textColorClass: "text-fuchsia-800",
			bgColorClass: "bg-fuchsia-200",
		},
	];

	onMount(() => {
		console.log(colorClasses);

		// Pick a random rotation
		rotation =
			rotations[Math.floor(Math.random() * rotations.length)];

		// Pick a random color
		const randomColorClass =
			colorClasses[
				Math.floor(Math.random() * colorClasses.length)
			];

		// Assign the random color classes
		textColor = randomColorClass.textColorClass;
		bgColor = randomColorClass.bgColorClass;
	});
</script>

<div class={`${style} ${rotation} ${textColor} ${bgColor}`}>
	{note}
	<p class="text-end px-4">- <span>{author}</span></p>
</div>
