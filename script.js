document.addEventListener("DOMContentLoaded", function () {
    const personSelect = document.getElementById('person-select');
    const tableBody = document.querySelector('#schedule-table tbody');

    // 加载任务数据
    fetch('data/tasks.json')
        .then(response => response.json())
        .then(data => {
            // 初始加载当前选择人员的任务
            updateTable(data, personSelect.value);

            // 当选择人员变化时，更新表格
            personSelect.addEventListener('change', () => {
                updateTable(data, personSelect.value);
            });
        })
        .catch(error => console.error('加载任务数据失败:', error));

    // 更新表格函数
    function updateTable(tasks, person) {
        // 过滤任务数据
        const filteredTasks = tasks.filter(task => task.person === person);

        // 清空表格
        tableBody.innerHTML = '';

        // 填充表格
        filteredTasks.forEach(task => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${task.date}</td>
                <td>${task.task}</td>
            `;
            tableBody.appendChild(row);
        });
    }
});
