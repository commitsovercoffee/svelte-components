<script>
	import JournalPage from "$lib/components/JournalPage.svelte";
	import Component from "$lib/Component.svelte";
</script>

<section class="m-6">
	<h1 class="font-contrail text-slate-800">Svelte Components</h1>
	<div class="flex flex-col justify-between">
		<Component
			title="1. Journal Page"
			desc="Layout for a journal page."
		>
			<JournalPage />
		</Component>
	</div>
</section>
