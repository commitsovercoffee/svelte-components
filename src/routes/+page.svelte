<script>
	import JournalPage from "$lib/components/JournalPage.svelte";
	import Component from "$lib/Component.svelte";
	import Walkman from "$lib/components/Walkman.svelte";
	import PostIt from "$lib/components/PostIt.svelte";
	import WordCloud from "$lib/components/WordCloud.svelte";
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
	</div>
</section>
