<script>
	import JournalPage from "$lib/components/JournalPage.svelte";
	import Component from "$lib/Component.svelte";
	import Walkman from "$lib/components/Walkman.svelte";
	import PostIt from "$lib/components/PostIt.svelte";
	import WordCloud from "$lib/components/WordCloud.svelte";
	import Timeline from "$lib/components/Timeline.svelte";
	import Printer from "$lib/components/Printer.svelte";
</script>

<section class="m-6">
	<h1 class="font-contrail text-slate-800">Svelte Components</h1>
	<div class="flex flex-col justify-between">
		<Component
			title="1. Journal Page"
			desc="Layout for simple journal page with a photo."
		>
			<JournalPage />
		</Component>
		<Component
			title="2. Walkman"
			desc="Walkman with interactive play, next and prev buttons."
		>
			<p>
				<Walkman />
				Lorem ipsum dolor sit amet, officia excepteur ex
				fugiat reprehenderit enim labore culpa sint ad nisi
				Lorem pariatur mollit ex esse exercitation amet.
				Nisi anim cupidatat excepteur officia. Reprehenderit
				nostrud nostrud ipsum Lorem est aliquip amet voluptate
				voluptate dolor minim nulla est proident. Nostrud
				officia pariatur ut officia.
			</p>
		</Component>
		<Component
			title="3. Sticky Note"
			desc="Sticky notes ~ color changes each time the page reloads."
		>
			<div class="flex flex-wrap gap-x-2 gap-y-2">
				<PostIt />
				<PostIt />
				<PostIt />
				<PostIt />
				<PostIt />
				<PostIt />
			</div>
		</Component>
		<Component title="4. Word Cloud" desc="A colorful word cloud.">
			<WordCloud />
		</Component>

		<Component
			title="5. Timeline"
			desc="An interactive horizontal timeline."
		>
			<Timeline
				events={[
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
				]}
			/>
		</Component>
		<Component title="5. Printer." desc="Prints random text.">
			<Printer
				facts={[
					"The developer once coded an entire project overnight and it went on to become a bestseller.",
					"Our developer can debug code faster than the speed of light.",
					"The developer has a black belt in coding.",
					"Our developer can write code blindfolded and still produce bug-free software.",
					"The developer once fixed a bug by simply staring at the screen.",
					"Our developer's code is so efficient that it's often mistaken for magic.",
					"The developer never needs to use Stack Overflow because they are the source of all knowledge.",
					"Our developer's keyboard is rumored to be made of pure gold due to all the successful projects it has been a part of.",
					"The developer dreams in code and turns those dreams into reality every day.",
					"Our developer's favorite pastime is refactoring code for fun.",
				]}
			/>
		</Component>
	</div>
</section>
