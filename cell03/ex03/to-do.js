document.addEventListener("DOMContentLoaded", function () {
    let ftList = document.getElementById("ft_list");
    let newTaskBtn = document.getElementById("newTask");

    // โหลดรายการจาก Cookies
    function loadTasks() {
        let tasks = getCookie("todo_list");
        if (tasks) {
            let taskArray = JSON.parse(tasks);
            taskArray.forEach(task => addTask(task));
        }
    }

    // เพิ่มรายการ To-Do
    function addTask(taskText) {
        let taskDiv = document.createElement("div");
        taskDiv.className = "todo";
        taskDiv.innerText = taskText;

        // กด To-Do เพื่อลบ
        taskDiv.addEventListener("click", function () {
            if (confirm("Do you want to remove this task?")) {
                taskDiv.remove();
                saveTasks();
            }
        });

        // เพิ่ม To-Do ไปไว้ด้านบนสุด
        ftList.insertBefore(taskDiv, ftList.firstChild);
        saveTasks();
    }

    // กดปุ่ม "New" เพื่อเพิ่มรายการ
    newTaskBtn.addEventListener("click", function () {
        let taskText = prompt("Enter a new task:");
        if (taskText) addTask(taskText);
    });

    // บันทึก To-Do ลง Cookies
    function saveTasks() {
        let taskElements = document.querySelectorAll(".todo");
        let taskArray = [];
        taskElements.forEach(task => taskArray.push(task.innerText));
        setCookie("todo_list", JSON.stringify(taskArray), 7);
    }

    // ฟังก์ชันจัดการ Cookies
    function setCookie(name, value, days) {
        let date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        document.cookie = name + "=" + value + ";expires=" + date.toUTCString() + ";path=/";
    }

    function getCookie(name) {
        let decodedCookies = decodeURIComponent(document.cookie);
        let cookieArray = decodedCookies.split(';');
        for (let i = 0; i < cookieArray.length; i++) {
            let cookie = cookieArray[i].trim();
            if (cookie.indexOf(name + "=") === 0) {
                return cookie.substring(name.length + 1);
            }
        }
        return "";
    }

    // โหลดรายการ To-Do ตอนเปิดหน้าเว็บ
    loadTasks();
});
