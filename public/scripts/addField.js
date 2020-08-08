document.querySelector("#add-time")
.addEventListener('click', cloneField)

function cloneField() {
    const schedule = document.querySelector(".schedule-item").cloneNode(true);
    const clearedSchedule = schedule.querySelectorAll("input")

    clearedSchedule.forEach(function(field){
        field.value = ""
    })

    document.querySelector("#schedule-items").appendChild(schedule);
}
