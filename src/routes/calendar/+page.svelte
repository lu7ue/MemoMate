<script>
    import { onMount } from "svelte";
    import { goto } from "$app/navigation"; // 确保正确引入

    let years = [];
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth();
    const today = new Date().getDate();

    // 生成 2015 - 2025 年的日历数据
    for (let year = 2015; year <= 2025; year++) {
        let months = [];
        for (let month = 0; month < 12; month++) {
            let daysInMonth = new Date(year, month + 1, 0).getDate();
            let days = [];
            for (let day = 1; day <= daysInMonth; day++) {
                days.push({ 
                    day, 
                    year,
                    month: month + 1, // 月份从 1 开始
                    isToday: year === currentYear && month === currentMonth && day === today 
                });
            }
            months.push({ month, days });
        }
        years.push({ year, months });
    }

    let calendarContainer;

    // 进入页面时自动滚动到当前月份，并确保它稍微偏下可见
    onMount(() => {
        setTimeout(() => {
            const currentMonthElement = document.getElementById(`month-${currentYear}-${currentMonth}`);
            if (currentMonthElement) {
                currentMonthElement.scrollIntoView({
                    behavior: "smooth",
                    block: "center",
                    inline: "nearest"
                });
            }
        }, 100);
    });

    // **修正 goto() 以避免 undefined 错误**
    async function openSchedule(year, month, day) {
        try {
            const formattedDate = `${year}-${String(month).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
            await goto(`/calendar/${formattedDate}`);
        } catch (error) {
            console.error("Navigation error:", error);
        }
    }

</script>

<style>
    /* 让整个日历页面可以滚动 */
    .calendar-container {
        height: 100vh;
        overflow-y: scroll;
        scroll-behavior: smooth;
        padding-top: 80px;
    }
</style>

<!-- 📅 可滚动的日历 -->
<div class="calendar-container" bind:this={calendarContainer}>
    {#each years as year}
        <div class="p-4">
            <h2 class="text-2xl font-bold text-black">{year.year}</h2>

            {#each year.months as month}
                <div id={`month-${year.year}-${month.month}`} class="mt-4">
                    <h3 class="text-xl font-semibold text-red-500">
                        {new Date(year.year, month.month - 1).toLocaleString('default', { month: 'long' })}
                    </h3>

                    <!-- 日期网格 -->
                    <div class="grid grid-cols-7 gap-2 mt-2 text-center">
                        {#each month.days as day}
                            <button 
                                class="w-8 h-8 flex items-center justify-center rounded-full 
                                {day.isToday ? 'bg-red-500 text-white font-bold' : 'text-gray-800 hover:bg-gray-200'}"
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
