<script lang="ts">
    let aside: HTMLElement;
    export let current: string;

    const menus = [
        { name: "Home", href: "/" },
        { name: "About", href: "/about" },
        { name: "Contact", href: "/contact" }
    ];

    const toggle = () => {
        aside.classList.toggle("-translate-x-full");
    }

</script>
<!-- show when mouse hovers near top -->
<nav class="grid grid-cols-3 bg-gradient-to-b from-gray-600 to-gray-700 text-white justify-items-end">
    <div class="col-start-3 py-2">
        <button on:click={toggle} class="focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 mr-3">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
        </button>
    </div>
</nav>
<aside bind:this={aside} class="h-[95dvh] translate-y-[5dvh] text-white fixed transition-all duration-300 ease-in-out top-0 -translate-x-full w-1/2 z-50 bg-gray-700">
    <ul class="flex flex-col text-center px-4 py-2 gap-4">
        {#each menus as { name, href }}
        <li class="bg-black/15 py-1 border border-white rounded-lg {href==current?'':'hover:bg-white/5'}">
            {#if href === current}
            <span>
                {name}
            </span>
            {:else}
            <a href={href} on:click={toggle}>
                {name}
            </a>
            {/if}
        </li>
        {/each}
    </ul>
</aside>