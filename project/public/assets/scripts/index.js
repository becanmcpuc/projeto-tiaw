document.addEventListener('DOMContentLoaded', () => {
    fetch('http://localhost:3000/pages/1')
    .then(response => response.json())
    .then(page => {
        const container = document.querySelector('.main-content');
        let html = '';

        // Introdução
        html += `<h2 class="content-title">${page.titles[0].content}</h2>`;
        
        for (let i = 0; i < 2; i++) {
            html += `
                <div class="content">
                    <img class="content-image" src="assets/images/index/${page.images[i].content}" alt="image">
                    <p class="content-text">${page.texts[i].content}</p>
                </div>
            `;
        }

        // História
        html += `<h2 class="content-title">${page.titles[1].content}</h2>`;
        html += `
            <div class="content-history">
                <img class="history-image" src="assets/images/index/${page.images[2].content}" alt="history">
                <p class="content-text">${page.texts[2].content}</p>
            </div>
        `;

        // Ascensão
        html += `<h2 class="content-title">${page.titles[2].content}</h2>`;
        html += `
            <div class="content-rivality">
                <img class="rivality-image" src="assets/images/index/${page.images[3].content}" alt="rivality">
                <p class="content-text-rivality">${page.texts[3].content}</p>
            </div>
        `;

        // Jogadores All Time
        html += `<h2 class="content-title">${page.titles[3].content}</h2>`;
        html += `<p class="content-text-all-time">${page.texts[4].content}</p>`;

        html += `<div class="grid-all-time">`;
        for (let i = 0; i < 3; i++) {
            html += `
                <div class="all-time-player">
                    <h2>${page.titles[4 + i].content}</h2>
                    <img class="all-time-image" src="assets/images/index/${page.images[4 + i].content}" alt="player">
                    <p>${page.texts[5 + i].content}</p>
                </div>
            `;
        }
        html += `</div>`;

        container.innerHTML = html;
    })
    .catch(error => {
        console.error("Algo deu errado: " + error);
    });
});
