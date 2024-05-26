/*funcion pal menu */

function toggleMenu() {
    let sideMenu = document.getElementById("side-menu");
    if (sideMenu.style.width === "250px") {
        sideMenu.style.width = "0";
    } else {
        sideMenu.style.width = "250px";
    }
}

function redirectToReproduct5() {
    window.location.href = "jujutsu.html"
}

function redirectToReproduct6() {
    window.location.href = "jujutsuTemporada2.html"
}