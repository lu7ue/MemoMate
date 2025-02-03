<script>
    import { goto } from "$app/navigation";

    let user = {
        name: "User",
        id: "default123",
        avatar: "./avatar-default.png"
    };
</script>

<div class="min-h-screen bg-white px-2">
    <!-- User Info Card -->
    <div class="bg-white p-3 flex items-center justify-between rounded-2xl shadow-md">
        <div class="flex items-center space-x-4">
            <img src={user.avatar} alt="Avatar" class="w-16 h-16 rounded-full">
            <div>
                <h2 class="text-xl font-bold">{user.name}</h2>
                <p class="text-gray-500">User ID: {user.id}</p>
            </div>
        </div>
        <button on:click={() => goto('/')} class="text-gray-500 hover:text-gray-700 text-2xl">&gt;</button>
    </div>

    <!-- Settings Cards -->
    <div class="bg-white p-3 mt-4 rounded-2xl shadow-md">
        <!-- Theme Mode -->
        <div class="flex items-center justify-between py-2">
            <div class="flex items-center space-x-3">
                <svg class="w-6 h-6 text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 22c5.514 0 10-4.486 10-10S17.514 2 12 2 2 6.486 2 12s4.486 10 10 10zm0-18c4.411 0 8 3.589 8 8s-3.589 8-8 8-8-3.589-8-8 3.589-8 8-8z"></path>
                    <path d="M19 12a7 7 0 0 0-7-7v14a7 7 0 0 0 7-7z"></path>
                </svg>
                <span class="text-lg">Theme Mode</span>
            </div>
            <button on:click={() => goto('/')} class="text-gray-500 hover:text-gray-700 text-2xl">&gt;</button>
        </div>

        <hr class="border-gray-300">

        <!-- Language -->
        <div class="flex items-center justify-between py-2">
            <div class="flex items-center space-x-3">
                <svg class="w-6 h-6 text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19.924 10.383a1 1 0 0 0-.217-1.09l-5-5-1.414 1.414L16.586 9H4v2h15a1 1 0 0 0 .924-.617zM4.076 13.617a1 1 0 0 0 .217 1.09l5 5 1.414-1.414L7.414 15H20v-2H5a.999.999 0 0 0-.924.617z"></path>
                </svg>
                <span class="text-lg">Language</span>
            </div>
            <button on:click={() => goto('/')} class="text-gray-500 hover:text-gray-700 text-2xl">&gt;</button>
        </div>

        <hr class="border-gray-300">

        <!-- Import/Export Files -->
        <div class="flex items-center justify-between py-2">
            <div class="flex items-center space-x-3">
                <svg class="w-6 h-6 text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M11 16h2V7h3l-4-5-4 5h3z"></path>
                    <path d="M5 22h14c1.103 0 2-.897 2-2v-9c0-1.103-.897-2-2-2h-4v2h4v9H5v-9h4V9H5c-1.103 0-2 .897-2 2v9c0 1.103.897 2 2 2z"></path>
                </svg>
                <span class="text-lg">Import/Export Files</span>
            </div>
            <button on:click={() => goto('/')} class="text-gray-500 hover:text-gray-700 text-2xl">&gt;</button>
        </div>
    </div>

    <!-- More Settings -->
    <div class="bg-white p-3 mt-4 rounded-2xl shadow-md">
        <div class="flex items-center justify-between">
            <div class="flex items-center space-x-3">
                <svg class="w-6 h-6 text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="m2.344 15.271 2 3.46a1 1 0 0 0 1.366.365l1.396-.806c.58.457 1.221.832 1.895 1.112V21a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-1.598a8.094 8.094 0 0 0 1.895-1.112l1.396.806c.477.275 1.091.11 1.366-.365l2-3.46a1.004 1.004 0 0 0-.365-1.366l-1.372-.793a7.683 7.683 0 0 0-.002-2.224l1.372-.793c.476-.275.641-.89.365-1.366l-2-3.46a1 1 0 0 0-1.366-.365l-1.396.806A8.034 8.034 0 0 0 15 4.598V3a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v1.598A8.094 8.094 0 0 0 7.105 5.71L5.71 4.904a.999.999 0 0 0-1.366.365l-2 3.46a1.004 1.004 0 0 0 .365 1.366l1.372.793a7.683 7.683 0 0 0 0 2.224l-1.372.793c-.476.275-.641.89-.365 1.366zM12 8c2.206 0 4 1.794 4 4s-1.794 4-4 4-4-1.794-4-4 1.794-4 4-4z"></path>
                </svg>
                <span class="text-lg">More Settings</span>
            </div>
            <button on:click={() => goto('/')} class="text-gray-500 hover:text-gray-700 text-2xl">&gt;</button>
        </div>
    </div>
</div>
