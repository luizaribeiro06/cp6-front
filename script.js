document.getElementById('startBtn').addEventListener('click', function () {
  document.getElementById('integrantes').scrollIntoView({ behavior: 'smooth' });
});

//dados dos pokemons
const pokemonsInfo = {
  bulbasaur: {
    nome: "Bulbasaur",
    altura: "0.7 m",
    peso: "6.9 kg",
    categoria: "Seed",
    tipo: "Planta",
    habilidade: "Overgrow",
    fraqueza: "Fogo",
    evolucao: ["bulbasaur.png", "bulbasaur2.png", "bulbasaur3.png"]
  },
  charmander: {
    nome: "Charmander",
    altura: "0.6 m",
    peso: "8.5 kg",
    categoria: "Lizard",
    tipo: "Fogo",
    habilidade: "Blaze",
    fraqueza: "Água",
    evolucao: ["charmander.png", "charmander2.png", "charmander3.png"]
  },
  abra: {
    nome: "Abra",
    altura: "0.9 m",
    peso: "19.5 kg",
    categoria: "Normal",
    tipo: "Psíquico",
    habilidade: "Synchronize",
    fraqueza: "Escuridão",
    evolucao: ["abra.png", "abra2.png", "abra3.png"]
  },
  squirtle: {
    nome: "Squirtle",
    altura: "0.5 m",
    peso: "9.0 kg",
    categoria: "Tiny Turtle",
    tipo: "Água",
    habilidade: "Torrent",
    fraqueza: "Planta",
    evolucao: ["squirtle.png", "squirtle2.png", "squirtle3.png"]
  },
  clefairy: {
    nome: "Clefairy",
    altura: "0.6 m",
    peso: "7.5 kg",
    categoria: "Fairy",
    tipo: "Normal",
    habilidade: "Cute Charm",
    fraqueza: "Poison",
    evolucao: ["clefairy.png", "clefairy2.png", "clefairy3.png"]
  },
  growlithe: {
    nome: "Growlithe",
    altura: "0.7 m",
    peso: "19.0 kg",
    categoria: "Puppy",
    tipo: "Fogo",
    habilidade: "Flash Fire",
    fraqueza: "Água",
    evolucao: ["growlithe.png", "growlithe2.png", "growlithe3.png"]
  },
  swablu: {
    nome: "Swablu",
    altura: "0.4 m",
    peso: "1.2 kg",
    categoria: "Cotton Bird",
    tipo: "Normal",
    habilidade: "Natural Cure",
    fraqueza: "Eletricidade",
    evolucao: ["swablu.png", "swablu2.png", "swablu3.png"]
  },
  snorlax: {
    nome: "Snorlax",
    altura: "2.1 m",
    peso: "460.0 kg",
    categoria: "Sleeping",
    tipo: "Normal",
    habilidade: "Immunity",
    fraqueza: "Luta",
    evolucao: ["snorlax.png", "snorlax2.png", "snorlax3.png"]
  },
  caterpie: {
    nome: "Caterpie",
    altura: "0.3 m",
    peso: "2.9 kg",
    categoria: "Worm",
    tipo: "Bug",
    habilidade: "Shield Dust",
    fraqueza: "Fogo",
    evolucao: ["caterpie.png", "caterpie2.png", "caterpie3.png"]
  },
  jigglypuff: {
    nome: "Jigglypuff",
    altura: "0.5 m",
    peso: "5.5 kg",
    categoria: "Baloon",
    tipo: "Normal",
    habilidade: "Competitive",
    fraqueza: "Veneno",
    evolucao: ["jigglypuff.png", "jigglypuff2.png", "jigglypuff3.png"]
  },
  lapras: {
    nome: "Lapras",
    altura: "2.5 m",
    peso: "220.0 kg",
    categoria: "Transport",
    tipo: "Água",
    habilidade: "Shell Armor",
    fraqueza: "Planta",
    evolucao: ["lapras.png", "lapras2.png", "lapras3.png"]
  },
  ponyta: {
    nome: "Ponyta",
    altura: "1.0 m",
    peso: "30.0 kg",
    categoria: "Fire Horse",
    tipo: "Fogo",
    habilidade: "Run Away",
    fraqueza: "Água",
    evolucao: ["ponyta.png", "ponyta2.png", "ponyta3.png"]
  },
  eevee: {
    nome: "Eevee",
    altura: "0.3 m",
    peso: "6.5 kg",
    categoria: "Evolution",
    tipo: "Normal",
    habilidade: "Run Away",
    fraqueza: "Luta",
    evolucao: ["eevee.png", "eevee2.png", "eevee3.png"]
  },
  krabby: {
    nome: "Krabby",
    altura: "0.4 m",
    peso: "6.5 kg",
    categoria: "River Crab",
    tipo: "Água",
    habilidade: "Shell Armor",
    fraqueza: "Planta",
    evolucao: ["krabby.png", "krabby2.png", "krabby3.png"]
  },
  pidgey: {
    nome: "Pidgey",
    altura: "0.3 m",
    peso: "1.8 kg",
    categoria: "Tiny Bird",
    tipo: "Normal",
    habilidade: "Keen Eye",
    fraqueza: "Eletricidade",
    evolucao: ["pidgey.png", "pidgey2.png", "pidgey3.png"]
  },
  pikachu: {
    nome: "Pikachu",
    altura: "0.4 m",
    peso: "6.0 kg",
    categoria: "Mouse",
    tipo: "Elétrico",
    habilidade: "Static",
    fraqueza: "Ground",
    evolucao: ["pikachu.png", "pikachu2.png", "pikachu3.png"]
  }
};


//filtros
document.querySelectorAll('.filtro').forEach(filtro => {
  filtro.addEventListener('click', () => {
    document.querySelectorAll('.filtro').forEach(f => f.classList.remove('ativo'));
    filtro.classList.add('ativo');
  });
});

const filtros = document.querySelectorAll(".filtro");
const grid = document.querySelector(".pokemon-grid");
const pokemons = [
  { nome: "Charmander", tipo: "Fogo", src: "./assets/imgs/charmander.png" },
  { nome: "Bulbasaur", tipo: "Planta", src: "./assets/imgs/bulbasaur.png" },
  { nome: "Abra", tipo: "Normal", src: "./assets/imgs/abra.png" },
  { nome: "Squirtle", tipo: "Água", src: "./assets/imgs/squirtle.png" },
  { nome: "Clefairy", tipo: "Normal", src: "./assets/imgs/clefairy.png" },
  { nome: "Growlithe", tipo: "Fogo", src: "./assets/imgs/growlithe.png" },
  { nome: "Swablu", tipo: "Voador", src: "./assets/imgs/swablu.png" },
  { nome: "Snorlax", tipo: "Normal", src: "./assets/imgs/snorlax.png" },
  { nome: "Caterpie", tipo: "Planta", src: "./assets/imgs/caterpie.png" },
  { nome: "Jigglypuff", tipo: "Normal", src: "./assets/imgs/jigglypuff.png" },
  { nome: "Lapras", tipo: "Normal", src: "./assets/imgs/lapras.png" },
  { nome: "Ponyta", tipo: "Fogo", src: "./assets/imgs/ponyta.png" },
  { nome: "Eevee", tipo: "Normal", src: "./assets/imgs/eevee.png" },
  { nome: "Krabby", tipo: "Água", src: "./assets/imgs/krabby.png" },
  { nome: "Pidgey", tipo: "Voador", src: "./assets/imgs/pidgey.png" },
  { nome: "Pikachu", tipo: "Elétrico", src: "./assets/imgs/pikachu.png" }
];

function renderizarPokemons(tipo) {
  grid.innerHTML = "";
  const filtrados = tipo === "Todos" ? pokemons : pokemons.filter(p => p.tipo === tipo);
  filtrados.forEach(p => {
    const img = document.createElement("img");
    img.src = p.src;
    img.alt = `Imagem do Pokémon ${p.nome}`;
    img.dataset.nome = p.nome.toLowerCase();
    grid.appendChild(img);
  });
}

filtros.forEach(item => {
  item.addEventListener("click", () => {
    renderizarPokemons(item.textContent.trim());
  });
});

renderizarPokemons("Todos");


//exibir que a carta foi criada com sucesso
document.getElementById('form-carta').addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Carta criada com sucesso!');
});

document.querySelectorAll('.pokemon-grid img').forEach(img => {
  img.addEventListener('click', () => {
    const nome = img.dataset.nome;
    const p = pokemonsInfo[nome];

    if (p) {
      //atualiza os campos de texto
      document.getElementById("pokemon-name").textContent = p.nome;
      document.getElementById("pokemon-altura").textContent = p.altura;
      document.getElementById("pokemon-peso").textContent = p.peso;
      document.getElementById("pokemon-categoria").textContent = p.categoria;
      document.getElementById("pokemon-tipo").textContent = p.tipo;
      document.getElementById("pokemon-habilidade").textContent = p.habilidade;
      document.getElementById("pokemon-fraqueza").textContent = p.fraqueza;

      //atualiza imagens da evolução
      const evolucaoContainer = document.getElementById('pokemon-evolucao');
      evolucaoContainer.innerHTML = "";
      for (let i = 1; i <= 3; i++) {
        const imgEvolucao = document.createElement("img");
        imgEvolucao.src = `./assets/imgs/${nome}${i === 1 ? '' : i}.png`;
        imgEvolucao.alt = `Evolução ${i}`;
        imgEvolucao.style.height = "80px";
        evolucaoContainer.appendChild(imgEvolucao);

        if (i < 3) {
          const arrow = document.createElement("span");
          arrow.textContent = " > ";
          arrow.style.fontSize = "1.5rem";
          evolucaoContainer.appendChild(arrow);
        }
      }

      //exibe o modal
      document.getElementById('pokemonModal').style.display = 'flex';
    }
  });
});

//fecha o modal
document.getElementById('closeModal').addEventListener('click', () => {
  document.getElementById('pokemonModal').style.display = 'none';
});

document.getElementById("form-carta").addEventListener("submit", function (e) {
  e.preventDefault();

  const nome = document.getElementById("nome").value;
  const vida = document.getElementById("vida").value;
  const ataque = document.getElementById("ataque").value;
  const resistencia = document.getElementById("resistencia").value;
  const selecionaPokemon = document.getElementById("pokemon").value.toLowerCase();
  const categoria = document.getElementById("categoria").value;

  //atualiza o texto dos campos 
  document.getElementById("campo-nome").textContent = nome;
  document.getElementById("campo-vida").textContent = vida;
  document.getElementById("campo-ataque").textContent = `ATK: ${ataque}`;
  document.getElementById("campo-resistencia").textContent = `RES: ${resistencia}`;
  document.getElementById("pokemon-carta-categoria").textContent = categoria;

  //atualiza a imagem do pokemon
  const imgPokemon = document.getElementById("pokemon-carta-imagem");
  if (selecionaPokemon && selecionaPokemon !== "selecione o pokemon") {
    imgPokemon.src = `./assets/imgs/${selecionaPokemon}.png`;
    imgPokemon.style.display = "block";
  } else {
    imgPokemon.style.display = "none";
  }
});


//menu
function toggleMenu() {
  const navList = document.querySelector("nav ul");
  navList.classList.toggle("show");
}
