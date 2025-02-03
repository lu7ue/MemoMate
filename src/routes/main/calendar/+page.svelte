<script>
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';

	let years = [];
	const currentYear = new Date().getFullYear();
	const currentMonth = new Date().getMonth();
	const today = new Date().getDate();

	// generate the data from 2015 to 2045
	for (let year = 2015; year <= 2045; year++) {
		let months = [];
		for (let month = 0; month < 12; month++) {
			let daysInMonth = new Date(year, month + 1, 0).getDate();
			let days = [];
			for (let day = 1; day <= daysInMonth; day++) {
				days.push({
					day,
					year,
					month: month + 1, // strat from Jan
					isToday: year === currentYear && month + 1 === currentMonth + 1 && day === today
				});
			}
			months.push({ month: month + 1, days }); // ✅ 确保存入的是 1~12 而不是对象
		}
		years.push({ year, months });
	}

	let calendarContainer;

	// go to view the current month and date when enter this page
	onMount(() => {
		setTimeout(() => {
			if (!calendarContainer) return;
			const currentMonthElement = document.getElementById(
				`month-${currentYear}-${currentMonth + 1}`
			);
			if (currentMonthElement) {
				calendarContainer.scrollTo({
					top: currentMonthElement.offsetTop - calendarContainer.offsetTop,
					behavior: 'instant' // ✅ 直接停留，无动画
				});
			}
		}, 100); // 🔥 增加一点延迟，确保 DOM 已完全加载
	});

	async function openSchedule(year, month, day) {
		try {
			const formattedDate = `${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
			await goto(`/calendar/${formattedDate}`);
		} catch (error) {
			console.error('Navigation error:', error);
		}
	}
</script>

<!-- scroll calendar -->
<div class="calendar-container" bind:this={calendarContainer}>
	{#each years as year}
		<div class="p-4">
			<h2 class="text-2xl font-bold text-black">{year.year}</h2>

			{#each year.months as month}
				<div id={`month-${year.year}-${month.month}`} class="mt-4">
					<h3 class="text-xl font-semibold text-red-500">
                        {new Date(year.year, month.month ? month.month - 1 : 0, 1).toLocaleString('default', { month: 'long' })}
                    </h3>                 

					<!-- Date grid -->
					<div class="mt-2 grid grid-cols-7 gap-2 text-center">
						{#each month.days as day}
							<button
								class="flex h-8 w-8 items-center justify-center rounded-full
                                {day.isToday
									? 'bg-red-500 font-bold text-white'
									: 'text-gray-800 hover:bg-gray-200'}"
								on:click={() => openSchedule(day.year, day.month, day.day)}
							>
								{day.day}
							</button>
						{/each}
					</div>
				</div>
			{/each}
		</div>
	{/each}
</div>

<style>
	.calendar-container {
		height: 100vh;
		overflow-y: scroll;
		scroll-behavior: smooth;
		padding-top: 80px;
	}
</style>
