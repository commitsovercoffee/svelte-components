<script>
	import { fly } from "svelte/transition";
	import { slide } from "svelte/transition";
	import { linear } from "svelte/easing";
	import { quintOut } from "svelte/easing";
	let visible = true;
	let isPrintTrayEmpty = false;

	let text = "How you doin'? - Joey ";

	/**
	 * An array containing facts.
	 * @type {Array<string>}
	 */
	export let facts;

	function getRandomFact() {
		if (facts.length === 0) {
			return "No more facts available.";
		}

		const randomIndex = Math.floor(Math.random() * facts.length);
		return facts[randomIndex];
	}
</script>

<div
	class="mx-auto mt-8 mb-48 rounded-xl border-4 border-l-orange-100 border-t-orange-300 border-r-orange-400 border-b-orange-800 w-80 h-80 p-4 bg-orange-300 shadow-slate-600 shadow-lg"
>
	<div
		class="my-4 rounded-xl w-min px-2 bg-orange-200 flex justify-start items-center shadow-inner shadow-orange-600"
	>
		<!-- print new fact -->
		<button
			class="w-8 h-8 p-4 m-2 rounded-full border-4 border-l-green-300 border-t-green-300 border-r-green-600 border-b-green-600 bg-green-400 active:scale-75 transition-transform duration-200 ease-in-out shadow-md shadow-emerald-900"
			on:click={() => {
				if (isPrintTrayEmpty) {
					isPrintTrayEmpty = false;
					text = getRandomFact();
					visible = true;
				}
			}}
		>
		</button>
		<!-- discard printed fact -->
		<button
			class="w-8 h-8 p-4 m-2 rounded-full border-4 border-l-red-300 border-t-red-300 border-r-red-600 border-b-red-600 bg-red-400 active:scale-75 transition-transform duration-200 ease-in-out shadow-md shadow-red-900"
			on:click={() => {
				facts = facts.filter((item) => item !== text);
				visible = false;
				isPrintTrayEmpty = true;
				console.log(facts);
			}}
		>
		</button>
	</div>

	<hr class="m-0 -mb-3 rounded-full p-2 bg-slate-800 border-none" />
	{#if visible === true}
		<p
			class="font-contrail mx-4 px-6 pt-4 pb-8 bg-sky-100 text-sky-900 shadow-sky-900 shadow-md"
			in:slide={{
				duration: 1500,
				delay: 200,
				easing: linear,
			}}
			out:fly={{
				y: 50,
				duration: 2500,
				delay: 100,
				easing: quintOut,
			}}
		>
			{text}
		</p>
	{/if}
</div>
