const listaAnimes = [
    { nombre: "Tensei Shitara", url: "-------.html" },
    { nombre: "Black Clover", url: "------.html" },
    { nombre: "One Piece", url: "one_piece.html" },
    { nombre: "Jujutsu Kaisen", url: "jujutsu.html" },
    { nombre: "Demon Slayer", url: "reproduct1.html" },
    { nombre: "Ataque de los Titanes", url: "-----.html" },
    { nombre: "Mashle", url: "-----.html" },
    { nombre: "One Punch Man", url: "------.html" },
    { nombre: "Wind Breaker", url: "------.html" },
    { nombre: "Highspeed", url: "--------.html" },
    { nombre: "Bartender", url: "------.html" },
    { nombre: "Flores Azules", url: "flores_azules.html" },
    { nombre: "Basketball", url: "-----.html" },
    { nombre: "Dungeon", url: "-----.html" },
    { nombre: "Tokyo Magnitude", url: "-----.html" },
    { nombre: "Sister Princess", url: "------.html" }
];

const buscarAnime = (event) => {
    if (event.key === "Enter") {
        const inputValue = event.target.value;
        const anime = listaAnimes.find(anime => anime.nombre.toLowerCase().includes(inputValue.toLowerCase()));
        const messageElement = document.getElementById("message");

        if (anime) {
            window.location.href = anime.url;
        } else {
            Swal.fire({
                icon: "error",
                title: "Lo siento...",
                text: "!𝐄𝐬𝐭𝐞 𝐚𝐧𝐢𝐦𝐞 𝐧𝐨 𝐞𝐬𝐭𝐚 𝐝𝐢𝐬𝐩𝐨𝐧𝐢𝐛𝐥𝐞!",
              });
            setTimeout(() => {
                messageElement.textContent = "";
            }, 3000);
        }
    }
};

//aqui van las redirecciones de los html, en el script.js solo el metodo del menu

function redirectToReproduct1() {
    window.location.href = "reproduct1.html";
}

function redirectToReproduct2() {
    window.location.href = "flores_azules.html";
}

function redirectToReproduct3() {
    window.location.href = "one_piece.html";
}

function redirectToReproduct4() {
    window.location.href = "loggin.html";
}

function redirectToReproduct5() {
    window.location.href = "jujutsu.html"
}

function redirectToReproduct6() {
    window.location.href = "jujutsuTempora2.html"
}

const toggleMenu = () => {
    const sideMenu = document.getElementById("side-menu");
    if (sideMenu.style.width === "250px") {
        sideMenu.style.width = "0";
    } else {
        sideMenu.style.width = "250px";
    }
};

