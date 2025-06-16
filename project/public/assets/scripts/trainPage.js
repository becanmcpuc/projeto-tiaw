document.addEventListener('DOMContentLoaded', () => {
    fetch('http://localhost:3000/pages/5')
        .then(response => response.json())
        .then(page => {
            const container = document.querySelector('.content');

            // Agrupar vídeos por categoria
            const videosByCategory = {};

            page.videos.forEach(video => {
                if (!videosByCategory[video.category]) {
                    videosByCategory[video.category] = [];
                }
                videosByCategory[video.category].push(video);
            });

            // Percorrer cada categoria e criar seção
            for (const category in videosByCategory) {
                const sectionHTML = `
                    <div class="container mt-4">
                        <h4 class="section-title text-center mb-4">${category}</h4>
                        <div class="row">
                            ${videosByCategory[category].map(video => `
                                <div class="col-md-3 mb-3">
                                    <div class="card my-card" style="width: 18rem;">
                                        <iframe class="card-img-top" src="${video.link}" 
                                            title="${video.title}" frameborder="0"
                                            allow="accelerometer; autoplay; clipboard-write;
                                            encrypted-media; gyroscope; picture-in-picture; web-share"
                                            referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
                                        </iframe>
                                        <div class="card-body">
                                            <h5 class="card-title">${video.title}</h5>
                                            <p class="card-text">${video.desc}</p>
                                            <a href="${video.link}" class="btn btn-primary" target="_blank">Assistir</a>
                                        </div>
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                `;

                container.innerHTML += sectionHTML;
            }

        })
        .catch(error => {
            console.error("Algo deu errado: " + error);
        });
});