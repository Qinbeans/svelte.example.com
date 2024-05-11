<script lang="ts">
    import Burger from "$lib/components/mobile/burger.svelte";
	import Navbar from "$lib/components/navbar.svelte";
    import "../lib/styles/app.css";

    /** @type {import('./$types').LayoutServerData} */
    export let data: any;

</script>
<header class="fixed top-0 z-50 w-dvw h-[5dvh]">
    {#if data.mobile}
    <Burger current={data.path}/>
    {:else}
    <Navbar current={data.path}/>
    {/if}
    <!-- Header component contains navbar -->
</header>
<main class="h-[95dvh] translate-y-[5dvh] px-10 py-6">
    <!-- Slot refers to whatever the child layout or page contains -->
    <slot/>
</main>