const ligas = [
  {
    nome: "NBA",
    imagem: "assets/images/leaguesPage/nba.png",
    pais: "Estados Unidos",
    fundacao: 1946,
    times: 30,
    temporada: "Outubro a Junho",
    formato: {
      descricao: "Temporada regular com 82 jogos. Os 8 melhores de cada conferência vão aos playoffs. Campeões do Leste e Oeste disputam as finais.",
      playoffs: "Melhor de 7 jogos"
    },
    maior_campeao: "Boston Celtics(18 títulos)",
    jogadores_famosos: ["Michael Jordan", "LeBron James", "Stephen Curry", "Kobe Bryant"],
    site: "https://www.nba.com",
    criado_por: "Board of Governors da Basketball Association of America (BAA), que depois se tornou a NBA"
  },
  {
    nome: "Euroliga",
    imagem: "../images/leaguesPage/euroliga.png",
    continente: "Europa",
    fundacao: 1958,
    times: 18,
    temporada: "Outubro a Maio",
    formato: {
      descricao: "Todos contra todos em pontos corridos. Top 8 avançam aos playoffs (melhor de 5). Final Four decide o campeão.",
      final_four: true
    },
    maior_campeao: "Real Madrid (11 títulos)",
    clubes_famosos: ["Real Madrid", "Olympiacos", "FC Barcelona", "Fenerbahçe"],
    jogadores_famosos: ["Vassilis Spanoulis", "Luka Dončić", "Sergio Llull"],
    site: "https://www.euroleaguebasketball.net",
    criado_por: "FIBA Europe (originalmente), hoje organizada pela Euroleague Basketball"
  },
  {
    nome: "NBB",
    imagem: "assets/images/leaguesPage/nbb.png",
    pais: "Brasil",
    fundacao: 2008,
    times: "15 a 18 (varia por temporada)",
    temporada: "Outubro a Maio",
    formato: {
      descricao: "Temporada regular em pontos corridos. Playoffs com os melhores classificados. Finais em melhor de 5 jogos.",
      playoffs: "Melhor de 5 jogos"
    },
    maior_campeao: "Flamengo",
    clubes_famosos: ["Flamengo", "Franca", "Bauru", "Minas", "São Paulo"],
    jogadores_famosos: ["Marcelinho Machado", "Alex Garcia", "Leandro Barbosa"],
    site: "https://lnb.com.br",
    criado_por: "Liga Nacional de Basquete (LNB), com apoio da Confederação Brasileira de Basketball (CBB)"
  }
];

const container = document.getElementById("ligas-container");

ligas.forEach((liga) => {
  const div = document.createElement("div");
  div.className = "liga";
  div.innerHTML = `
    <img src="imgs/${liga.imagem}" alt="${liga.nome} logo" class="logo">
    <h2>${liga.nome}</h2>
    <p><strong>Fundação:</strong> ${liga.fundacao}</p>
    <p><strong>País/Continente:</strong> ${liga.pais || liga.continente}</p>
    <p><strong>Times:</strong> ${liga.times}</p>
    <p><strong>Temporada:</strong> ${liga.temporada}</p>
    <p><strong>Formato:</strong> ${liga.formato.descricao}</p>
    ${liga.formato.playoffs ? `<p><strong>Playoffs:</strong> ${liga.formato.playoffs}</p>` : ""}
    ${liga.formato.final_four ? `<p><strong>Final Four:</strong> Sim</p>` : ""}
    <p><strong>Maior campeão:</strong> ${liga.maior_campeao}</p>
    ${liga.clubes_famosos ? `<p><strong>Clubes famosos:</strong> ${liga.clubes_famosos.join(", ")}</p>` : ""}
    <p><strong>Jogadores famosos:</strong> ${liga.jogadores_famosos.join(", ")}</p>
    <p><strong>Site oficial:</strong> <a href="${liga.site}" target="_blank">${liga.site}</a></p>
    <p><strong>Criado por:</strong> ${liga.criado_por}</p>
  `;
  container.appendChild(div);
});
