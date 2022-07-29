const dropdown = document.querySelector("nav-dropdown");
const bars = document.querySelector(".dropdown");

let dropdownExtended = false;

bars.addEventListener('click', () => {
    dropdown.style.height = dropdownExtended == 0 ? (3 * dropdown.children.length).toString() + 'rem' : 0;
    dropdownExtended = !dropdownExtended;
})

window.addEventListener("resize", () => {
    if (window.innerWidth >= 867) {
        dropdown.style.height = 0;
        dropdownExtended = false;
    }
})