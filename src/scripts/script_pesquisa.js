const db = {
  dados: [
    {
      nome: "Paracetamol",
      preco: 15.88,
      imagem: "../img/paracetamol.jpg",
      descricao:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos eum eaque repudiandae fugit quo maxime sequi distinctio, quisquam accusantium possimus, culpa eligendi architecto libero, necessitatibus sint. Commodi laudantium cupiditate a aliquam totam corporis, delectus dolorum atque sunt culpa ab! Assumenda facere dolore illo itaque, nisi vel ipsam culpa voluptatem tenetur.",
    },
    {
      nome: "Paracetamol",
      preco: 14.88,
      imagem: "../img/paracetamol.jpg",
      descricao:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos eum eaque repudiandae fugit quo maxime sequi distinctio, quisquam accusantium possimus, culpa eligendi architecto libero, necessitatibus sint. Commodi laudantium cupiditate a aliquam totam corporis, delectus dolorum atque sunt culpa ab! Assumenda facere dolore illo itaque, nisi vel ipsam culpa voluptatem tenetur.",
    },
    {
      nome: "Paracetamol",
      preco: 13.88,
      imagem: "../img/paracetamol.jpg",
      descricao:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos eum eaque repudiandae fugit quo maxime sequi distinctio, quisquam accusantium possimus, culpa eligendi architecto libero, necessitatibus sint. Commodi laudantium cupiditate a aliquam totam corporis, delectus dolorum atque sunt culpa ab! Assumenda facere dolore illo itaque, nisi vel ipsam culpa voluptatem tenetur.",
    },
    {
      nome: "Resfedryl",
      preco: 19.83,
      imagem: "../img/resfedryl.webp",
      descricao:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos eum eaque repudiandae fugit quo maxime sequi distinctio, quisquam accusantium possimus, culpa eligendi architecto libero, necessitatibus sint. Commodi laudantium cupiditate a aliquam totam corporis, delectus dolorum atque sunt culpa ab! Assumenda facere dolore illo itaque, nisi vel ipsam culpa voluptatem tenetur.",
    },
    {
      nome: "Resfedryl",
      preco: 21.83,
      imagem: "../img/resfedryl.webp",
      descricao:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos eum eaque repudiandae fugit quo maxime sequi distinctio, quisquam accusantium possimus, culpa eligendi architecto libero, necessitatibus sint. Commodi laudantium cupiditate a aliquam totam corporis, delectus dolorum atque sunt culpa ab! Assumenda facere dolore illo itaque, nisi vel ipsam culpa voluptatem tenetur.",
    },
    {
      nome: "Resfedryl",
      preco: 20.83,
      imagem: "../img/resfedryl.webp",
      descricao:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos eum eaque repudiandae fugit quo maxime sequi distinctio, quisquam accusantium possimus, culpa eligendi architecto libero, necessitatibus sint. Commodi laudantium cupiditate a aliquam totam corporis, delectus dolorum atque sunt culpa ab! Assumenda facere dolore illo itaque, nisi vel ipsam culpa voluptatem tenetur.",
    },
    {
      nome: "Loratadina",
      preco: 16.89,
      imagem: "../img/loratadina.webp",
      descricao:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos eum eaque repudiandae fugit quo maxime sequi distinctio, quisquam accusantium possimus, culpa eligendi architecto libero, necessitatibus sint. Commodi laudantium cupiditate a aliquam totam corporis, delectus dolorum atque sunt culpa ab! Assumenda facere dolore illo itaque, nisi vel ipsam culpa voluptatem tenetur.",
    },
    {
      nome: "Loratadina",
      preco: 17.89,
      imagem: "../img/loratadina.webp",
      descricao:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos eum eaque repudiandae fugit quo maxime sequi distinctio, quisquam accusantium possimus, culpa eligendi architecto libero, necessitatibus sint. Commodi laudantium cupiditate a aliquam totam corporis, delectus dolorum atque sunt culpa ab! Assumenda facere dolore illo itaque, nisi vel ipsam culpa voluptatem tenetur.",
    },
    {
      nome: "Loratadina",
      preco: 18.89,
      imagem: "../img/loratadina.webp",
      descricao:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos eum eaque repudiandae fugit quo maxime sequi distinctio, quisquam accusantium possimus, culpa eligendi architecto libero, necessitatibus sint. Commodi laudantium cupiditate a aliquam totam corporis, delectus dolorum atque sunt culpa ab! Assumenda facere dolore illo itaque, nisi vel ipsam culpa voluptatem tenetur.",
    },
  ],
};
const buttonSearch = document.querySelector("button#search-button");
const inputSearch = document.querySelector("input#input-search");
const ulContent = document.querySelector("ul#content-result");

buttonSearch.addEventListener("click", (e) => {
  e.preventDefault();

  const search = inputSearch.value.toLowerCase();

  let content = "";
  for (let i = 0; i < db.dados.length; i++) {
    if (search === db.dados[i].nome.toLowerCase()) {
      content += `
            <li id="card-content" class="row">
                <div class="col-md-4">
                    <img id="card-content-image" src="${db.dados[i].imagem}" class="img-fluid" alt="${db.dados[i].nome}">
                </div>
                <div class="col-md-8">
                    <div id="card-content-body" class="card-body">
                        <h4 class="card-title">R$${db.dados[i].preco}</h4>
                        <h5 class="card-title">${db.dados[i].nome}</h5>
                        <p class="card-text">${db.dados[i].descricao}</p>
                    </div>
                </div>
            </li>`;
    }
  }

  if (content === "") {
    for (let i = 0; i < db.dados.length; i++) {
      content += `
            <li id="card-content" class="row">
                <div class="col-md-4">
                    <img id="card-content-image" src="${db.dados[i].imagem}" class="img-fluid" alt="${db.dados[i].nome}">
                </div>
                <div class="col-md-8">
                    <div id="card-content-body" class="card-body">
                        <h4 class="card-title">R$${db.dados[i].preco}</h4>
                        <h5 class="card-title">${db.dados[i].nome}</h5>
                        <p class="card-text">${db.dados[i].descricao}</p>
                    </div>
                </div>
            </li>`;
    }
  }

  ulContent.innerHTML = content;
  visuallyHidden("div#products", "visually-hidden");
});

function visuallyHidden(elem, mod) {
  const element = document.querySelector(elem);
  element.classList.add(mod);
}
