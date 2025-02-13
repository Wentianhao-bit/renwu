document.addEventListener("DOMContentLoaded", function () {
    const taskDate = document.getElementById('task-date');
    const taskPerson = document.getElementById('task-person');
    const taskDescription = document.getElementById('task-description');
    const addTaskButton = document.getElementById('add-task');
    const tableBody = document.querySelector('#task-list tbody');

    // 添加任务
    addTaskButton.addEventListener('click', () => {
        const date = taskDate.value;
        const person = taskPerson.value;
        const description = taskDescription.value;

        if (date && person && description) {
            const newTask = {
                date,
                person,
                description
            };

            // 将任务添加到 Firebase 数据库
            database.ref('tasks').push(newTask);

            // 清空输入框
            taskDate.value = '';
            taskPerson.value = '';
            taskDescription.value = '';
        } else {
            alert('请填写所有字段！');
        }
    });

    // 加载并实时更新任务列表
    database.ref('tasks').on('value', (snapshot) => {
        const tasks = snapshot.val();
        tableBody.innerHTML = ''; // 清空表格

        if (tasks) {
            Object.keys(tasks).forEach(key => {
                const task = tasks[key];
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${task.date}</td>
                    <td>${task.person}</td>
                    <td>${task.description}</td>
                    <td><button onclick="deleteTask('${key}')">删除</button></td>
                `;
                tableBody.appendChild(row);
            });
        } else {
            tableBody.innerHTML = '<tr><td colspan="4">没有任务数据。</td></tr>';
        }
    });
});

// 删除任务
function deleteTask(key) {
    database.ref('tasks').child(key).remove();
}
