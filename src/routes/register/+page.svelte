<script>
    import { writable } from 'svelte/store';

    let email = '';
    let password = '';
    let confirmPassword = '';
</script>

<!-- Register Page -->
<div class="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
    <h1 class="text-2xl font-bold mb-6">Register</h1>
    <form class="bg-white p-6 rounded-lg shadow-md w-full max-w-sm">
        <label class="block mb-2 text-sm font-medium text-gray-700">Email</label>
        <input type="email" bind:value={email} class="w-full p-2 border rounded-md mb-4" placeholder="Enter your email" />
        
        <label class="block mb-2 text-sm font-medium text-gray-700">Password</label>
        <input type="password" bind:value={password} class="w-full p-2 border rounded-md mb-4" placeholder="Enter your password" />
        
        <label class="block mb-2 text-sm font-medium text-gray-700">Confirm Password</label>
        <input type="password" bind:value={confirmPassword} class="w-full p-2 border rounded-md mb-4" placeholder="Confirm your password" />
        
        <button class="w-full bg-blue-500 text-white p-2 rounded-md">Register</button>
    </form>
</div>