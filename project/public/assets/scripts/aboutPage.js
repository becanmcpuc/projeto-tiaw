document.addEventListener('DOMContentLoaded', () => {
    fetch('http://localhost:3000/pages/8')
    .then(response => response.json())
    .then(page => {
      const container = document.querySelector('.container');

      const overviewHTML = `
        <div class="section">
          <h2>${page.titles[0].content}</h2>
          <p>${page.texts[0].content}</p>
        </div>
      `;
      container.innerHTML += overviewHTML;

      const equipeTitleHTML = `
        <div class="section">
          <h2>${page.titles[1].content}</h2>
        </div>
      `;
      container.innerHTML += equipeTitleHTML;

      page.gang.forEach(member => {
        const memberDiv = document.createElement('div');
        memberDiv.classList.add('member');

        memberDiv.innerHTML = `
          <img src="${member.image}" alt="Foto de ${member.name}">
          <div class="member-info">
            <strong>${member.name}</strong>
            <p>${member.position}</p>
            <p>${member.responsabilities}</p>
            <p>${member.text}</p>
          </div>
        `;

        container.appendChild(memberDiv);
      });
    })
    .catch(error => {
      console.error('Erro ao carregar dados:', error);
    });
});

