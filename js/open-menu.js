const mobileMenuButtonEl = document.querySelector(".mobile-button-menu");
const menuButtonEl = document.querySelector(".button-menu");

mobileMenuButtonEl.addEventListener("click", () => openMenu());
menuButtonEl.addEventListener("click", () => openMenu());

function openMenu() {
    let menuMobileEl = document.querySelector(".menu-mobile");

    let open = menuMobileEl.classList.contains("open-mobile-menu") ? true : false;

    if (open) {
        menuMobileEl.classList.remove("open-mobile-menu");
    } else {
        menuMobileEl.classList.add("open-mobile-menu");
    }
}