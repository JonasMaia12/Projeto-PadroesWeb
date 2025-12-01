// URL da API Foodish (Categoria Pizza)
const API_URL = "https://foodish-api.com/api/images/pizza";

// Elemento onde as imagens serão inseridas
const galleryContainer = document.getElementById("pizza-gallery");

// Função para buscar uma imagem de pizza
async function fetchPizza() {
  try {
    const response = await fetch(API_URL);
    const data = await response.json();
    return data.image; // A API retorna um objeto { "image": "url..." }
  } catch (error) {
    console.error("Erro ao buscar pizza:", error);
    return null;
  }
}

// Função Principal para carregar 3 pizzas
async function carregarPizzas() {
  // Limpa o container e mostra loading
  galleryContainer.innerHTML =
    '<p class="loading">Buscando as melhores pizzas...</p>';

  // Cria um array de promessas para buscar 3 imagens simultaneamente
  const promessas = [fetchPizza(), fetchPizza(), fetchPizza()];

  // Aguarda todas as buscas terminarem
  const imagens = await Promise.all(promessas);

  // Limpa o loading
  galleryContainer.innerHTML = "";

  // Cria os elementos HTML dinamicamente
  imagens.forEach((imgUrl, index) => {
    if (imgUrl) {
      const card = document.createElement("div");
      card.className = "pizza-card";

      // Injeção de HTML dinâmico com Template String
      // Extrai o nome da imagem do URL
      let nomeImagem = "Pizza Especial";
      if (imgUrl) {
        const partes = imgUrl.split("/");
        const nomeArquivo = partes[partes.length - 1]; // ex: pizza1.jpg
        nomeImagem = nomeArquivo
          .replace(/(pizza)(\d+)/i, "Pizza $2")
          .replace(/\.[^.]+$/, "");
      }
      card.innerHTML = `
                  <img src="${imgUrl}" alt="Foto de uma pizza deliciosa ${nomeImagem}">
                  <div class="card-info">
                      <h4>${nomeImagem}</h4>
                      <p>R$ ${(Math.random() * (50 - 30) + 30)
                        .toFixed(2)
                        .replace(".", ",")}</p>
                  </div>
              `;
      galleryContainer.appendChild(card);
    }
  });
}

// Inicia o carregamento assim que a página abre
document.addEventListener("DOMContentLoaded", carregarPizzas);
