document.addEventListener('DOMContentLoaded', () => {
    fetch('http://localhost:3000/pages/3')
    .then(response => response.json())
    .then(page => {
        const container = document.querySelector('.main-content');
        let html = '';

        html += `<h2 class="content-title">${page.titles[0].content}</h2>`;

        for(i = 0; i<3; i++){
            html += `<div class="content">
            <h1 class="number-1">${i+1}.</h1>
            <p class="content-text">
                ${page.texts[i].content}
            </p>
        </div>`;
        }

        html += `<h2 class="content-title">${page.titles[5].content}</h2>`;

        html += `<img class="rivality-image" src="assets/images/rulesPage/${page.images[0].content}" alt="Quadra">`;

        html += `<div class="positions-section"></div>`;
        
        for (i = 0; i<5; i++){
            html += `<div class="position-row">
            <img class="position-player" src="assets/images/rulesPage/${page.images[i+3].content}" alt="jokic">
            <div class="position-info">
              <h2>${i+1}. ${page.players_positions[i].name}</h2>
              <p>${page.players_positions[i].description}</p>
            </div>
          </div>`;
        }
        

        html += `</div>`;

        html += `<img class="rivality-image" src="assets/images/rulesPage/${page.images[7].content}" alt="Quadra">`;
        
        html += `</div>`;

        container.innerHTML = html;

    });

});