<script>
    import { writable } from 'svelte/store';

    let searchQuery = '';
    let contacts = writable([
        { id: 1, name: 'Alice', avatar: '', tags: ['Family'], birthday: '2024-02-14', pinned: false },
        { id: 2, name: 'Bob', avatar: '', tags: ['Friend'], birthday: '2024-06-20', pinned: true },
    ]);
</script>

<div class="w-full p-4">
    <!-- Search Bar & Add Contact Button -->
    <div class="flex items-center gap-4 w-full max-w-2xl mx-auto">
        <!-- Search Box -->
        <div class="relative flex-1">
            <input 
                type="text" 
                bind:value={searchQuery} 
                class="w-full h-12 pl-10 pr-4 rounded-lg border shadow-sm focus:ring focus:ring-blue-300 text-sm" 
                placeholder="Search contacts..." 
            />
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" 
                class="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                <path d="M10 18a7.952 7.952 0 0 0 4.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952 0 0 0 18 10c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z"></path>
            </svg>
        </div>

        <!-- Add Contact Button -->
        <button class="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-blue-400">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path d="M19 11h-6V5h-2v6H5v2h6v6h2v-6h6z"></path>
            </svg>
        </button>
    </div>

    <!-- Contact List -->
    <div class="w-full max-w-2xl sm:mx-auto mt-6 space-y-3">
        {#each $contacts as contact (contact.id)}
            <div class="flex items-center p-3 bg-white shadow rounded-lg w-full">
                <img src={contact.avatar} alt="avatar" class="w-12 h-12 rounded-full bg-gray-200" />
                <div class="ml-4 flex-1">
                    <p class="text-lg font-bold">{contact.name}</p>
                    <div class="flex flex-wrap gap-2 text-xs text-gray-500">
                        {#each contact.tags as tag}
                            <span class="px-2 py-1 bg-gray-200 rounded-md">{tag}</span>
                        {/each}
                    </div>
                </div>
            </div>
        {/each}
    </div>
</div>
