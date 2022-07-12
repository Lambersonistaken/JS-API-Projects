const button = document.getElementById("bored-btn")


button.addEventListener("click", () => {
    fetch("https://apis.scrimba.com/bored/api/activity")
        .then(response => response.json())
        .then(data => {
            console.log(data)
            document.getElementById("activity-placeholder").textContent = data.activity
    })
})