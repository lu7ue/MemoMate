<script>
    let isOpen = false;

    function toggleMenu() {
        isOpen = !isOpen;
    }
</script>

<nav class="fixed top-0 left-0 w-full bg-white shadow-md z-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-16 items-center">
            <!-- Logo / App Title -->
            <div class="flex-1 flex justify-center">
                <h1 class="text-xl font-bold italic">MemoMate</h1>
            </div>

            <!-- Hamburger Menu Button -->
            <div class="flex items-center">
                <button class="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-300" on:click={toggleMenu}>
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                    </svg>
                </button>
            </div>
        </div>
    </div>

    <!-- Dropdown Menu (Adjusted) -->
    {#if isOpen}
    <div class="absolute left-0 right-0 top-full bg-white border-t border-gray-300 shadow-lg">
        <ul class="py-1 text-right">
            <li class="px-6 py-3 hover:bg-gray-100 cursor-pointer">Option One</li>
            <hr class="border-gray-300">
            <li class="px-6 py-3 hover:bg-gray-100 cursor-pointer">Option Two</li>
            <hr class="border-gray-300">
            <li class="px-6 py-3 hover:bg-gray-100 cursor-pointer">Option Three</li>
        </ul>
    </div>
{/if}
</nav>
