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

    createDust();

    openButton.addEventListener('click', () => {
        chestBox.classList.add('open');
        
        // Panggil fungsi untuk membuat kembang api
        setTimeout(createFireworks, 500);

        // Hapus kelas 'open' setelah animasi selesai
        setTimeout(() => {
            chestBox.classList.remove('open');
        }, 1500);
    });

    // Fungsi untuk membuat dan menghamburkan kembang api
    function createFireworks() {
        const particleCount = 100;
        const colors = ['#ff69b4', '#00bfff']; // Pink dan Biru
        
        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('div');
            const randomColor = colors[Math.floor(Math.random() * colors.length)];
            particle.classList.add('firework-particle');
            
            // Set warna partikel
            particle.style.backgroundColor = randomColor;

            // Posisi awal dari tengah kotak
            const chestRect = chestBox.getBoundingClientRect();
            const startX = chestRect.left + chestRect.width / 2;
            const startY = chestRect.top + chestRect.height / 2;
            
            particle.style.left = `${startX}px`;
            particle.style.top = `${startY}px`;

            // Hitung arah hamburan acak
            const angle = Math.random() * Math.PI * 2;
            const distance = Math.random() * 200 + 50;
            const endX = startX + distance * Math.cos(angle);
            const endY = startY + distance * Math.sin(angle);

            // Gunakan transform untuk animasi
            particle.style.setProperty('--x', `${endX - startX}px`);
            particle.style.setProperty('--y', `${endY - startY}px`);

            document.body.appendChild(particle);
            
            // Hapus elemen setelah animasi selesai
            setTimeout(() => {
                particle.remove();
            }, 1000);
        }
    }
});