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
fleche = document.getElementsByClassName("fleche-container")[0],
About = document.getElementById("About"),
counters = {
    elements: document.querySelectorAll("h3"),
    counts: [3, 10, 20],
    state: [0, 0, 0],
    time: 2000,
    counted: false,
    Plus: [false, true, true],
    startCounting: function () {
        this.intervals = this.counts.map((elm) => this.time / elm);
        this.timers = [];
        for (let i = 0; i < this.elements.length; i++) {
            const elm = this.elements[i];
            this.timers[i] = setInterval(() => {
                if (this.state[i] >= this.counts[i]) clearInterval(this.timers[i]);
                else {
                    this.state[i]++;
                    elm.innerHTML = (this.state[i] < 10 ? "0" : "") + this.state[i];
                }
            }, this.intervals[i]);
        }
    },
};






// event listners
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
    // Handling Scrolling Effects
        function ScrollEffects() {
            // Handle NavBar
            if (header.getBoundingClientRect().top < 0) {
                nav.classList.add("fixed");
                fleche.classList.add("visible");
            }
            else {
                nav.classList.remove("fixed");
                fleche.classList.remove("visible");
            }
            // handle numers
            if(About.getBoundingClientRect().top < (window.innerHeight * 3) / 4 && !counters.counted) {
                counters.counted = true;
                counters.startCounting()
            }
        }
        window.onscroll = ScrollEffects;