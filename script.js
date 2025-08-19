document.addEventListener('DOMContentLoaded', () => {
    const openButton = document.getElementById('openButton');
    const chestBox = document.getElementById('chestBox');
    const container = document.querySelector('.container');

    // Fungsi untuk membuat partikel debu
    function createDust() {
        const dustCount = 20;
        for (let i = 0; i < dustCount; i++) {
            const dust = document.createElement('div');
            dust.classList.add('dust');
            const randomX = Math.random() * window.innerWidth;
            const randomY = Math.random() * window.innerHeight;
            const randomSize = Math.random() * 3 + 2;
            const randomDelay = Math.random() * 5;

            dust.style.left = `${randomX}px`;
            dust.style.top = `${randomY}px`;
            dust.style.width = `${randomSize}px`;
            dust.style.height = `${randomSize}px`;
            dust.style.animationDelay = `${randomDelay}s`;

            document.body.appendChild(dust);
        }
    }

    createDust(); // Buat debu saat halaman dimuat

    openButton.addEventListener('click', () => {
        chestBox.classList.add('open');
        openButton.disabled = true;
        setTimeout(createDiamonds, 500); // Tunda sedikit agar animasi tutup terbuka duluan
    });

    function createDiamonds() {
        const diamondCount = 50;
        const colors = ['blue', 'black'];

        for (let i = 0; i < diamondCount; i++) {
            const diamond = document.createElement('div');
            const randomColor = colors
        }
    }
}
)