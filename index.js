function openMenu() {
    const menuNavbar = document.getElementById("menu-navbar");

    if (menuNavbar.classList.contains("open")) {
        menuNavbar.classList.remove("max-h-[500px]");
        menuNavbar.classList.add("max-h-0");
        menuNavbar.classList.remove("open");
    } else {
        menuNavbar.classList.remove("max-h-0");
        menuNavbar.classList.add("max-h-[500px]");
        menuNavbar.classList.add("open");
    }
}
