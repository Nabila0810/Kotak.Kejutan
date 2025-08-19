document.addEventListener('DOMContentLoaded', () => {
    const openButton = document.getElementById('openButton');
    const chestBox = document.getElementById('chestBox');

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

    // Tambahkan event listener untuk tombol
    openButton.addEventListener('click', () => {
        chestBox.classList.add('open');
        openButton.disabled = true; // Nonaktifkan tombol setelah diklik
        setTimeout(createDiamonds, 500); // Panggil fungsi berlian setelah 0.5 detik
    });

    // Fungsi untuk membuat dan menghamburkan berlian
    function createDiamonds() {
        const diamondCount = 50;
        const colors = ['blue', 'black'];

        for (let i = 0; i < diamondCount; i++) {
            const diamond = document.createElement('div');
            const randomColor = colors[Math.floor(Math.random() * colors.length)];
            diamond.classList.add('diamond', randomColor);
            
            // Posisi awal dari tengah kotak
            const chestRect = chestBox.getBoundingClientRect();
            const startX = chestRect.left + chestRect.width / 2;
            const startY = chestRect.top + chestRect.height / 2;
            
            diamond.style.left = `${startX}px`;
            diamond.style.top = `${startY}px`;

            // Hitung arah hamburan acak
            const angle = Math.random() * Math.PI * 2;
            const distance = Math.random() * 200 + 50;
            const endX = startX + distance * Math.cos(angle);
            const endY = startY + distance * Math.sin(angle);

            // Gunakan transform untuk animasi
            diamond.style.setProperty('--x', `${endX - startX}px`);
            diamond.style.setProperty('--y', `${endY - startY}px`);

            document.body.appendChild(diamond);
            
            // Hapus elemen setelah animasi selesai
            setTimeout(() => {
                diamond.remove();
            }, 1000);
        }
    }
});