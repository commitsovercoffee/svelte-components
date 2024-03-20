<script>
	import { onMount } from "svelte";

	const textStyle = "m-0 p-2 cursor-pointer leading-none";
	const bgStyle =
		"absolute left-0 w-full bg-blue-200 -z-10 h-0 group-hover:h-full group-hover:transition-all";

	const colors = [
		{ text: "text-slate-600", bg: "bg-slate-200" },
		{ text: "text-stone-600", bg: "bg-stone-200" },
		{ text: "text-orange-600", bg: "bg-orange-200" },
		{ text: "text-yellow-600", bg: "bg-yellow-200" },
		{ text: "text-lime-600", bg: "bg-lime-200" },
		{ text: "text-green-600", bg: "bg-green-200" },
		{ text: "text-emerald-600", bg: "bg-emerald-200" },
		{ text: "text-teal-600", bg: "bg-teal-200" },
		{ text: "text-blue-600", bg: "bg-blue-200" },
		{ text: "text-indigo-600", bg: "bg-indigo-200" },
		{ text: "text-violet-600", bg: "bg-violet-200" },
		{ text: "text-rose-600", bg: "bg-rose-200" },
		{ text: "text-fuchsia-600", bg: "bg-fuchsia-200" },
	];

	let activities = [
		"cupcake",
		"paint",
		"car",
		"hike",
		"music",
		"dance",
		"beach",
		"bike",
		"yoga",
		"reading",
		"travel",
		"photography",
		"gardening",
		"cooking",
		"swim",
		"camping",
		"movies",
		"drawing",
		"singing",
		"running",
		"writing",
		"meditation",
		"shopping",
		"volunteer",
		"concert",
		"skiing",
		"fishing",
		"boardgames",
		"skateboard",
		"coding",
		"baking",
		"climbing",
		"guitar",
		"piano",
		"knitting",
		"sculpting",
		"birdwatching",
		"kayaking",
		"dancing",
		"surfing",
		"rafting",
		"pottery",
		"scuba",
		"skydiving",
		"martialarts",
		"woodworking",
		"calligraphy",
		"astronomy",
	];

	function shuffleActivities() {
		for (let i = activities.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[activities[i], activities[j]] = [
				activities[j],
				activities[i],
			];
		}
	}

	onMount(() => {
		shuffleActivities();
	});
</script>

<div class="flex flex-wrap">
	{#each activities as activity, index}
		<div class="m-0 relative group font-contrail">
			<span
				class={`${textStyle} ${
					colors[index % colors.length].text
				}`}>{activity}</span
			>
			<span
				class={`${bgStyle} ${
					colors[index % colors.length].bg
				}`}
			></span>
		</div>
	{/each}
</div>
