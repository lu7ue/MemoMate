<script>
    import { onMount } from 'svelte';
    import { writable } from 'svelte/store';

    let searchQuery = '';
    let viewMode = writable('list');
    let contacts = writable([
        { id: 1, name: 'Alice', avatar: 'https://via.placeholder.com/50', tags: ['Family'], birthday: '2024-02-14', pinned: false },
        { id: 2, name: 'Bob', avatar: 'https://via.placeholder.com/50', tags: ['Friend'], birthday: '2024-06-20', pinned: true },
    ]);
</script>

    <div class="flex flex-col items-center p-4">
    <h1 class="text-2xl font-bold text-center">MemoMate</h1>
    
    <div class="relative w-4/5 mt-2">
        <input 
            type="text" 
            bind:value={searchQuery} 
            class="w-full h-10 pl-10 pr-4 rounded-lg border shadow-sm focus:ring focus:ring-blue-300" 
            placeholder="Search for a person" />
    </div>
    
    <div class="w-full mt-4 space-y-2">
        {#each $contacts as contact (contact.id)}
            <div class="flex items-center p-3 bg-white shadow rounded-lg w-full max-w-lg">
            <img src={contact.avatar} alt="avatar" class="w-12 h-12 rounded-full" />
            <div class="ml-4 flex-1">
                <p class="text-lg font-bold">{contact.name}</p>
                <div class="flex gap-2 text-xs text-gray-500">
                {#each contact.tags as tag}
                    <span class="px-2 py-1 bg-gray-200 rounded-md">{tag}</span>
                {/each}
                </div>
                <p class="text-xs text-gray-400">📅 {contact.anniversary}</p>
            </div>
            </div>
        {/each}
    </div>

    <button class="fixed bottom-6 right-6 bg-white text-black w-6 h-6 rounded-full shadow-lg flex items-center justify-center text-2xl">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;"><path d="M19 11h-6V5h-2v6H5v2h6v6h2v-6h6z"></path></svg>
    </button>
</div>
