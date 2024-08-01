document.addEventListener("DOMContentLoaded", function () {
    let currentPage = 0;
    const pages = document.querySelectorAll(".page");
    const backgroundMusic = document.getElementById("background-music");

    function showPage(page) {
        pages.forEach((p, index) => {
            if (index === page) {
                p.style.transform = "rotateY(0deg)";
                console.log(`Page ${index} transform: rotateY(0deg)`);
            } else if (index < page) {
                p.style.transform = "rotateY(-180deg)";
                console.log(`Page ${index} transform: rotateY(-180deg)`);
            } else {
                p.style.transform = "rotateY(180deg)";
                console.log(`Page ${index} transform: rotateY(180deg)`);
            }
        });
    }

    document.addEventListener("keydown", function (event) {
        if (event.key === "ArrowRight" && currentPage < pages.length - 1) {
            currentPage++;
            showPage(currentPage);
        } else if (event.key === "ArrowLeft" && currentPage > 0) {
            currentPage--;
            showPage(currentPage);
        }
    });

    pages[0].addEventListener("click", function () {
        if (currentPage === 0) {
            currentPage++;
            showPage(currentPage);
            backgroundMusic.play(); // Play the song when the flipbook is opened
        }
    });

    showPage(currentPage);
});