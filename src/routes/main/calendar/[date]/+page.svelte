<script>
    import { page } from "$app/stores"; // 获取 URL 参数

    // 获取 URL 里的日期
    let selectedDate = $page.params.date;
</script>

<div class="p-4">
    <h1 class="text-2xl font-bold text-gray-900">📅 {selectedDate} 的日程</h1>
    <p class="text-gray-600 mt-2">这里将显示 {selectedDate} 的行程内容...</p>

    <!-- 返回日历 -->
    <a href="/calendar" class="mt-4 inline-block text-blue-500 hover:underline">⬅ 返回日历</a>
</div>
