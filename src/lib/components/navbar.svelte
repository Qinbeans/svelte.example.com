<script lang="ts">
    export let current: string;

    const menus = [
        { name: "Home", href: "/" },
        { name: "About", href: "/about" },
        { name: "Contact", href: "/contact" }
    ];
</script>
<nav class="grid grid-cols-3 pt-1 bg-gradient-to-b from-gray-600 to-gray-700 text-white w-full h-[5dvh] justify-items-center">
    <section></section>
    <section>
        <ul class="flex gap-9 text-lg">
            {#each menus as { name, href }}
            <li class="border-b-2 border-transparent {href === current ? '' : 'hover:border-white'}">
                {#if href === current}
                <span>
                    {name}
                </span>
                {:else}
                <a href={href}>
                    {name}
                </a>
                {/if}
            </li>
            {/each}
        </ul>
    </section>
    <section></section>
</nav>