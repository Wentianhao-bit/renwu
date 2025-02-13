document.addEventListener("DOMContentLoaded", function () {
    fetch('data/tasks.json')
        .then(response => response.json())
        .then(data => {
            const taskList = document.getElementById('task-list');
            data.forEach(task => {
                const taskItem = document.createElement('div');
                taskItem.className = 'task-item';
                taskItem.innerHTML = `
                    <p><strong>日期:</strong> ${task.date}</p>
                    <p><strong>星期:</strong> ${task.weekday}</p>
                    <p><strong>人员:</strong> ${task.person}</p>
                    <p><strong>任务:</strong> ${task.task}</p>
                `;
                taskList.appendChild(taskItem);
            });
        })
        .catch(error => console.error('加载任务数据失败:', error));
});
