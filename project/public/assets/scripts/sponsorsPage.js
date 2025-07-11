const leaguesData = {
  "leagues": [
    {
      "name": "NBA ",
      "description": "A liga de basquete mais assistida do mundo, com faturamento de patrocínios de US$ 1,66 bilhão na temporada 2022/2023, crescendo 1,3% no ano seguinte.",
      "sponsors": [
        {
          "name": "Nike",
          "details": "Fornecedora oficial de uniformes desde 2017, com contratos vitalícios com estrelas como LeBron James, Kevin Durant e Michael Jordan (linha Air Jordan). Central na moda e cultura pop do basquete.",
          "imagem": "assets/images/sponsorsPage/nike-logo.png"
        },
        {
          "name": "Coca-Cola",
          "details": "Parceira de longa data, promove marcas como Sprite e Powerade em campanhas publicitárias e eventos como o All-Star Game.",
          "imagem": "assets/images/sponsorsPage/coca-cola-logo.png"
        },
        {
          "name": "PepsiCo",
          "details": "Concorrente da Coca-Cola, destaca-se com Gatorade, Mountain Dew e Pepsi, criando conteúdo para engajar fãs.",
          "imagem": "assets/images/sponsorsPage/pepsico-logo.png"
        },
        {
          "name": "State Farm",
          "details": "Patrocinadora oficial de seguros, nomeia o 'State Farm All-Star Saturday Night' e tem forte presença em anúncios durante jogos e playoffs.",
          "imagem": "assets/images/sponsorsPage/statefarm-logo.png"
        }
      ],
      "influential_sectors": {
        "Bebidas e Alimentação": "21%",
        "Serviços Financeiros": "14%",
        "Tecnologia": "US$ 122 milhões",
        "Saúde": "US$ 105 milhões"
      }
    },
    {
      "name": "EuroLeague",
      "description": "Principal liga de basquete da Europa, com clubes de elite como Real Madrid e Barcelona. Menos visibilidade global que a NBA, mas com foco em mercados regionais.",
      "sponsors": [
        {
          "name": "Turkish Airlines",
          "details": "Patrocinadora principal, dá nome à competição (Turkish Airlines EuroLeague) desde 2010, com forte presença em arenas e transmissões.",
          "imagem": "assets/images/sponsorsPage/turkish-airlines-logo.png"
        },
        {
          "name": "Adidas",
          "details": "Fornece uniformes e equipamentos para times e eventos, competindo com a Nike no mercado europeu.",
          "imagem": "assets/images/sponsorsPage/adidas-logo.png"
        },
        {
          "name": "Bet365",
          "details": "Marcas de apostas esportivas em crescimento, com ativações digitais e promoções durante jogos.",
          "imagem": "assets/images/sponsorsPage/bet365-logo.png"
        },
        {
          "name": "Heineken",
          "details": "Presença constante em eventos e anúncios, especialmente em mercados europeus onde a cerveja é culturalmente relevante.",
          "imagem": "assets/images/sponsorsPage/heineken-logo.png"
        }
      ],
      "influential_sectors": {
        "Avição": "Alta relevância",
        "Apostas Esportivas": "Em crescimento",
        "Marcas Esportivas": "Forte presença"
      }
    },
    {
      "name": "NBB ",
      "description": "Principal liga brasileira, com 58 milhões de fãs e crescente apelo comercial. A LNB oferece plataformas de marketing personalizadas para marcas.",
      "sponsors": [
        {
          "name": "Caixa e Banco do Brasil",
          "details": "Bancos tradicionais que patrocinam times como Flamengo e Franca, com exposição em uniformes e quadras.",
          "imagem": "assets/images/sponsorsPage/caixa-bb-logo.png"
        },
        {
          "name": "Brahma",
          "details": "Marca de cerveja com forte presença em jogos, anúncios e ativações, como promoções em ginásios.",
          "imagem": "assets/images/sponsorsPage/brahma-logo.png"
        },
        {
          "name": "Ipanema",
          "details": "Farmácia com visibilidade em quadras e eventos, focada no público local.",
          "imagem": "assets/images/sponsorsPage/ipanema-logo.png"
        },
        {
          "name": "BMG Banco",
          "details": "Patrocinador máster, com exposição em todas as quadras e campanhas de mídia.",
          "imagem": "assets/images/sponsorsPage/bmg-logo.png"
        }
      ],
      "influential_sectors": {
        "Serviços Financeiros": "Alta relevância",
        "Bebidas": "Forte presença",
        "iGaming": "Em crescimento"
      },
      "impact": "97% dos fãs do NBB compraram produtos de patrocinadores nos últimos seis meses, mostrando forte retorno para as marcas."
    }
  ]
};


    let currentLeagueIndex = 0;
    let currentSponsorIndex = 0;

    function updateDisplay() {
      currentLeagueIndex = document.getElementById('leagueSelect').value;
      const league = leaguesData.leagues[currentLeagueIndex];
      document.getElementById('leagueTitle').textContent = `Patrocinadores - ${league.name}`;
      currentSponsorIndex = 0; // Reseta para o primeiro patrocinador ao trocar de liga
      updateSponsors();
    }

    function updateSponsors() {
  const league = leaguesData.leagues[currentLeagueIndex];
  const topSponsor = document.getElementById('topSponsor');
  const topSponsorDetails = document.getElementById('topSponsorDetails');
  const sponsorGrid = document.getElementById('sponsorGrid');

  const sponsor = league.sponsors[currentSponsorIndex];

 
  topSponsorDetails.innerHTML = `
    <strong>${sponsor.name}</strong><br>
    ${sponsor.details}
    ${sponsor.imagem ? `<br><img src="${sponsor.imagem}" alt="${sponsor.name}" style="max-width: 200px; margin-top: 10px;">` : ''}
  `;

  // Cria a grade de patrocinadores (excluindo o atual Top 1)
  sponsorGrid.innerHTML = '';
  for (let i = 0; i < 3 && i + currentSponsorIndex + 1 < league.sponsors.length; i++) {
    const item = document.createElement('div');
    item.className = 'sponsor-item';
    const sponsorItem = league.sponsors[currentSponsorIndex + i + 1];
    item.innerHTML = `
      ${sponsorItem.imagem ? `<img src="${sponsorItem.imagem}" alt="${sponsorItem.name}" style="max-width: 100px;"><br>` : ''}
    `;
    item.onclick = () => cycleToSponsor(currentSponsorIndex + i + 1);
    sponsorGrid.appendChild(item);
  }
}


    function cycleSponsor() {
      const league = leaguesData.leagues[currentLeagueIndex];
      currentSponsorIndex = (currentSponsorIndex + 1) % league.sponsors.length;
      updateSponsors();
    }

    function cycleToSponsor(index) {
      currentSponsorIndex = index;
      updateSponsors();
    }

    // Inicializa a exibição com a NBA
    updateDisplay();