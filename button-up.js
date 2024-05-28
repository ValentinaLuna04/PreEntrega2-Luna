document.addEventListener("scroll", () => {
    const UpButton  = document.querySelector("#up");

    if (window.scrollY > 200) {
        UpButton.classList.add("show")
    } else {
        UpButton.classList.remove("show")
    }
})