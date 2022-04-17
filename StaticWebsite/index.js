const day1 = document.getElementById("first-day"),
        day2 = document.getElementById("second-day"),
        day3 = document.getElementById("third-day"),
        firstDay = document.getElementById("schedule-day1"),
        secondDay = document.getElementById("schedule-day2"),
        thirdDay = document.getElementById("schedule-day3"),
        visible = "visible",
        cross = document.getElementById("xmark"),
        form = document.getElementById("Form"),
        register = document.getElementById("register"),
        header = document.getElementById("title-info"),
        nav = document.getElementById("nav"),
        fleche = document.getElementsByClassName("fleche-container")[0];
        register.addEventListener("click", () => {
            form.classList.add("visible")
        })
        cross.addEventListener('click',() => {
            form.classList.remove("visible")
        })
        day1.addEventListener("click", () => {
            firstDay.classList.add(visible)
            secondDay.classList.remove(visible)
            thirdDay.classList.remove(visible)
        })
        day2.addEventListener("click", () => {
            secondDay.classList.add(visible)
            firstDay.classList.remove(visible)
            thirdDay.classList.remove(visible)
        })
        day3.addEventListener("click", () => {
            thirdDay.classList.add(visible)
            secondDay.classList.remove(visible)
            firstDay.classList.remove(visible)
        })

        function navBar() {
                if (header.getBoundingClientRect().top < 0) {
                nav.classList.add("fixed");
                fleche.classList.add("visible");
            }
            else {
                nav.classList.remove("fixed");
                fleche.classList.remove("visible");
            }
        }
        window.onscroll = navBar;