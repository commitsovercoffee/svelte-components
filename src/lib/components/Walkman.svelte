<script>
	import { fade } from "svelte/transition";
	let srcArray = [
		[
			"albums/sob_rock.jpg",
			"https://music.youtube.com/playlist?list=OLAK5uy_ks8sCzL9GMFTuBeoVBHhJPkLdgqSfGGtw&feature=shared",
		],
		[
			"albums/begin_again.jpg",
			"https://music.youtube.com/playlist?list=OLAK5uy_lyc76bpamwe0XA-pBjREGqwMEIqvDcYpA&feature=shared",
		],
		[
			"albums/bohemian_rhapsody.jpg",
			"https://music.youtube.com/playlist?list=OLAK5uy_kPmvbW7SIcqYc2_RHCnaOYtImxo5vnZTg&feature=shared",
		],
	];

	let currentSong = 0;
	let currentUrl = "href-url-1";
</script>

<div
	class="relative mx-auto my-6 md:float-left md:mx-6 md:my-0 w-48 h-80 bg-[#010101] border-4 border-l-gray-100 border-t-gray-300 border-r-gray-600 border-b-gray-700 rounded-md flex flex-col items-center justify-center shadow-lg shadow-gray-800"
>
	<div>
		{#each srcArray as [src, href], index}
			{#if index === currentSong}
				<a {href} target="_blank">
					<img
						{src}
						class="absolute px-4 object-contain top-0 left-0"
						alt=""
						transition:fade
					/>
				</a>
			{/if}
		{/each}
	</div>

	<div
		class="absolute bottom-16 p-4 flex justify-around gap-x-4 text-gray-400 duration-200 ease-in-out"
	>
		<!-- Prev Button -->
		<button
			on:click={() => {
				currentSong =
					(currentSong - 1 + srcArray.length) %
					srcArray.length;
				currentUrl = srcArray[currentSong][1];
			}}
		>
			<svg
				role="button"
				xmlns="http://www.w3.org/2000/svg"
				width="24"
				height="24"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
				class="lucide lucide-rewind hover:fill-gray-400 active:translate-y-2 transition-transform"
				><polygon
					points="11 19 2 12 11 5 11 19"
				/><polygon
					points="22 19 13 12 22 5 22 19"
				/></svg
			>
		</button>
		<!-- Play/Pause Button -->

		<a href={currentUrl} target="_blank" class="text-gray-400">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="24"
				height="24"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
				class="lucide lucide-play hover:fill-gray-400 active:translate-y-2 transition-transform"
				><polygon points="6 3 20 12 6 21 6 3" /></svg
			>
		</a>
		<!-- Next Button -->
		<button
			on:click={() => {
				currentSong =
					(currentSong + 1) % srcArray.length;
				currentUrl = srcArray[currentSong][1];
			}}
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="24"
				height="24"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
				class="lucide lucide-fast-forward hover:fill-gray-400 active:translate-y-2 transition-transform"
				><polygon
					points="13 19 22 12 13 5 13 19"
				/><polygon points="2 19 11 12 2 5 2 19" /></svg
			>
		</button>
	</div>
</div>
