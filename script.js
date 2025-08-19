document.addEventListener('DOMContentLoaded', () => {
    const openButton = document.getElementById('openButton');
    const chestBox = document.getElementById('chestBox');

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
        setTimeout(createTreasure, 500);

        setTimeout(() => {
            chestBox.classList.remove('open');
        }, 1500);
    });

    function createTreasure() {
        const itemCount = 50;
        const itemTypes = ['coin', 'gem', 'gem', 'gem']; // Atur probabilitas item
        const gemColors = ['red', 'blue', 'green'];

        for (let i = 0; i < itemCount; i++) {
            const item = document.createElement('div');
            const itemType = itemTypes[Math.floor(Math.random() * itemTypes.length)];
            
            item.classList.add('treasure-item');

            if (itemType === 'coin') {
                item.classList.add('coin');
            } else if (itemType === 'gem') {
                const randomColor = gemColors[Math.floor(Math.random() * gemColors.length)];
                item.classList.add('gem', randomColor);
            }

            const chestRect = chestBox.getBoundingClientRect();
            const startX = chestRect.left + chestRect.width / 2;
            const startY = chestRect.top + chestRect.height / 2;
            
            item.style.left = `${startX}px`;
            item.style.top = `${startY}px`;

            const angle = Math.random() * Math.PI * 2;
            const distance = Math.random() * 200 + 50;
            const endX = startX + distance * Math.cos(angle);
            const endY = startY + distance * Math.sin(angle);

            item.style.setProperty('--x', `${endX - startX}px`);
            item.style.setProperty('--y', `${endY - startY}px`);

            document.body.appendChild(item);
            
            setTimeout(() => {
                item.remove();
            }, 1000);
        }
    }
});