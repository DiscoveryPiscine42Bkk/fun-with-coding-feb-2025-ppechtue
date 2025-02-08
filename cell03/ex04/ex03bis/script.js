$(document).ready(function() {
    loadTasks();

    // เพิ่มรายการ To-Do
    $("#newTask").click(function() {
        let taskText = prompt("Enter a new task:");
        if (taskText) addTask(taskText);
    });

    function addTask(taskText) {
        let taskDiv = $("<div>").addClass("todo").text(taskText);

        // คลิกเพื่อลบรายการ
        taskDiv.click(function() {
            if (confirm("Do you want to remove this task?")) {
                $(this).remove();
                saveTasks();
            }
        });

        $("#ft_list").prepend(taskDiv);
        saveTasks();
    }

    function saveTasks() {
        let taskArray = [];
        $(".todo").each(function() {
            taskArray.push($(this).text());
        });
        setCookie("todo_list", JSON.stringify(taskArray), 7);
    }

    function loadTasks() {
        let tasks = getCookie("todo_list");
        if (tasks) {
            let taskArray = JSON.parse(tasks);
            taskArray.forEach(task => addTask(task));
        }
    }

    function setCookie(name, value, days) {
        let date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        document.cookie = name + "=" + value + ";expires=" + date.toUTCString() + ";path=/";
    }

    function getCookie(name) {
        let decodedCookies = decodeURIComponent(document.cookie);
        let cookieArray = decodedCookies.split(';');
        for (let cookie of cookieArray) {
            let c = cookie.trim();
            if (c.startsWith(name + "=")) {
                return c.substring(name.length + 1);
            }
        }
        return "";
    }
});
