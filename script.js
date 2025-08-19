document.addEventListener('DOMContentLoaded', () => {
    const openButton = document.getElementById('openButton');
    const chestBox = document.getElementById('chestBox');
    const container = document.querySelector('.container');

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
            const endX = startX + distance * Math.cos(angle) - window.scrollX;
            const endY = startY + distance * Math.sin(angle) - window.scrollY;

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